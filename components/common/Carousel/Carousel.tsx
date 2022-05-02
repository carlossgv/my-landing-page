import { createStyles } from '@mantine/core';
import RepoCard from '../RepoCard/RepoCard';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    columnGap: 50,
  },
}));

const Carousel = ({ data, locale }: { data: any[]; locale: string }) => {
  const { classes } = useStyles();

  const reposCards = data.map((repo, index: number) => {
    return (
      <a
        key={`repo-card-${index}`}
        href={repo.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RepoCard
          imageUrl={repo.imageUrl}
          title={repo.title[locale]}
          description={repo.description[locale]}
        />
      </a>
    );
  });

  return <div className={classes.root}>{reposCards}</div>;
};

export default Carousel;
