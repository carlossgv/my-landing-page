import { Container, createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Intro from '../components/Intro/Intro';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { localeCheck } from '../utils/locale-check';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colors.backgroundPrimary[4],
    height: '100%',
    padding: '0 !important',
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  const router = useRouter();
  const validLocale = localeCheck(router.locale);

  // Sidebar
  // Navbar
  // Intro
  // GeneralInfo
  // Repos
  // Stack
  // Offering
  // ContactForm
  // Footer

  const handleUpdateLocale = (newLocale: string) => {
    const validLocale = localeCheck(newLocale);
    router.push(router.asPath, undefined, { locale: validLocale });
  };

  return (
    <div className={classes.root}>
      <NavigationBar
        locale={validLocale}
        updateLocale={handleUpdateLocale}
      ></NavigationBar>
      <Intro locale={validLocale}></Intro>
    </div>
  );
};

export default Home;
