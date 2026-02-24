export interface Brother {
  id: number;
  full_name: string;
  is_active: boolean;
  created_at: string;
}

export interface Task {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
}

export interface EventType {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  event_date: string;
  event_type_id: string;
  month: number;
  year: number;
  created_at: string;
}

export interface Assignment {
  id: string;
  event_id: string;
  task_id: string;
  brother_id: number;
  created_at: string;
}

export interface BrotherTaskEligibility {
  id: string;
  brother_id: number;
  task_id: string;
  event_type_id: string;
}

export interface AssignmentWithDetails extends Assignment {
  brother?: Brother;
  task?: Task;
  event?: Event;
}

export interface EventWithAssignments extends Event {
  assignments: AssignmentWithDetails[];
  event_type?: EventType;
}
