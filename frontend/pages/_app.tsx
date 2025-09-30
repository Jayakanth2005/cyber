import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'blue',
        fontFamily: 'Inter, sans-serif',
        defaultRadius: 'md',
        white: '#ffffff',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
