import { createStyles } from '@mantine/core';
import { useState } from 'react';
import RepoCard from '../common/RepoCard/RepoCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    columnGap: 50,
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },
  carousel: {
    width: '100%',
    ['.swiper-button-next, .swiper-button-prev']: {
      color: theme.colors.mutedText[0],
      width: 10,
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

const ReposCarousel = ({ data, locale }: { data: any[]; locale: string }) => {
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

  const repoCards = data.map((cardData) => {
    return (
      <SwiperSlide key={`repo-card-${currentIndex}`}>
        <a href={cardData.link} target="_blank" rel="noopener noreferrer">
          <RepoCard
            imageUrl={cardData.imageUrl}
            title={cardData.title[locale]}
            description={cardData.description[locale]}
          />
        </a>
      </SwiperSlide>
    );
  });

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
    // <div className={classes.root}>
    <Swiper
      modules={[Navigation]}
      className={classes.carousel}
      slidesPerView={1}
      // centeredSlides
      navigation
      loop
    >
      {repoCards}
    </Swiper>
    // {/* <ActionIcon
    //   variant="outline"
    //   radius="xl"
    //   size="lg"
    //   onClick={handleMoveNext}
    //   className={classes.desktopButton}
    // >
    //   <ArrowLeft size={24} />
    // </ActionIcon>
    // {linkedRepoCard(data[currentIndex])}
    // <ActionIcon
    //   variant="outline"
    //   radius="xl"
    //   size="lg"
    //   onClick={handleMovePrevious}
    //   className={classes.desktopButton}
    // >
    //   <ArrowRight size={24} />
    // </ActionIcon>
    // <div className={classes.mobileButtons}>
    //   <ActionIcon
    //     variant="outline"
    //     radius="xl"
    //     size="lg"
    //     onClick={handleMoveNext}
    //   >
    //     <ArrowLeft size={24} />
    //   </ActionIcon>
    //   <ActionIcon
    //     variant="outline"
    //     radius="xl"
    //     size="lg"
    //     onClick={handleMovePrevious}
    //   >
    //     <ArrowRight size={24} />
    //   </ActionIcon>
    // </div> */}
    // </div>
  );
};

export default ReposCarousel;
