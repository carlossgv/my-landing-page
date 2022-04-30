import { Card, createStyles, Text } from '@mantine/core';
import RepoCard from '../RepoCard/RepoCard';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Carousel = ({ data, locale }: { data: any[]; locale: string }) => {
  const { classes } = useStyles();

  const reposCards = data.map((repo, index: number) => {
    return (
      <RepoCard
        key={`repo-card-${index}`}
        imageUrl={repo.imageUrl[locale]}
        title={repo.title[locale]}
        description={repo.description[locale]}
      />
    );
  });

  return <div className={classes.root}>{locale && reposCards}</div>;
};

export default Carousel;
