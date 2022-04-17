import {
  Container,
  createStyles,
  Text,
  Title,
  Header,
  Button,
} from '@mantine/core';
import Router, { useRouter } from 'next/router';
import pageData from '../../assets/page-data';
import { localeCheck } from '../../utils/locale-check';

const useStyles = createStyles((theme) => ({
  link: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  header: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      rowGap: 5,
    },
  },
  linksContainer: {
    display: 'flex',
    columnGap: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NavigationBar = ({
  locale,
  updateLocale,
}: {
  locale: string;
  updateLocale: (locale: string) => void;
}) => {
  const { classes } = useStyles();

  const ABOUT_ME = pageData.navigationBar.aboutMe[locale];
  const PROJECTS = pageData.navigationBar.projects[locale];
  const CONTACT = pageData.navigationBar.contact[locale];

  return (
    <Header height={'100%'} className={classes.header}>
      <Container>
        <Title order={6}>LOGO</Title>
      </Container>
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

      <Container className={classes.buttonContainer}>
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
      </Container>
    </Header>
  );
};

export default NavigationBar;
