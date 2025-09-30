import { Key } from "react";

export interface Job {
  location: string;
  id: Key | null | undefined;
  logo: string;
  title: string;
  companyName: string;
  experience: string;
  type: string;
  salary: string;
  postedAgo: string;
}

export const mockJobs: Job[] = [
  {
    location: 'Bangalore',
    id: '1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Mumbai',
    id: '2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    title: 'Node Js Developer',
    companyName: 'Tesla',
    experience: '1-3 yr Exp',
    type: 'Part-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Chennai',
    id: '3',
    logo: '/zoho.png',
    title: 'UX/UI Designer',
    companyName: 'Zoho',
    experience: '1-3 yr Exp',
    type: 'Internship',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Remote',  
    id: '4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3 yr Exp',
    type: 'Contract',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Bangalore',
    id: '5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    title: 'Node Js Developer',
    companyName: 'Tesla',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Mumbai',
    id: '6',
    logo: '/zoho.png',
    title: 'UX/UI Designer',
    companyName: 'Zoho',
    experience: '1-3 yr Exp',
    type: 'Part-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Chennai',
    id: '7',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3 yr Exp',
    type: 'Internship',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Chennai',
    id: '8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    title: 'Node Js Developer',
    companyName: 'Tesla',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
];