import { ActionIcon, createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import InternalAnchor from '../components/InternalAnchor/InternalAnchor';
import Intro from '../components/Intro/Intro';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { localeCheck } from '../utils/locale-check';
import { ArrowUp } from 'tabler-icons-react';
import ReposAndStack from '../components/Repos/Repos';
import pageData from '../utils/page-data';
import { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const navigationData = pageData.navigationBar;

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
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore: error handled
    setNavHeight(ref.current.clientHeight);
  }, []);

  const handleUpdateLocale = (newLocale: string) => {
    const validLocale = localeCheck(newLocale);
    router.push(router.asPath, undefined, { locale: validLocale });
  };

  return (
    <div className={classes.root} id="home">
      <div ref={ref}>
        <NavigationBar
          locale={validLocale}
          updateLocale={handleUpdateLocale}
          data={navigationData}
        ></NavigationBar>
      </div>
      <Intro navHeight={navHeight} locale={validLocale} />
      <PersonalInfo />
      <ReposAndStack locale={validLocale} />
      <ContactForm locale={validLocale} />
      <InternalAnchor hrefId={'home'} className={classes.goUpButton}>
        <ActionIcon variant="outline" radius="xl" size="lg">
          <ArrowUp size={24} />
        </ActionIcon>
      </InternalAnchor>
    </div>
  );
};

export default Home;
