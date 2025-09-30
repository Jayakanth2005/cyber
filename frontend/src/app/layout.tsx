// src/app/layout.tsx
import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{
            primaryColor: 'blue',
            fontFamily: 'Inter, sans-serif',
            defaultRadius: 'md',
            colors: {
              blue: [
                '#E3F2FF', '#B3DAFF', '#80C1FF', '#4DA8FF', '#1A8EFF',
                '#0077E6', '#005BB5', '#004083', '#002952', '#001421',
              ],
            },
            white: '#ffffff',
          }}
        >
          {children} {/* <-- Everything in your app goes here */}
        </MantineProvider>
      </body>
    </html>
  );
}
