import {
  Container,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Group,
  Divider,
} from '@mantine/core';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';

// Define the types for the props this component will receive
interface JobFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string | null;
  setLocation: (value: string | null) => void;
  jobType: string | null;
  setJobType: (value: string | null) => void;
  salaryRange: [number, number];
  setSalaryRange: (value: [number, number]) => void;
}

export function JobFilter({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  jobType,
  setJobType,
  salaryRange,
  setSalaryRange,
}: JobFilterProps) {
  const formatSalary = (value: number) => {
    return `₹${Math.round(value / 1000)}k`;
  };

  return (
    <Container size="lg" py="xl">
      <Group grow align="center">
        <TextInput
          variant="unstyled"
          placeholder="Search By Job Title, Role"
          leftSection={<IconSearch size={18} stroke={1.5} />}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
        />
        <Divider orientation="vertical" />
        <Select
          variant="unstyled"
          placeholder="Preferred Location"
          leftSection={<IconMapPin size={18} stroke={1.5} />}
          data={['Chennai', 'Mumbai', 'Bangalore', 'Remote']}
          value={location}
          onChange={setLocation}
          clearable
        />
        <Divider orientation="vertical" />
        <Select
          variant="unstyled"
          placeholder="Job type"
          leftSection={<IconBriefcase size={18} stroke={1.5} />}
          data={['Full-time', 'Part-time', 'Contract', 'Internship']}
          value={jobType}
          onChange={setJobType}
          clearable
        />
        <Divider orientation="vertical" />
        <div>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              Salary Per Month
            </Text>
            <Text size="sm" fw={500}>
              {formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}
            </Text>
          </Group>
          <RangeSlider
            mt="sm"
            min={0}
            max={200000}
            step={1000}
            value={salaryRange}
            onChange={setSalaryRange}
            styles={{
              bar: { backgroundColor: '#111827' }, // Black bar
              thumb: { borderWidth: '2px', borderColor: '#111827' },
            }}
          />
        </div>
      </Group>
    </Container>
  );
}