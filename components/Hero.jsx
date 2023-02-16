import React from 'react'

const Hero = ({heading, mesagge}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>  
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] h-screen '/>
        <div className=' p-5 text-white z-[2]  mt-[-10rem] '>
            <h2 className='text-5xl  font-bold mt-10 md:mt-24 sm:mt-24'>{heading}</h2>
            <p className='py-5 md:text-xl sm:w-full md:w-3/6 sm:text-sm'>{mesagge}</p>
            
        </div>
    
    </div>
  )
}

export default Hero