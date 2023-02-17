import React from 'react'


const Corporate = () => {
  return (
    <>
    
    <div className='w-full  p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2 className=' p-4 uppercase text-4xl text-lime-700 font-bold'>Corporate Profile</h2>
                <p className='py-2 text-gray-600'>We develop and manage hotel investments of superior standards in a sustainable, profitable manner and with a high-level team.</p>
                <p className='py-2 text-gray-600'>Globalization has proven to be a challenge for Latin America and the Caribbean, this phenomenon means an increase in trade in the region and the rest of the world.
                As a consequence, there is a demand for high-quality products and services. This is especially reflected in the challenge of providing hotel infrastructure that can be adapted to the profile of each traveler.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://www.caribehospitality.com/wp-content/uploads/2019/07/Slider3-Courtyard-Hermosillo.jpg'/>
            </div>
        </div>
    </div>


    <div className='w-full  p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl ' src='https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
            </div>
            <div className='col-span-2'>
                <h2 className=' p-4 uppercase text-4xl text-lime-700 font-bold'>Our Strategy</h2>
                <p className='py-2 text-gray-600'>Caribe Hospitality was born with the objective of developing hotels that are managed by prestigious hotel brands.
                Our business process begins by selecting strategic locations, to build spaces that are designed and adjusted to meet the needs of the traveler.</p>

                <h2 className=' p-4 uppercase text-4xl text-lime-700 font-bold'>Development Strategy</h2>

                <p className='py-2 text-gray-600'>Given its reputation as a prestigious hotel developer, renowned international financial institutions have partnered with Caribe Hospitality signing master financing agreements; in 2007 with the International Finance Corporation (IFC), and in 2009 with the Inter-American Development Bank (IDB).
                As a result of these relationships, new growth opportunities have materialized.</p>
            </div>
            
        </div>
    </div>


    
    </>
  )
}

export default Corporate