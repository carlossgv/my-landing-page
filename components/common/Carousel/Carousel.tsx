import { createStyles } from '@mantine/core';
import { useState } from 'react';
import RepoCard from '../RepoCard/RepoCard';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    columnGap: 50,
  },
}));

const Carousel = ({ data, locale }: { data: any[]; locale: string }) => {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(1);

  const reposCards = data.map((repo, index: number) => {
    return (
      <a
        key={`repo-card-${index}`}
        href={currentIndex === index ? repo.link : null}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RepoCard
          imageUrl={repo.imageUrl}
          title={repo.title[locale]}
          description={repo.description[locale]}
          currentCard={currentIndex === index}
        />
      </a>
    );
  });

  return <div className={classes.root}>{reposCards}</div>;
};

export default Carousel;
