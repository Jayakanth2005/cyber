import { useState, useMemo } from 'react';
import { Container, SimpleGrid, Box, Text } from '@mantine/core';
import { FloatingHeader } from '../components/FloatingHeader';
import { JobCard } from '../components/JobCard';
import { mockJobs } from '../src/app/data/mockjobs'; // Make sure this path is correct
import { JobFilter } from '../components/JobFilter';

export default function HomePage() {
  // Filters state (This section is unchanged)
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);


  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      if (location && job.location !== location) {
        return false;
      }
      if (jobType && job.type !== jobType) {
        return false;
      }
      const salaryNumber = parseInt(job.salary.replace(/[^\d]/g, ''), 10); // convert '12LPA' → 12
    if (salaryNumber < salaryRange[0] || salaryNumber > salaryRange[1]) {
      return false;
    }
      return true;
    });
  }, [searchTerm, location, jobType, salaryRange]); 

  return (
    <Box bg="#F8FAFC" mih="100vh">
      <FloatingHeader />

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
        {/* NEW: Conditional rendering based on filtered results */}
        {filteredJobs.length > 0 ? (
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing="xl"
            verticalSpacing="xl"
          >
            {/* Renders the filtered list of jobs */}
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>
        ) : (
          // This message is shown if no jobs match the filters
          <Text ta="center" c="dimmed" mt="xl">
            No jobs found matching your criteria. Try adjusting your filters.
          </Text>
        )}
      </Container>
    </Box>
  );
}