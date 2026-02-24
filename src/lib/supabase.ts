import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

const supabaseUrl = `https://${projectId}.supabase.co`;

export const supabase = createClient(supabaseUrl, publicAnonKey);

export type Database = {
  brothers: {
    id: number;
    full_name: string;
    is_active: boolean;
    created_at: string;
  };
  tasks: {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
  };
  event_types: {
    id: string;
    name: string;
  };
  events: {
    id: string;
    event_date: string;
    event_type_id: string;
    month: number;
    year: number;
    created_at: string;
  };
  assignments: {
    id: string;
    event_id: string;
    task_id: string;
    brother_id: number;
    created_at: string;
  };
  brother_task_eligibility: {
    id: string;
    brother_id: number;
    task_id: string;
    event_type_id: string;
  };
};
