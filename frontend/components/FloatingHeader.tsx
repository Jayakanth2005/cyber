import { Container, Group, Button, Flex, Image, Paper } from '@mantine/core';
import classes from './FloatingHeader.module.css';

const links = ['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'];

interface FloatingHeaderProps {
  onCreateJobClick: () => void;
}

export function FloatingHeader({ onCreateJobClick }: FloatingHeaderProps) {
  const items = links.map((link) => (
    <a key={link} href="#" className={classes.link}>
      {link}
    </a>
  ));

  return (
    <Container size="xl" style={{ marginTop: 20 }}>
      <Paper component="header" radius="xl" shadow="md" p="md" withBorder>
        <Flex justify="space-between" align="center" style={{ height: 50 }}>
          <Group align="center" gap="xl">
            <Image src="/cyberminds.png" height={40} fit="contain" alt="Logo" />
            <Group gap="lg" className={classes.navGroup} wrap="nowrap">
              {items}
            </Group>
          </Group>

          <Button
            radius="lg"
            size="sm"
            style={{ background: 'linear-gradient(to right, #6D28D9, #9333EA)' }}
            onClick={onCreateJobClick}
          >
            Create Jobs
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
