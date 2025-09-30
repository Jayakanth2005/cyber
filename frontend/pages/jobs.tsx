"use client"; // <-- ADD THIS LINE

import { useState, useMemo } from 'react';
import { Container, SimpleGrid, Box, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FloatingHeader } from '../components/FloatingHeader';
import { JobCard } from '../components/JobCard';
import { mockJobs, Job } from '../src/app/data/mockjobs'; // Corrected path
import { JobFilter } from '../components/JobFilter';
import { CreateJobModal } from '../components/CreateJobModal';

export default function HomePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);

  const handleCreateJob = (newJobData: Omit<Job, 'id' | 'postedAgo'>) => {
    const newJob: Job = {
      ...newJobData,
      id: `new-${jobs.length + 1}`,
      postedAgo: 'Just now',
    };
    setJobs((currentJobs) => [...currentJobs, newJob]);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (location && job.location !== location) return false;
      if (jobType && job.type !== jobType) return false;
      return true;
    });
  }, [searchTerm, location, jobType, jobs]);

  return (
    <Box bg="#F8FAFC" mih="100vh">
      <FloatingHeader onCreateJobClick={open} />
      <JobFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />
      <Container size="xl" py="xl">
        {filteredJobs.length > 0 ? (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl" verticalSpacing="xl">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>
        ) : (
          <Text ta="center" c="dimmed" mt="xl">
            No jobs found matching your criteria.
          </Text>
        )}
      </Container>
      <CreateJobModal opened={opened} onClose={close} onJobPublished={handleCreateJob} />
    </Box>
  );
}
