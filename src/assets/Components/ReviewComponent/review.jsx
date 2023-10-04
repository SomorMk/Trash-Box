import React from 'react'

const ReviewItem = (props) => {
  return (
    <>
        <div className='w-full bg-w px-8 pb-10 pt-16 lg:pt-20 text-center rounded-xl relative overflow-visible mt-14 lg:mt-16 group'>
            <img src={props.img} alt="User Image" className='w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-[50%] absolute top-[-50px] lg:top-[-60px] left-[50%] translate-x-[-50%] z-[999] border-0 group-hover:border-[5px] border-pri transition ease-linear' />
            <p className='text-sm lg:text-lg text-b font-dosis'>{props.text}</p>
            <p className='text-lg lg:text-2xl text-b font-black font-dosis mt-5 mb-2'>{props.name}</p>
            <p className='text-sm lg:text-lg text-b font-dosis'>{props.posi}</p>
            <p className='text-sm lg:text-lg text-b font-dosis'>{props.locat}</p>
        </div>
    </>
  )
}

export default ReviewItem