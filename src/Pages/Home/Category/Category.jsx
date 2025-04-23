import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import s1 from '../../../assets/home/slide1.jpg'
import s2 from '../../../assets/home/slide2.jpg'
import s3 from '../../../assets/home/slide3.jpg'
import s4 from '../../../assets/home/slide4.jpg'
import s5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper my-10"
        >
            <SwiperSlide><img src={s1} alt="" /> <h2 className='text-4xl text-gray-200  text-center -mt-12 uppercase'>salads</h2></SwiperSlide>
            <SwiperSlide><img src={s2} alt="" /><h2 className='text-4xl text-gray-200 shadow-sm drop-shadow-lg text-center -mt-12 uppercase'>pizzas</h2></SwiperSlide>
            <SwiperSlide><img src={s3} alt="" /><h2 className='text-4xl text-gray-200 shadow-sm drop-shadow-lg text-center -mt-12 uppercase'>soups</h2></SwiperSlide>
            <SwiperSlide><img src={s4} alt="" /><h2 className='text-4xl text-gray-200 shadow-sm drop-shadow-lg text-center -mt-12 uppercase'>deserts</h2></SwiperSlide>
            <SwiperSlide><img src={s5} alt="" /><h2 className='text-4xl text-gray-200 shadow-sm drop-shadow-lg text-center -mt-12 uppercase'>salads</h2></SwiperSlide>
            
        </Swiper>
    );
};

export default Category;