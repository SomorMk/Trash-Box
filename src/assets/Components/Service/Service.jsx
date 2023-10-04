import React from 'react'
import CommonHead from '../CommonHead/CommonHead';
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import service4 from '../../images/service4.png'

const Service = () => {
  return (
    <>
        <section className='py-10 lg:py-24 bg-bgc'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto">
                <CommonHead title='Our Services' desc='We specialize in crafting compelling digital campaigns, creating engaging content, seamless web development, unforgettable event management, and providing expert consultancy. Elevate your brand with our innovative solutions and make a lasting impact in the market.'></CommonHead>
            </div>
        </section>

        <section className='pb-10 pt-14 lg:py-20 relative after:absolute after:content-[""] after:left-[50%] after:top-[-34px] after:translate-x-[-50%] after:rotate-[45deg] after:w-16 after:h-16 after:bg-bgc after:z-[-1]'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap sm:justify-evenly lg:justify-between">

                <div className='w-full sm:w-[48%] lg:w-[24%] bg-bgc mx-3 sm:mx-0 mb-6 lg:mb-0 py-12 px-8 rounded-xl group'>
                    <img src={service1} alt="Service Icon" className='max-w-[60px] mx-auto mb-5 transition ease-linear' />
                    <p className='text-b text-xl font-bold font-dosis text-center mb-4'>Digital Campaign & Activation</p>
                    <p className='text-b2 text-base leading-7 lg:text-lg font-dosis text-center'>Ignite your brand's online success with our potent digital campaigns and activation's. Experience growth like never before!</p>
                </div>

                <div className='w-full sm:w-[48%] lg:w-[24%] bg-bgc mx-3 sm:mx-0 mb-6 lg:mb-0 py-12 px-8 rounded-xl group'>
                    <img src={service2} alt="Service Icon" className='max-w-[60px] mx-auto mb-5 transition ease-linear' />
                    <p className='text-b text-xl font-bold font-dosis text-center mb-4'>Content Creation & Web Development</p>
                    <p className='text-b2 text-base leading-7 lg:text-lg font-dosis text-center'>Crafting compelling content and innovative web development to elevate your brand's online presence and user experience.</p>
                </div>

                <div className='w-full sm:w-[48%] lg:w-[24%] bg-bgc mx-3 sm:mx-0 mb-6 lg:mb-0 py-12 px-8 rounded-xl group'>
                    <img src={service3} alt="Service Icon" className='max-w-[60px] mx-auto mb-5 transition ease-linear' />
                    <p className='text-b text-xl font-bold font-dosis text-center mb-4'>Event Management & Logistic Support</p>
                    <p className='text-b2 text-base leading-7 lg:text-lg font-dosis text-center'>From planning to execution, trust our event management and logistical support to deliver exceptional experiences flawlessly.</p>
                </div>

                <div className='w-full sm:w-[48%] lg:w-[24%] bg-bgc mx-3 sm:mx-0 mb-6 lg:mb-0 py-12 px-8 rounded-xl group'>
                    <img src={service4} alt="Service Icon" className='max-w-[60px] mx-auto mb-5 transition ease-linear' />
                    <p className='text-b text-xl font-bold font-dosis text-center mb-4'>Implementation Consultancy</p>
                    <p className='text-b2 text-base leading-7 lg:text-lg font-dosis text-center'>Expert implementation consultancy to optimize your strategies, drive efficiency, and achieve outstanding business results.</p>
                </div>

            </div>
        </section>
    </>
  )
}

export default Service