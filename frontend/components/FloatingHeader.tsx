"use client";

import { Container, Button, Flex, Image, Paper, Text } from '@mantine/core';
import classes from './FloatingHeader.module.css';

const links = ['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'];

interface FloatingHeaderProps {
  onCreateJobClick: () => void;
}

export function FloatingHeader({ onCreateJobClick }: FloatingHeaderProps) {
  return (
    <Paper
      component="header"
      radius="xl"
      shadow="lg"
      p="md"
      withBorder
      style={{
        position: 'sticky',
        top: 20,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: '0 auto',
      }}
    >
      <Container size="xl">
<Flex align="center" justify="space-between" wrap="nowrap" style={{ minWidth: 0 }}>
  <Flex align="center" gap="lg" wrap="nowrap" style={{ flexGrow: 1, minWidth: 0 }}>
    <Image src="/cyberminds.png" height={40} fit="contain" alt="Logo" />
    <Flex gap="md" wrap="nowrap" style={{ flexShrink: 1 }}>
      {links.map((link) => (
        <Text
          key={link}
          className={classes.link}
          component="a"
          href="#"
          fw={500}
          c="dimmed"
        >
          {link}
        </Text>
      ))}
    </Flex>
  </Flex>

  <Button
    radius="lg"
    size="sm"
    style={{
      background: 'linear-gradient(to right, #8B5CF6, #A78BFA)',
      color: '#fff',
    }}
    onClick={onCreateJobClick}
  >
    Create Jobs
  </Button>
</Flex>



      </Container>
    </Paper>
  );
}
