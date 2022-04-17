import { Container, createStyles, Text, Title, Header } from '@mantine/core';

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
}));

const NavigationBar = () => {
  const { classes } = useStyles();

  const navbarContent = (
    <>
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
        <Text className={classes.link} variant="link" component="a" href="#">
          ABOUT ME
        </Text>
        <Text className={classes.link} variant="link" component="a" href="#">
          PROJECTS
        </Text>
        <Text className={classes.link} variant="link" component="a" href="#">
          CONTACT
        </Text>
      </Container>
    </>
  );

  return (
    <Header height={'100%'} className={classes.header}>
      {navbarContent}
    </Header>
  );
};

export default NavigationBar;
