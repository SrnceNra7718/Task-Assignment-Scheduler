# Task Assignment System - Database Setup Guide

## Getting Started

Before you can use the Task Assignment System, you need to set up your Supabase database with the required tables and initial data.

## Step 1: Create Database Tables

Run these SQL commands in your Supabase SQL Editor (in order):

### 1. Enable UUID Extension
\`\`\`sql
create extension if not exists "pgcrypto";
\`\`\`

### 2. Create Brothers Table
\`\`\`sql
create table if not exists brothers (
  id bigint primary key,
  full_name text not null,
  is_active boolean default true,
  created_at timestamp default now()
);
\`\`\`

### 3. Create Tasks Table
\`\`\`sql
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  is_active boolean default true,
  created_at timestamp default now()
);
\`\`\`

### 4. Create Event Types Table
\`\`\`sql
create table if not exists event_types (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);
\`\`\`

### 5. Create Events Table
\`\`\`sql
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  event_date date not null unique,
  event_type_id uuid references event_types(id),
  month integer not null,
  year integer not null,
  created_at timestamp default now()
);
\`\`\`

### 6. Create Brother Task Eligibility Table
\`\`\`sql
create table if not exists brother_task_eligibility (
  id uuid primary key default gen_random_uuid(),
  brother_id bigint references brothers(id) on delete cascade,
  task_id uuid references tasks(id) on delete cascade,
  event_type_id uuid references event_types(id) on delete cascade,
  unique(brother_id, task_id, event_type_id)
);
\`\`\`

### 7. Create Assignments Table
\`\`\`sql
create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  task_id uuid references tasks(id),
  brother_id bigint references brothers(id),
  created_at timestamp default now(),
  unique(event_id, task_id),
  unique(event_id, brother_id)
);
\`\`\`

### 8. Create Monthly Assignment View
\`\`\`sql
create or replace view monthly_assignment_count as
select 
  brother_id,
  extract(month from e.event_date) as month,
  extract(year from e.event_date) as year,
  count(*) as total_assignments
from assignments a
join events e on e.id = a.event_id
group by brother_id, month, year;
\`\`\`

## Step 2: Seed Initial Data

### Insert Event Types
\`\`\`sql
insert into event_types (name) values
('MIDWEEK'),
('WEEKEND');
\`\`\`

### Insert Tasks
\`\`\`sql
insert into tasks (name) values
('AV-1'),
('AV-2'),
('CAMERA'),
('ATTENDANCE/AUDITORIUM'),
('ENTRANCE-1'),
('ENTRANCE-2'),
('ENTRANCE-3');
\`\`\`

### Insert Brothers (Example)
\`\`\`sql
insert into brothers (id, full_name) values
(1,'Allan Cabalquinto'),
(2,'Christian Rhey Rodriguez'),
(3,'Christopher Caballes'),
(4,'Eduard Bulfa'),
(5,'Elijah De Guzman'),
(6,'Erwin Ochoco'),
(7,'Renzel Nora'),
(8,'John Vernie Dolores'),
(9,'Josiah Pelipada'),
(10,'Solomon Nora'),
(11,'Sonny Resurreccion'),
(12,'Sorence Nora'),
(13,'Joshua Coa');
\`\`\`

### Set Up Eligibility (MIDWEEK Events)

#### MIDWEEK AV-1 Eligibility
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name='AV-1'
and e.name='MIDWEEK'
and b.id in (12,13,7,1);
\`\`\`

#### MIDWEEK AV-2 Eligibility
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name='AV-2'
and e.name='MIDWEEK'
and b.id in (12,13,7,1,6,8,9,10,3,2,5);
\`\`\`

#### MIDWEEK Other Tasks (All Brothers)
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name in ('CAMERA','ATTENDANCE/AUDITORIUM','ENTRANCE-1','ENTRANCE-2','ENTRANCE-3')
and e.name='MIDWEEK';
\`\`\`

### Set Up Eligibility (WEEKEND Events)

#### WEEKEND AV-1 Eligibility
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name='AV-1'
and e.name='WEEKEND'
and b.id in (12,13,7,1,10,9);
\`\`\`

#### WEEKEND AV-2 Eligibility
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name='AV-2'
and e.name='WEEKEND'
and b.id in (12,13,7,1,6,8,9,10,3,2,5);
\`\`\`

#### WEEKEND Other Tasks (All Brothers)
\`\`\`sql
insert into brother_task_eligibility (brother_id, task_id, event_type_id)
select b.id, t.id, e.id
from brothers b, tasks t, event_types e
where t.name in ('CAMERA','ATTENDANCE/AUDITORIUM','ENTRANCE-1','ENTRANCE-2','ENTRANCE-3')
and e.name='WEEKEND';
\`\`\`

## Step 3: Add Sample Events

To test the system, add some events for the current month:

\`\`\`sql
-- Example: Add events for March 2026
-- Replace dates with your actual meeting dates

insert into events (event_date, event_type_id, month, year)
select '2026-03-05', id, 3, 2026 from event_types where name='MIDWEEK';

insert into events (event_date, event_type_id, month, year)
select '2026-03-09', id, 3, 2026 from event_types where name='WEEKEND';

insert into events (event_date, event_type_id, month, year)
select '2026-03-12', id, 3, 2026 from event_types where name='MIDWEEK';

insert into events (event_date, event_type_id, month, year)
select '2026-03-16', id, 3, 2026 from event_types where name='WEEKEND';

insert into events (event_date, event_type_id, month, year)
select '2026-03-19', id, 3, 2026 from event_types where name='MIDWEEK';

insert into events (event_date, event_type_id, month, year)
select '2026-03-23', id, 3, 2026 from event_types where name='WEEKEND';

insert into events (event_date, event_type_id, month, year)
select '2026-03-26', id, 3, 2026 from event_types where name='MIDWEEK';

insert into events (event_date, event_type_id, month, year)
select '2026-03-30', id, 3, 2026 from event_types where name='WEEKEND';
\`\`\`

## Step 4: Test the System

1. Open your application
2. Navigate to the Dashboard
3. Select the month with your sample events
4. Click "Generate Schedule" to auto-assign brothers to tasks
5. View the calendar or table view to see assignments
6. Click on any event to manually edit assignments

## Using the Application

### Dashboard
- View monthly calendar with all assignments
- Switch between calendar and table views
- Auto-generate assignments with the "Generate Schedule" button
- Click events to edit assignments

### Brothers Management
- Add, edit, or delete brothers
- Set task eligibility for each brother
- Toggle active/inactive status
- View assignment counts

### Tasks Management
- Enable/disable tasks
- Edit task names

### Event Calendar
- Add meeting dates
- Specify event types (MIDWEEK/WEEKEND)
- Delete events

### Settings
- View automation rules
- System information

## Important Notes

- The auto-distribution algorithm ensures:
  - No brother is assigned multiple tasks on the same day
  - Assignments are balanced across all brothers
  - Only eligible brothers are assigned to specific tasks
  - Active brothers are prioritized

- You can always manually edit assignments after auto-generation

- Use the Brothers Management page to update eligibility as needed

## Troubleshooting

If the "Generate Schedule" button doesn't work:
1. Make sure you have events created for the selected month
2. Check that brothers have eligibility set for the event types
3. Ensure brothers are marked as active
4. Check the browser console for any error messages
