import { useState } from 'react';
import { Modal, TextInput, Textarea, Button, Select, SimpleGrid, Group } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import type { Job } from '../src/app/types';

interface CreateJobModalProps {
  opened: boolean;
  onClose: () => void;
  onJobPublished: (newJob: Omit<Job, 'id' | 'postedAgo'>) => void;
}

export function CreateJobModal({ opened, onClose, onJobPublished }: CreateJobModalProps) {
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState<Date | null>(null);

  const handlePublish = () => {
    if (!title || !companyName || !location || !jobType) {
      alert('Please fill all required fields.');
      return;
    }

    onJobPublished({
      title,
      companyName,
      location,
      type: jobType,
      salary,
      logo: '/company-placeholder.png',
      experience: '0-1 yr Exp',
      description,
      responsibilities: description,
      applicationDeadline: applicationDeadline ? applicationDeadline.toISOString() : '',
    });

    // Reset form
    setTitle('');
    setCompanyName('');
    setLocation(null);
    setJobType(null);
    setSalary('');
    setDescription('');
    setApplicationDeadline(null);

    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Create Job Opening" size="lg" centered>
      <SimpleGrid cols={2} spacing="md">
        <TextInput 
          label="Job Title" 
          placeholder="Full Stack Developer" 
          value={title} 
          onChange={(e) => setTitle(e.currentTarget.value)} 
          required 
        />
        <TextInput 
          label="Company Name" 
          placeholder="Your Company" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.currentTarget.value)} 
          required 
        />
        <Select 
          label="Location" 
          placeholder="Choose Location" 
          data={['Chennai', 'Mumbai', 'Bengaluru', 'Remote']} 
          value={location} 
          onChange={setLocation} 
          required 
        />
        <Select 
          label="Job Type" 
          placeholder="FullTime" 
          data={['Full-time', 'Part-time', 'Contract', 'Internship']} 
          value={jobType} 
          onChange={setJobType} 
          required 
        />
        <TextInput 
          label="Salary" 
          placeholder="12LPA" 
          value={salary} 
          onChange={(e) => setSalary(e.currentTarget.value)} 
        />
       <DatePickerInput
  label="Application Deadline"
  placeholder="Select a date"
  value={applicationDeadline ? applicationDeadline.toISOString().substring(0,10) : null}
  onChange={(val: string | null) =>
    setApplicationDeadline(val ? new Date(val) : null)
  }
  minDate={new Date()}
/>

      </SimpleGrid>

      <Textarea 
        mt="md" 
        label="Job Description" 
        placeholder="Job details..." 
        minRows={4} 
        value={description} 
        onChange={(e) => setDescription(e.currentTarget.value)} 
      />

      <Group justify="space-between" mt="xl">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handlePublish}>Publish</Button>
      </Group>
    </Modal>
  );
}