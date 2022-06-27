import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Carlos Gonzalez DEV</title>
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
          colors: {
            accent: ['#FFAF29'],
            backgroundPrimary: ['#111319'],
            backgroundSecondary: ['#191C26'],
            sidebarBackground: ['#080A12'],
            mutedText: ['#A9AFC3'],
            text: ['#C1C2C5'],
          },
          headings: {
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            sizes: {
              h1: {
                fontSize: 80,
                lineHeight: 1.31,
              },
              h2: {
                fontSize: 70,
                lineHeight: 1.14,
              },
              h3: {
                fontSize: 64,
                lineHeight: 1.03,
              },
              h4: {
                fontSize: 50,
                lineHeight: 1.46,
              },
              h5: {
                fontSize: 40,
                lineHeight: 1.5,
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
