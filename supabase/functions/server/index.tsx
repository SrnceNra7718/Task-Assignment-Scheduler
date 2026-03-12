import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cf56d43f/health", (c) => {
  return c.json({ status: "ok" });
});

// Generate schedule endpoint
app.post("/make-server-cf56d43f/generate-schedule", async (c) => {
  try {
    const { month, year } = await c.req.json();

    console.log(`Generating schedule for ${month}/${year}`);

    // Get all events for the month
    const { data: events, error: eventsError } = await supabase
      .from("events")
      .select("*, event_types(*)")
      .eq("month", month)
      .eq("year", year)
      .order("event_date");

    if (eventsError) {
      console.error("Error fetching events:", eventsError);
      return c.json({ error: "Failed to fetch events" }, 500);
    }

    if (!events || events.length === 0) {
      return c.json({ message: "No events found for this month" }, 404);
    }

    // Get all active tasks
    const { data: tasks, error: tasksError } = await supabase
      .from("tasks")
      .select("*")
      .eq("is_active", true)
      .order("id");

    if (tasksError) {
      console.error("Error fetching tasks:", tasksError);
      return c.json({ error: "Failed to fetch tasks" }, 500);
    }

    // For each event, assign tasks
    for (const event of events) {
      console.log(`Processing event: ${event.event_date}`);

      // Delete existing assignments for this event
      await supabase.from("assignments").delete().eq("event_id", event.id);

      // Get assignments already made this month (for balancing)
      const { data: monthlyStats } = await supabase
        .from("monthly_assignment_count")
        .select("*")
        .eq("month", month)
        .eq("year", year);

      const assignmentCounts: Record<number, number> = {};
      monthlyStats?.forEach((stat: any) => {
        assignmentCounts[stat.brother_id] = stat.total_assignments;
      });

      // Track brothers already assigned to this event
      const assignedBrothersThisEvent = new Set<number>();

      // Assign each task
      for (const task of tasks || []) {
        // Get eligible brothers for this task and event type
        const { data: eligibleBrothers, error: eligibilityError } =
          await supabase
            .from("brother_task_eligibility")
            .select(
              `
            brother_id,
            brothers (*)
          `,
            )
            .eq("task_id", task.id)
            .eq("event_type_id", event.event_type_id);

        if (eligibilityError) {
          console.error("Error fetching eligibility:", eligibilityError);
          continue;
        }

        if (!eligibleBrothers || eligibleBrothers.length === 0) {
          console.log(`No eligible brothers for task ${task.name}`);
          continue;
        }

        // Filter out inactive brothers and those already assigned this event
        const availableBrothers = eligibleBrothers.filter(
          (item: any) =>
            item.brothers?.is_active &&
            !assignedBrothersThisEvent.has(item.brother_id),
        );

        if (availableBrothers.length === 0) {
          console.log(`No available brothers for task ${task.name}`);
          continue;
        }

        // Sort by least assigned this month
        availableBrothers.sort((a: any, b: any) => {
          const aCount = assignmentCounts[a.brother_id] || 0;
          const bCount = assignmentCounts[b.brother_id] || 0;

          if (aCount !== bCount) {
            return aCount - bCount;
          }

          // Random tie-breaker
          return Math.random() - 0.5;
        });

        // Select the first (least assigned) brother
        const selectedBrother = availableBrothers[0];

        // Create assignment
        const { error: assignmentError } = await supabase
          .from("assignments")
          .insert({
            event_id: event.id,
            task_id: task.id,
            brother_id: selectedBrother.brother_id,
          });

        if (assignmentError) {
          console.error("Error creating assignment:", assignmentError);
          continue;
        }

        // Update tracking
        assignedBrothersThisEvent.add(selectedBrother.brother_id);
        assignmentCounts[selectedBrother.brother_id] =
          (assignmentCounts[selectedBrother.brother_id] || 0) + 1;

        console.log(
          `Assigned ${task.name} to brother ${selectedBrother.brother_id}`,
        );
      }
    }

    return c.json({
      success: true,
      message: `Successfully generated schedule for ${month}/${year}`,
      eventsProcessed: events.length,
    });
  } catch (error) {
    console.error("Error generating schedule:", error);
    return c.json(
      { error: "Failed to generate schedule", details: error.message },
      500,
    );
  }
});

Deno.serve(app.fetch);
