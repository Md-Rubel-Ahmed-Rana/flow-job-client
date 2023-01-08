import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/css/navigation';
import React from 'react';

const Banner = () => {
    return (
    <Swiper className='w-full h-full'
     modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='w-full h-full'>
        <img className='w-full h-full'  src="https://images.unsplash.com/photo-1671725779260-8d17bc0e3f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full' src="https://plus.unsplash.com/premium_photo-1671117132089-3be283ee4aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1672957581665-bdc4a16b8347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;