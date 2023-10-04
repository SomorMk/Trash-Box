import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import work1 from '../../images/work1.png'
import work2 from '../../images/work2.jpg'
import work3 from '../../images/work3.jpg'
import work4 from '../../images/work4.jpg'
import work5 from '../../images/work5.png'
import work6 from '../../images/work6.jpg'
import work7 from '../../images/work7.jpg'
import CommonHead from '../CommonHead/CommonHead';

const Work = () => {
  return (
    <>
        <section className='py-12 lg:py-24'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto">
                
                <CommonHead title="Our Work" desc="We develops powerful messages for organizations, through Audio-Visuals, websiteothrough the smart uses of social media. We work for the profit and the non-profit sectors, for local and international organizations"></CommonHead>

                <div className='w-full flex flex-wrap items-center mt-10 lg:mt-24'>
                    <div className='w-full lg:w-3/12 mb-8 lg:mb-0'>
                        <p className='text-[30px] lg:text-[40px] text-center lg:text-left text-b2 font-bold font-dosis'>Development Agency</p>
                    </div>
                    <div className='w-[95%] mx-auto lg:w-9/12'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            // navigation
                            // scrollbar={{ draggable: true }}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            slidesPerView={4}
                            autoplay={{delay: 2000}}
                            breakpoints={{
                                300: {
                                    width: 300,
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                640: {
                                  slidesPerView: 3,
                                },
                                768: {
                                  slidesPerView: 4,
                                },
                              }}
                            >
                            <SwiperSlide><img src={work1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work5} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work6} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work7} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-12 lg:py-24 bg-bgc'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto">
                <div className='w-full flex flex-wrap items-center'>
                    <div className='w-full lg:w-3/12 mb-8 lg:mb-0'>
                        <p className='text-[30px] lg:text-[40px] text-center lg:text-left text-b2 font-bold font-dosis'>Business Agency</p>
                    </div>
                    <div className='w-[95%] mx-auto lg:mx-0 lg:w-9/12'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            slidesPerView={4}
                            autoplay={{delay: 2500}}
                            breakpoints={{
                                300: {
                                    width: 300,
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                640: {
                                  slidesPerView: 3,
                                },
                                768: {
                                  slidesPerView: 4,
                                },
                              }}
                            >
                            <SwiperSlide><img src={work1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work5} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work6} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={work7} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work