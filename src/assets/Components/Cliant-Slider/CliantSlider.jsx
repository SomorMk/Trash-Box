import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import cliant1 from '../../images/cliant1.png'
import cliant2 from '../../images/cliant2.png'
import cliant3 from '../../images/cliant3.png'
import cliant4 from '../../images/cliant4.png'
import cliant5 from '../../images/cliant5.png'
import cliant6 from '../../images/cliant6.png'
import cliant7 from '../../images/cliant7.png'
import cliant8 from '../../images/cliant8.png'
import cliant9 from '../../images/cliant9.png'
import cliant10 from '../../images/cliant10.png'
import cliant11 from '../../images/cliant11.png'
import cliant12 from '../../images/cliant12.png'

const CliantSlider = () => {
  return (
    <>
        <section className='py-10'>
            <div className="lg:max-w-[95%] xl:max-w-container mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    // navigation
                    // scrollbar={{ draggable: true }}
                    // pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={7}
                    autoplay={{delay: 700}}
                    breakpoints={{
                      300: {
                        slidesPerView: 4,
                      },
                      640: {
                        slidesPerView: 6,
                      },
                      768: {
                        slidesPerView: 7,
                      },
                    }}
                    >
                    <SwiperSlide><img src={cliant1} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant2} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant3} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant4} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant5} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant6} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant7} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant8} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant9} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant10} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant11} alt="Cliant Image" /></SwiperSlide>
                    <SwiperSlide><img src={cliant12} alt="Cliant Image" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  )
}

export default CliantSlider