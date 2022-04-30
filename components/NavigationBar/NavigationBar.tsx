import {
  Container,
  createStyles,
  Text,
  Title,
  Header,
  Button,
} from '@mantine/core';
import { useRef } from 'react';
import pageData from '../../utils/page-data';
import InternalAnchor from '../InternalAnchor/InternalAnchor';

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
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:active': { textDecoration: 'none' },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NavigationBar = ({
  locale,
  updateLocale,
  data,
}: // navHeightHandler,
{
  locale: string;
  updateLocale: (locale: string) => void;
  data: any;
  // navHeightHandler: (height: number) => void;
}) => {
  const { classes } = useStyles();

  const ABOUT_ME = data.aboutMe[locale];
  const PROJECTS = data.projects[locale];
  const CONTACT = data.contact[locale];

  const navHeightRef = useRef(null);

  // const handleResize = () => {
  //   if (navHeightRef != null) {
  //     // @ts-ignore: Nulling is handled by the useEffect hook
  //     navHeightHandler(navHeightRef.current.offsetHeight);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize, false);
  // }, []);

  return (
    <Header height={'100%'} className={classes.root} ref={navHeightRef}>
      <Container className={classes.header} size="xl">
        <Title order={6}>{'<CG.DEV/>'}</Title>

        <Container className={classes.linksContainer}>
          <InternalAnchor hrefId={'personal-info'} className={classes.link}>
            <Text transform="uppercase">{ABOUT_ME}</Text>
          </InternalAnchor>
          <InternalAnchor hrefId={'repos'} className={classes.link}>
            <Text transform="uppercase">{PROJECTS}</Text>
          </InternalAnchor>
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
