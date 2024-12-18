import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';

import Image from 'next/image';
import useIsMobile from './useIsMobile';
const journeyData = [
  {
    year: 2017,
    image: '/assets/images/home/journey/2017.jpg',
    description: 'Goa Tour',
  },
  {
    year: 2018,
    image: '/assets/images/home/journey/2018.jpg',
    description: 'Bangkok Tour',
  },
  {
    year: 2019,
    image: '/assets/images/home/journey/2019.jpg',
    description: 'Ranikhet Tour',
  },
  {
    year: 2020,
    image: '/assets/images/home/journey/2020.jpg',
    description: 'Sundara Launching',
  },
  {
    year: 2021,
    image: '/assets/images/home/journey/2021.jpg',
    description: 'Goa Event',
  },
  {
    year: 2022,
    image: '/assets/images/home/journey/2022.jpg',
    description: 'Savvy Grand Meeting',
  },
  {
    year: 2023,
    image: '/assets/images/home/journey/2023.jpg',
    description: 'RAV Sales Meeting',
  },
  {
    year: 2024,
    image: '/assets/images/home/journey/2024.jpg',
    description: 'RAV Group Meeting',
  },
];
export default function JourneySlider() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="fs-4 ' +
        className +
        ' ">' +
        journeyData[index].year +
        '</span>'
      );
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        pagination={!isMobile ? pagination : false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper journey-swiper"
      >
        {journeyData.map((img) => (
          <SwiperSlide key={img.year}>
            <Image
              src={img.image}
              width={470}
              height={300}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />

        <div className="active-slide-cont">
          <div className="active-slide-description">
            <p>{journeyData[activeIndex]?.description}</p>
            <p>{journeyData[activeIndex]?.year}</p>
          </div>
        </div>
      </Swiper>
    </>
  );
}
