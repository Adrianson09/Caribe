import Image from 'next/legacy/image';
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import next from 'next';


const Slider = ({slides}) => {
  const lazyRoot = React.useRef(null)
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0  ? length -1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (

    <div id='slider-hoteles' className='max-w-[1440px] mx-auto'>
        <h1 className='text-center font-bold uppercase text-2xl p-4 '>Proyectos</h1>
        <p className='text-center'>Caribe Hospitality cuenta con 14 Hoteles en 6 paises</p>
        <div className='relative flex justify-center p-4'>

        
            {SliderData.map((slide, index) => {  
                return  (
                <div key={index}  className={index === current ? 'opacity-[1] ease-in duration-1000 sliderP w-full' : 'opacity-0'}>
                      <FaArrowCircleLeft 
                      onClick={prevSlide}
                      className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none  z-[2]' 
                      size={50}/>
                      {index === current && (
                          <Image 
                          lazyRoot={lazyRoot}
                          src={slide.image}
                          alt='/' width='1440'
                          height='600' 
                        />
                      )}
                      <FaArrowCircleRight 
                      onClick={nextSlide}
                      className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' 
                      size={50}/>
                  </div>
                  
                  
              );
            })}
      </div>   
    </div>
  );
};

export default Slider