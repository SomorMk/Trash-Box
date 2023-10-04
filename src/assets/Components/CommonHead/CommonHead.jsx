import React from 'react'

const CommonHead = (props) => {
  return (
    <>
        <div className='w-full text-center'>
            <p className='text-[26px] md:text-[40px] lg:text-[45px] text-b font-bold font-dosis'>{props.title}</p>
        </div>
        <div className='w-full text-center mt-5'>
            <p className='text-xs lg:text-base max-w-[90%] mx-auto leading-6 lg:leading-8 lg:max-w-full lg:mx-0 text-b2 font-medium font-mon'>{props.desc}</p>
        </div>
    </>
  )
}

export default CommonHead