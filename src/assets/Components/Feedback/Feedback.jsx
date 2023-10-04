import React from 'react'
import CommonHead from '../CommonHead/CommonHead'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import user3 from '../../images/user3.png'
import ReviewItem from '../ReviewComponent/review';

const Feedback = () => {
  return (
    <>
        <section className='py-10 lg:py-24 bg-bgc'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto">
                <CommonHead title='Valuable feedback from client'></CommonHead>

                <div className='mt-10 px-4 lg:px-0'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={{delay: 5000}}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                            },
                            640: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3
                            }
                          }}
                        >
                        <SwiperSlide>
                            <ReviewItem
                                img={user1}
                                text="I am delighted to recommend Trash Box Limited for their exceptional support in enhancing our NGO's online presence, driving outreach, and positive change in communities. Their commitment and expertise are invaluable for impactful partnerships."
                                name="Zahed Hasan"
                                posi='National Consultant'
                                locat='UNDP Bangladesh'
                            ></ReviewItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewItem
                                img={user2}
                                text="I am delighted to recommend Trash Box Limited for their exceptional support in enhancing our NGO's online presence, driving outreach, and positive change in communities. Their commitment and expertise are invaluable for impactful partnerships."
                                name="MD Omor Mustafiz"
                                posi='National Consultant'
                                locat='UNDP Bangladesh'
                            ></ReviewItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewItem
                                img={user3}
                                text="I am delighted to recommend Trash Box Limited for their exceptional support in enhancing our NGO's online presence, driving outreach, and positive change in communities. Their commitment and expertise are invaluable for impactful partnerships."
                                name="Sarah Zita"
                                posi='National Consultant'
                                locat='UNDP Bangladesh'
                            ></ReviewItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewItem
                                img={user1}
                                text="I am delighted to recommend Trash Box Limited for their exceptional support in enhancing our NGO's online presence, driving outreach, and positive change in communities. Their commitment and expertise are invaluable for impactful partnerships."
                                name="Zahed Hasan"
                                posi='National Consultant'
                                locat='UNDP Bangladesh'
                            ></ReviewItem>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}

export default Feedback