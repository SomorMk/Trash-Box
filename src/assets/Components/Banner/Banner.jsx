import React from 'react'
import bannerLogo from '../../images/banner-logo.png'

const Banner = () => {
  return (
    <>
        <section className='bg-banner h-screen bg-no-repeat bg-cover bg-center'>
            <div className='md:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap items-center h-full pt-24 lg:pt-0'>
                <div className='w-full md:w-1/2 lg:w-5/12 text-center mt-auto md:mt-0 md:text-left'>
                    <p className='text-[35px] lg:text-[50px] text-w md:text-b font-medium font-dosis'>
                        All STORIES <span className='text-sec md:text-pri font-bold block'>GROW OUT</span> OF OTHER STORIES
                    </p>
                    <a href="#" className='py-2 lg:py-3 px-8 bg-sec text-lg lg:text-xl text-w font-dosis rounded-2xl mt-7 inline-block hover:bg-pri transition ease-linear'>MORE ABOUT US</a>
                </div>
                <div className='w-full md:w-1/2 lg:w-7/12 mb-auto mt-10 md:mt-0 md:mb-0'>
                    <img src={bannerLogo} alt="Banner Logo" className='w-[70%] sm:w-[50%] md:w-auto mx-auto lg:w-[90%] max-w-full' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner