// frontend/src/app/types.ts
import { Key } from 'react';

export interface Job {
  id?: Key | null;
  title: string;
  companyName: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  logo: string;
  postedAgo?: string;
  description?: string; // <-- add this
  responsibilities?: string; // <-- add this
  applicationDeadline?: string;
}
