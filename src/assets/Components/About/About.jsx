import React from 'react'
import aboutImg from '../../images/about-bg.png'

const About = () => {
  return (
    <>
        <section className='py-10 lg:py-24 bg-bgc'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap justify-between items-center">
                <div className='w-[90%] mx-auto lg:mx-0 sm:w-[48.5%] order-2 lg:order-1'>
                    <img src={aboutImg} alt="About Image" className='w-full max-w-full' />
                </div>
                <div className='w-[90%] mx-auto lg:mx-0 lg:w-[48.5%] order-1 lg:order-2 text-center lg:text-left'>
                    <p className='text-b text-[26px] sm:text-[45px] font-bold font-dosis mb-6 lg:mb-8'>About Us</p>
                    <p className='text-b2 text-sm leading-7 lg:leading-8 lg:text-lg font-medium font-mon'>Welcome to our dynamic marketing agency, empowering NGO and corporate brands since inception. We ignite success through tailored digital campaigns, activation's, content creation, web development, event mastery, and strategic consultancy. Join us to make a meaningful impact in the world.</p>
                    <ul className='flex flex-wrap justify-between mt-8'>
                        <li className='w-[48%] bg-w py-6 text-center mb-6 rounded-xl group hover:bg-pri transition ease-linear'>
                            <span className='text-lg lg:text-2xl text-b font-bold font-mon block group-hover:text-w transition ease-linear'>80+</span>
                            <span className='text-sm lg:text-base text-b2 font-mon group-hover:text-w transition ease-linear'>Happy Clients</span>
                        </li>
                        <li className='w-[48%] bg-w py-6 text-center mb-6 rounded-xl group hover:bg-pri transition ease-linear'>
                            <span className='text-lg lg:text-2xl text-b font-bold font-mon block group-hover:text-w transition ease-linear'>3k+</span>
                            <span className='text-sm lg:text-base text-b2 font-mon group-hover:text-w transition ease-linear'>Content Creations</span>
                        </li>
                        <li className='w-[48%] bg-w py-6 text-center mb-6 rounded-xl group hover:bg-pri transition ease-linear'>
                            <span className='text-lg lg:text-2xl text-b font-bold font-mon block group-hover:text-w transition ease-linear'>50+</span>
                            <span className='text-sm lg:text-base text-b2 font-mon group-hover:text-w transition ease-linear'>Organized Events</span>
                        </li>
                        <li className='w-[48%] bg-w py-6 text-center mb-6 rounded-xl group hover:bg-pri transition ease-linear'>
                            <span className='text-lg lg:text-2xl text-b font-bold font-mon block group-hover:text-w transition ease-linear'>20+</span>
                            <span className='text-sm lg:text-base text-b2 font-mon group-hover:text-w transition ease-linear'>Team Members</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default About