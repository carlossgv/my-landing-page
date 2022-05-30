import { Container, createStyles, Title } from '@mantine/core';
import ReposCarousel from '../ReposCarousel/ReposCarousel';
import PageData from '../../utils/page-data';
import Link from 'next/link';
import TechStack from '../TechStack/TechStack';

const reposData = PageData.repos;

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.colors.backgroundPrimary[4],
    display: 'flex',
    flexDirection: 'column',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 'auto',
    },
  },
  reposDiv: {
    background: theme.colors.backgroundPrimary[4],
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 80,
  },
}));

const ReposAndStack = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();

  return (
    <div id="repos" className={classes.root}>
      <Container size={'xl'} className={classes.reposDiv}>
        <div>
          <Title order={1}>Github Repos</Title>
          <p>GITHUB REPOS</p>
        </div>
        <ReposCarousel locale={locale} data={reposData}></ReposCarousel>
      </Container>
      <TechStack locale={locale}></TechStack>
    </div>
  );
};

export default ReposAndStack;
