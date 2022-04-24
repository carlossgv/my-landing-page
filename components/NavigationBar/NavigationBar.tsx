import {
  Container,
  createStyles,
  Text,
  Title,
  Header,
  Button,
} from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import pageData from '../../utils/page-data';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colors.backgroundPrimary[4],
    border: 'none',
  },
  header: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 5,
    },
  },
  borderContainer: {
    marginLeft: 0,
    marginRight: 0,
  },
  linksContainer: {
    display: 'flex',
    columnGap: 15,
    alignItems: 'center',
  },
  link: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NavigationBar = ({
  locale,
  updateLocale,
  navHeightHandler,
}: {
  locale: string;
  updateLocale: (locale: string) => void;
  navHeightHandler: (height: number) => void;
}) => {
  const { classes } = useStyles();

  const ABOUT_ME = pageData.navigationBar.aboutMe[locale];
  const PROJECTS = pageData.navigationBar.projects[locale];
  const CONTACT = pageData.navigationBar.contact[locale];

  const navHeightRef = useRef(null);

  const handleResize = () => {
    // @ts-ignore: Nulling is handled by the useEffect hook
    navHeightHandler(navHeightRef.current.offsetHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  return (
    <Header height={'100%'} className={classes.root} ref={navHeightRef}>
      <Container className={classes.header} size="xl">
        <Title order={6}>{'<CG.DEV/>'}</Title>

        <Container className={classes.linksContainer}>
          <Text
            transform="uppercase"
            className={classes.link}
            variant="link"
            component="a"
            href="#"
          >
            {ABOUT_ME}
          </Text>
          <Text
            transform="uppercase"
            className={classes.link}
            variant="link"
            component="a"
            href="#"
          >
            {PROJECTS}
          </Text>
          <Text
            transform="uppercase"
            className={classes.link}
            variant="link"
            component="a"
            href="#"
          >
            {CONTACT}
          </Text>
        </Container>
        <div className={classes.buttonContainer}>
          <Button
            uppercase
            compact
            variant="subtle"
            onClick={() => updateLocale('en')}
            color="gray"
          >
            EN
          </Button>
          {''} | {''}
          <Button
            uppercase
            compact
            variant="subtle"
            onClick={() => updateLocale('es')}
            color="gray"
          >
            ES
          </Button>
        </div>
      </Container>
    </Header>
  );
};

export default NavigationBar;
