import {
  Container,
  Group,
  Button,
  Box,
  Flex,
  Image,
  Text,
} from '@mantine/core';
import classes from './AppHeader.module.css';

const links = [
  'Home',
  'Find Jobs',
  'Find Talents',
  'About us',
  'Testimonials',
];

export function AppHeader() {
  const items = links.map((link) => (
    <a key={link} href="#" className={classes.link}>
      {link}
    </a>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Container size="xl">
          <Flex justify="space-between" align="center" h={80}>
            <Image src="https://i.imgur.com/G5g29xT.png" h={30} w="auto" alt="Logo" />
            <Group gap={30} visibleFrom="sm">
              {items}
            </Group>
            <Button
              radius="md"
              size="sm"
              style={{
                background: 'linear-gradient(to right, #6D28D9, #9333EA)',
              }}
            >
              Create Jobs
            </Button>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}

// Create a new CSS module file: components/AppHeader.module.css
/*
.header {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.link {
  display: block;
  line-height: 1;
  padding: 8px 12px;
  border-radius: var(--mantine-radius-sm);
  text-decoration: none;
  color: #333;
  font-size: var(--mantine-font-size-sm);
  font-weight: 500;

  &:hover {
    background-color: #f1f3f5;
  }
}
*/