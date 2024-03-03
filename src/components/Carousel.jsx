import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from 'react'
import b1 from '../assets/img/banners/b1.png';
import b2 from '../assets/img/banners/b2.png';
import b3 from '../assets/img/banners/b3.png';
import b4 from '../assets/img/banners/b4.png';
import b5 from '../assets/img/banners/b5.png';

const Carousel = () => {
    const imgs=[b1,b2,b3,b4,b5];
  return (
    <Swiper spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
    {imgs.map((item)=>{
        return <SwiperSlide  key={item}>
            <img src={item} className='bannerImg' />
        </SwiperSlide>
    })}
    
   
  </Swiper>
  )
}

export default Carousel
