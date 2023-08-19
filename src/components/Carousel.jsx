import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

function Carousel() {
  return (
    <div className="container">
    <div>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2023/07/McCrispy-Banner-Desktop.png.png"/></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2023/06/MasterCard-Slide-Desktop.png"/></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2023/01/delivery-points-desktop-slider.png"/></SwiperSlide>
        <SwiperSlide><img src="https://mcdonalds.com.pk/wp-content/uploads/2022/08/MyM-Rewards.jpg"/></SwiperSlide>
     
      </Swiper>
    </div>
    </div>
  )
}

export default Carousel
