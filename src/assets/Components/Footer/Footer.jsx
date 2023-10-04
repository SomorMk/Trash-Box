import React from 'react'

const Footer = () => {
  return (
    <>
        <section className='py-5 bg-pri'>
            <div className="md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap items-center">
                <div className='w-full sm:w-1/2 text-center md:text-left mb-3 sm:mb-0'>
                    <p className='text-sm lg:text-base text-w font-dosis'>Copyright © 2023 All Rights reserved.</p>
                </div>
                <div className='w-full sm:w-1/2 flex justify-center md:justify-end items-center'>
                    <p className='text-sm lg:text-base text-w font-dosis mr-3'>Find Us</p>
                    <ul className='flex items-center'>
                        <li className='ml-4'><a href="#"><i class="text-xs sm:text-base text-w fa-brands fa-facebook"></i></a></li>
                        <li className='ml-4'><a href="#"><i class="text-xs sm:text-base text-w fa-brands fa-x-twitter"></i></a></li>
                        <li className='ml-4'><a href="#"><i class="text-xs sm:text-base text-w fa-brands fa-linkedin"></i></a></li>
                        <li className='ml-4'><a href="#"><i class="text-xs sm:text-base text-w fa-brands fa-instagram"></i></a></li>
                        <li className='ml-4'><a href="#"><i class="text-xs sm:text-base text-w fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer