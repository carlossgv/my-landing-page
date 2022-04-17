import { createStyles } from '@mantine/core';
import type { NextPage } from 'next';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colors.backgroundPrimary[4],
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  // Sidebar
  // Navbar
  // Intro
  // GeneralInfo
  // Repos
  // Stack
  // Offering
  // ContactForm
  // Footer

  return (
    <div className={classes.root}>
      <NavigationBar></NavigationBar>
    </div>
  );
};

export default Home;
