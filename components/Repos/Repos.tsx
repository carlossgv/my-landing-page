import { Container, createStyles, Title } from '@mantine/core';
import Carousel from '../common/Carousel/Carousel';
import PageData from '../../utils/page-data';
import Link from 'next/link';

const reposData = PageData.repos;

const useStyles = createStyles((theme) => ({
  mainBackground: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.colors.backgroundPrimary[4],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 'auto',
      paddingTop: 80,
      paddingBottom: 80,
    },
  },
  root: {
    background: theme.colors.backgroundPrimary[4],
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));

const Repos = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();

  return (
    <div id="repos" className={classes.mainBackground}>
      <Container size={'xl'} className={classes.root}>
        <div>
          <Title order={1}>Github Repos</Title>
          <p>GITHUB REPOS</p>
        </div>
        <Carousel locale={locale} data={reposData}></Carousel>
      </Container>
    </div>
  );
};

export default Repos;
