
export interface Case {
  id: string;
  title: string;
  description?: string;
  location?: string;
  incident_date?: string;
  status: 'pending' | 'in_progress' | 'resolved' | 'closed';
  evidence_links?: string[];
  reporter_id: string;
  assigned_to?: string;
  category?: string;
  created_at: string;
  updated_at: string;
}
