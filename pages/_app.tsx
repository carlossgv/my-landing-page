import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import myTheme from '../assets/theme';

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
          colors: {
            accent: [
              '#F0E5D2',
              '#EACD9E',
              '#EEBB66',
              '#FFAF29', // Default value
              '#E29719',
              '#AF7C26',
              '#89672C',
              '#6D552E',
              '#57472C',
              '#463C29',
            ],
            backgroundPrimary: [
              '#1D1E23',
              '#181A1F',
              '#14161C',
              '#111319', // Default value
              '#0F1015',
              '#0D0E11',
              '#0C0C0E',
              '#0A0B0C',
              '#09090A',
              '#080808',
            ],
            backgroundSecondary: [
              '#B0B2BC',
              '#696F82',
              '#424656',
              '#292C39',
              '#191C26', // Default value
              '#0C0D11',
              '#060607',
              '#030303',
              '#010101',
              '#010101',
            ],
            sidebarBackground: [
              '#D6D8DE',
              '#797F97',
              '#484D63',
              '#2B2F40',
              '#191C29',
              '#0E111B',
              '#080A12', // Default value
              '#040407',
              '#020203',
              '#010101',
            ],
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
