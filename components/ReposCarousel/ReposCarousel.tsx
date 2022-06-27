import { createStyles } from '@mantine/core';
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

  const repoCards = data.map((cardData) => {
    return (
      <SwiperSlide key={`repo-card-${cardData.title}`}>
        <a
          href={cardData.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <RepoCard
            imageUrl={cardData.imageUrl}
            title={cardData.title[locale]}
            description={cardData.description[locale]}
          />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Navigation]}
      className={classes.carousel}
      slidesPerView={1}
      navigation
      loop
    >
      {repoCards}
    </Swiper>
  );
};

export default ReposCarousel;
