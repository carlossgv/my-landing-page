import { ActionIcon, Button, Container, createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InternalAnchor from '../components/InternalAnchor/InternalAnchor';
import Intro from '../components/Intro/Intro';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { localeCheck } from '../utils/locale-check';
import { ArrowUp } from 'tabler-icons-react';
import smoothScrollTo from '../utils/scroll-section';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100%',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 0,
    WebkitTapHighlightColor: 'transparent',
  },
  goUpButton: {
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  const router = useRouter();
  const validLocale = localeCheck(router.locale);
  const [navHeight, setNavHeight] = useState(0);

  const updateNavHeight = (height: number) => {
    setNavHeight(height);
  };

  useEffect(() => {
    smoothScrollTo('home');
  });

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
    <div className={classes.root} id="home">
      <NavigationBar
        locale={validLocale}
        updateLocale={handleUpdateLocale}
        navHeightHandler={(height) => updateNavHeight(height)}
      ></NavigationBar>
      <Intro navHeight={navHeight} locale={validLocale}></Intro>
      <PersonalInfo></PersonalInfo>
      <InternalAnchor hrefId={'home'} className={classes.goUpButton}>
        <ActionIcon variant="outline" radius="xl" size="lg">
          <ArrowUp size={24} />
        </ActionIcon>
      </InternalAnchor>
    </div>
  );
};

export default Home;
