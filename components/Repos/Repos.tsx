import { Container, createStyles, Title } from '@mantine/core';
import Carousel from '../common/Carousel/Carousel';
import PageData from '../../utils/page-data';

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
    columnGap: 30,
  },
}));

const Repos = ({ locale }: { locale: string }) => {
  const { classes } = useStyles();

  return (
    <a id="repos">
      <div className={classes.mainBackground}>
        <Container size={'xl'} className={classes.root}>
          <Title order={1}>Github Repos</Title>
          <p>GITHUB REPOS</p>
          <Carousel locale={locale} data={reposData}></Carousel>
        </Container>
      </div>
    </a>
  );
};

export default Repos;
