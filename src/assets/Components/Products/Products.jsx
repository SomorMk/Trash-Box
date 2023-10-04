import React from 'react'
import CommonHead from '../CommonHead/CommonHead';
import product1 from '../../images/product1.png'
import product2 from '../../images/product2.png'
import product3 from '../../images/product3.png'
import product4 from '../../images/product4.png'

const Products = () => {
  return (
    <>
        <section className='py-10 lg:py-24'>
            <div className="lg:max-w-[95%] 2xl:max-w-container mx-auto">
                <CommonHead title='Our Innitiatives'></CommonHead>

                <div className='flex flex-wrap justify-evenly lg:justify-between mt-10'>
                    <a href='#' className='w-[45%] md:w-[23.5%] mb-6 lg:mb-0 mx-auto lg:mx-0 py-8 bg-bgc rounded-xl group'>
                        <img src={product1} alt="Projuct Image" className='w-[60%] lg:w-[80%] max-w-full mx-auto group-hover:scale-[.9] transition ease-linear' />
                    </a>
                    <a href='#' className='w-[45%] md:w-[23.5%] mb-6 lg:mb-0 mx-auto lg:mx-0 py-8 bg-bgc rounded-xl group'>
                        <img src={product2} alt="Projuct Image" className='w-[60%] lg:w-[80%] max-w-full mx-auto group-hover:scale-[.9] transition ease-linear' />
                    </a>
                    <a href='#' className='w-[45%] md:w-[23.5%] mb-6 lg:mb-0 mx-auto lg:mx-0 py-8 bg-bgc rounded-xl group'>
                        <img src={product3} alt="Projuct Image" className='w-[60%] lg:w-[80%] max-w-full mx-auto group-hover:scale-[.9] transition ease-linear' />
                    </a>
                    <a href='#' className='w-[45%] md:w-[23.5%] mb-6 lg:mb-0 mx-auto lg:mx-0 py-8 bg-bgc rounded-xl group'>
                        <img src={product4} alt="Projuct Image" className='w-[60%] lg:w-[80%] max-w-full mx-auto group-hover:scale-[.9] transition ease-linear' />
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products