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
    },
  },
  mainData: {
    display: 'flex',
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
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Title order={6}>LOGO</Title>
      </Container>
      <Container
        style={{
          display: 'flex',
          columnGap: 15,
          alignItems: 'center',
        }}
      >
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

      <Container>
        <Button onClick={() => updateLocale('en')}>EN</Button> |{' '}
        <Button onClick={() => updateLocale('es')}>ES</Button>
      </Container>
    </Header>
  );
};

export default NavigationBar;
