import React from 'react'
import CommonHead from '../CommonHead/CommonHead'
import founderImg from '../../images/founder.png'

const Founder = () => {
  return (
    <>
        <section className='pb-10 lg:pb-24'>
            <div className="md:max-w-[95%] lg:max-w-[95%] 2xl:max-w-container mx-auto">
                <CommonHead title='Meet the Founder'></CommonHead>
                <div className='mt-10 flex flex-wrap justify-between items-center'>
                    <div className='w-[95%] md:w-1/2 mx-auto lg:mx-0 pt-8 lg:pt-14 lg:pr-10 text-center md:text-left order-2 md:order-1'>
                        <p className='text-[28px] lg:text-[36px] text-b2 font-bold font-dosis mb-2'>Somor Mk Ovi</p>
                        <p className='text-base lg:text-[20px] text-b2 font-bold font-dosis mb-1'>Designer and Developer</p>
                        <p className='text-base lg:text-[20px] text-b2 font-bold font-dosis'>Elfin Digital</p>
                        <p className='text-base lg:text-[22px] leading-6 lg:leading-8 text-b2 font-dosis mt-9'>
                            <span className='block mb-5'>Every new day comes up with new challenges to support the global market system.</span>
                            <span className='block mb-5'>Prefer to adhere to optimistic solutions in every sphere of professional perspectives in order to cater to the needs of the marketplace with over a decade of experience in consulting, communications, and execution of projects. </span>
                            <span className='block mb-5'>8+ years of experience with integrity, dedication, and hard work which are always means to our progress. </span>
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 order-1 md:order-2'>
                        <img src={founderImg} alt="Founder Image" className='w-[80%] lg:w-full mx-auto lg:mx-0 max-w-full blur-[5px]' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Founder