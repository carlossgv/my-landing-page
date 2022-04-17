import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Poppins, sans-serif',
          fontSizes: {
            md: 16,
          },
          headings: {
            fontWeight: 'bold',
            sizes: {
              h1: {
                fontSize: 80,
              },
              h2: {
                fontSize: 70,
              },
              h3: {
                fontSize: 64,
              },
              h4: {
                fontSize: 50,
              },
              h5: {
                fontSize: 40,
              },
              h6: {
                fontSize: 28,
              },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
