import { ActionIcon, createStyles } from '@mantine/core';
import { useState } from 'react';
import RepoCard from '../RepoCard/RepoCard';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    columnGap: 50,
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },
  desktopButton: {
    display: 'block',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },
  mobileButtons: {
    display: 'none',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'flex',
      marginTop: 10,
      columnGap: 10,
    },
  },
}));

const Carousel = ({ data, locale }: { data: any[]; locale: string }) => {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const linkedRepoCard = (cardData: any) => {
    return (
      <a
        key={`repo-card-${currentIndex}`}
        href={cardData.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RepoCard
          imageUrl={cardData.imageUrl}
          title={cardData.title[locale]}
          description={cardData.description[locale]}
        />
      </a>
    );
  };

  const handleMoveNext = () => {
    currentIndex === data.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const handleMovePrevious = () => {
    currentIndex === 0
      ? setCurrentIndex(data.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className={classes.root}>
      <ActionIcon
        variant="outline"
        radius="xl"
        size="lg"
        onClick={handleMoveNext}
        className={classes.desktopButton}
      >
        <ArrowLeft size={24} />
      </ActionIcon>
      {linkedRepoCard(data[currentIndex])}
      <ActionIcon
        variant="outline"
        radius="xl"
        size="lg"
        onClick={handleMovePrevious}
        className={classes.desktopButton}
      >
        <ArrowRight size={24} />
      </ActionIcon>
      <div className={classes.mobileButtons}>
        <ActionIcon
          variant="outline"
          radius="xl"
          size="lg"
          onClick={handleMoveNext}
        >
          <ArrowLeft size={24} />
        </ActionIcon>
        <ActionIcon
          variant="outline"
          radius="xl"
          size="lg"
          onClick={handleMovePrevious}
        >
          <ArrowRight size={24} />
        </ActionIcon>
      </div>
    </div>
  );
};

export default Carousel;
