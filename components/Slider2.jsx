import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider2 = () => {
  const images = [
    '/image/image-1.jpg',
    '/image/image-2.jpg',
    '/image/image-3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={1400}
          height={600}
          alt=""
          style={{ opacity: index === currentIndex ? 1 : 0, position: 'absolute', width: '100vw' }}
        />
      ))}
      <button className="slider__arrow slider__arrow--left" onClick={() => nextIndex()}>{'<'}</button>
      <button className="slider__arrow slider__arrow--right" onClick={() => nextIndex()}>{'>'}</button>
    </div>
  );
};

export default Slider2;
