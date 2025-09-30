import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Stack,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';
import type { Job } from '../src/app/data/mockjobs';


interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card withBorder radius="md" p="lg">
      <Stack>
        <Group justify="space-between">
          <Image src={job.logo} alt={job.title} h={40} w="auto" fit="contain" />
          <Badge
            variant="light"
            color="gray"
            style={{ backgroundColor: '#E0E7FF', color: '#4F46E5', fontWeight: 500 }}
          >
            {job.postedAgo}
          </Badge>
        </Group>

        <Text fw={600} fz="lg" mt="sm">
          {job.title}
        </Text>

        <Group gap="sm">
          <Text fz="sm" c="dimmed">
            {job.experience}
          </Text>
          <Text fz="sm" c="dimmed"> • </Text>
          <Text fz="sm" c="dimmed">
            {job.type}
          </Text>
          <Text fz="sm" c="dimmed"> • </Text>
          <Text fz="sm" c="dimmed">
            {job.salary}
          </Text>
        </Group>

        <List
          spacing="xs"
          size="sm"
          center
          c="dimmed"
          icon={
            <ThemeIcon color="gray" size={16} radius="xl">
              <IconPointFilled style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          }
        >
          <List.Item>A user-friendly interface lets you browse stunning photos and videos</List.Item>
          <List.Item>Filter destinations based on interests and travel style, and create personalized</List.Item>
        </List>

        <Button color="blue" fullWidth mt="md" radius="md">
          Apply Now
        </Button>
      </Stack>
    </Card>
  );
}