import { Container, createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Intro from '../components/Intro/Intro';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { localeCheck } from '../utils/locale-check';

const useStyles = createStyles((theme) => ({
  root: {
    // background: theme.colors.backgroundPrimary[4],
    height: '100%',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 0,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  const router = useRouter();
  const validLocale = localeCheck(router.locale);
  const [navHeight, setNavHeight] = useState(0);

  const updateNavHeight = (height: number) => {
    console.log(height);
    setNavHeight(height);
  };

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
        navHeightHandler={(height) => updateNavHeight(height)}
      ></NavigationBar>
      <Intro navHeight={navHeight} locale={validLocale}></Intro>
      <PersonalInfo></PersonalInfo>
    </div>
  );
};

export default Home;
