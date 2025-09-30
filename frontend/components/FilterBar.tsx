import {
  Container,
  Paper,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Flex,
  Group,
} from '@mantine/core';
import { IconSearch, IconBriefcase, IconMapPin } from '@tabler/icons-react';


export function FilterBar() {
  return (
    <Paper shadow="sm" p={0} style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #e5e7eb' }}>
      <Container size="xl" py="lg">
        <Group grow align="flex-end">
          <TextInput
            placeholder="Search By Job Title, Role"
            leftSection={<IconSearch size={16} />}
            styles={{ input: { height: '48px' } }}
          />
          <Select
            placeholder="Preferred Location"
            leftSection={<IconMapPin size={16} />}
            data={['New York', 'London', 'Tokyo']}
            styles={{ input: { height: '48px' } }}
          />
          <Select
            placeholder="Job type"
            leftSection={<IconBriefcase size={16} />}
            data={['Full-time', 'Part-time', 'Contract']}
            styles={{ input: { height: '48px' } }}
          />
          <Flex direction="column" w="100%">
            <Text size="sm" fw={500} mb={8}>Salary Per Month</Text>
            <RangeSlider
              defaultValue={[50000, 80000]}
              min={0}
              max={200000}
              step={1000}
              label={(value) => `$${Math.round(value / 1000)}k`}
              styles={{
                label: { backgroundColor: '#2563EB' },
                bar: { backgroundColor: '#2563EB' },
                thumb: { borderWidth: '2px', borderColor: '#2563EB' },
              }}
            />
          </Flex>
        </Group>
      </Container>
    </Paper>
  );
}