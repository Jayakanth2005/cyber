import { Container, SimpleGrid, Box } from '@mantine/core';
import { AppHeader } from '../components/AppHeader';
import { FilterBar } from '../components/FilterBar';
import { JobCard } from '../components/JobCard';
import { mockJobs } from '../src/app/data/mockjobs';

export default function HomePage() {
  return (
    <Box bg="#F8FAFC">
      <AppHeader />
      <FilterBar />
      <Container size="xl" py="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {mockJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}