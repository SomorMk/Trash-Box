import React from 'react'

const Contact = () => {
  return (
    <>
        <section className='py-[50px] bg-bgc'>
            <div className="md:max-w-[95%] lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap justify-center items-center">
                <div className='w-[90%] sm:w-1/2 md:w-1/3 mb-7 md:mb-0 flex flex-wrap justify-between items-center'>
                    <div className='w-[15%] flex justify-center'>
                        <i className="text-[30px] lg:text-[60px] text-b2 fa-regular fa-building"></i>
                    </div>
                    <div className='w-[80%]'>
                        <p className='text-base lg:text-lg text-b2 font-dosis'>House-33A, Road-04 <br /> Dhanmondi R/A, Dhaka</p>
                    </div>
                </div>
                <div className='w-[90%] sm:w-1/2 md:w-1/3 mb-7 md:mb-0 flex flex-wrap justify-between items-center'>
                    <div className='w-[15%] flex justify-center'>
                        <i class="text-[30px] lg:text-[50px] text-b2 fa-solid fa-phone"></i>
                    </div>
                    <div className='w-[80%]'>
                        <a href="tel:+88 0123456789" className='text-lg lg:text-[22px] text-b font-bold font-mon hover:text-pri transition ease-linear'>+88 0123456789</a>
                        <p className='text-base lg:text-lg text-b2 font-dosis'>Sun to Thu - 10 AM to 6 PM</p>
                    </div>
                </div>
                <div className='w-[90%] sm:w-1/2 md:w-1/3 flex flex-wrap justify-between items-center'>
                    <div className='w-[15%] flex justify-center'>
                        <i class="text-[30px] lg:text-[50px] text-b2 fa-solid fa-envelope"></i>
                    </div>
                    <div className='w-[80%]'>
                        <a href='mailto:info@trashboxbd.com' className='text-lg lg:text-[22px] text-b font-bold font-mon hover:text-pri transition ease-linear'>info@trashboxbd.com</a>
                        <p className='text-base lg:text-lg text-b2 font-dosis'>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact