import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TechStackData } from '../../utils/page-data';
import TechCard from '../common/TechCard/TechCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';

type Props = {
  logos: TechStackData[];
};

function TechStackCarousel({ logos }: Props) {
  const cards = logos.map((card) => {
    return (
      <SwiperSlide key={card.name} style={{ width: 50 }}>
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
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={5}
      //   autoplay
    >
      {cards}
    </Swiper>
  );
}

export default TechStackCarousel;
