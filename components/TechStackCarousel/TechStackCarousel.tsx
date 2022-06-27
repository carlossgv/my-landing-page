import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TechStackData } from '../../utils/page-data';
import TechCard from '../common/TechCard/TechCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { createStyles } from '@mantine/core';

type Props = {
  logos: TechStackData[];
};

const useStyles = createStyles((theme) => ({
  root: {
    ['.swiper-button-next, .swiper-button-prev']: {
      color: theme.colors.mutedText[0],
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        paddingBottom: 80,
      },
    },
    ['.swiper-button-next']: {
      right: 0,
    },
    ['.swiper-button-prev']: {
      left: 0,
    },
  },
}));

function TechStackCarousel({ logos }: Props) {
  const { classes } = useStyles();
  const cards = logos.map((card) => {
    return (
      <SwiperSlide key={card.name}>
        <TechCard
          key={card.name}
          imageUrl={card.logo}
          title={card.name}
        ></TechCard>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className={classes.root}
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      breakpoints={{
        800: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      navigation
    >
      {cards}
    </Swiper>
  );
}

export default TechStackCarousel;
