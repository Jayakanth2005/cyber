import { Container, Group, Button, Flex, Image, Paper } from '@mantine/core';
import classes from './FloatingHeader.module.css';

const links = ['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'];

export function FloatingHeader() {
  const items = links.map((link) => (
    <a key={link} href="#" className={classes.link}>
      {link}
    </a>
  ));

  return (
    <Container size="xl" style={{ marginTop: 20 }}>
      <Paper component="header" radius="xl" shadow="md" p="md" withBorder>
        <Flex justify="space-between" align="center" style={{ height: 50 }}>
          {/* Left: Logo + Navigation in one row */}
   
          <Flex align="center" gap="md" wrap="nowrap" style={{ flex: 0 }}>
            <Image
              src="/cyberminds.png"
              height={40}
              fit="contain"
              alt="Logo"
              style={{ flexShrink: 0 }}
            />
            <Group gap="lg" className={classes.navGroup} wrap="nowrap">
              {items}
            </Group>
          </Flex>

          {/* Right: Button */}
          <Button
            radius="lg"
            size="sm"
            style={{
              background: 'linear-gradient(to right, #6D28D9, #9333EA)',
            }}
          >
            Create Jobs
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
