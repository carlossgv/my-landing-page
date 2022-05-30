import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TechStackData } from '../../utils/page-data';
import TechCard from '../common/TechCard/TechCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { createStyles } from '@mantine/core';

type Props = {
  logos: TechStackData[];
};

const useStyles = createStyles((theme) => ({
  root: {
    ['.swiper-button-next, .swiper-button-prev']: {
      color: theme.colors.mutedText[3],
      //   color: 'transparent',
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
      slidesPerView={2}
      spaceBetween={10}
      centeredSlides
      breakpoints={{
        800: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      autoplay
      loop
      navigation
    >
      {cards}
    </Swiper>
  );
}

export default TechStackCarousel;
