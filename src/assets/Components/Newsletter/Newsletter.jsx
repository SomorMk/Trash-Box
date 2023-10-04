import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section className='py-[50px] bg-sec'>
            <div className="md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-container mx-auto flex flex-wrap items-center">
                <div className='w-[90%] md:w-1/2 mx-auto lg:mx-0 text-center md:text-left'>
                    <p className='text-[26px] lg:text-[32px] text-w font-bold font-dosis'>Sign Up For Our Newsletter</p>
                </div>
                <div className='w-[90%] md:w-1/2 mx-auto lg:mx-0'>
                    <form className='w-full flex flex-wrap justify-center sm:justify-evenly lg;justify-end mt-7 md:mt-0'>
                        <input type="text"  placeholder='Your Email' required className='pl-5 w-full sm:w-[50%] md:w-1/2 h-[40px] rounded-lg focus-visible:outline-none'/>
                        <button type="submit" className='h-[40px] px-[50px] bg-w text-b text-base lg:text-lg font-semibold font-dosis rounded-lg mt-4 sm:mt-0 lg:ml-4 hover:bg-pri hover:text-w transition ease-linear'>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Newsletter