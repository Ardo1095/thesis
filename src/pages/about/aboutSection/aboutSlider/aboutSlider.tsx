import React, { FC, useRef, useState } from 'react';
import './aboutSlider.css';
import Slider from 'react-slick';
import aboutSliderImages from './aboutSliderData';
import AboutSlide from './aboutSlide/aboutSlide';

const sliderSettings = {
  pauseOnHover: true,
  arrows: false,
  adaptiveHeight: true,
  pauseOnDotsHover: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const AboutSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const updateIndex = (index: React.SetStateAction<number>): void => {
    setCurrentIndex(index);
  };

  const goTo = (index: number): void => {
    sliderRef.current.slickGoTo(index);
  };

  const pause = (): void => {
    sliderRef.current.slickPause();
  };
  const play = (): void => {
    sliderRef.current.slickPlay();
  };

  return (
    <div className="aboutSliderContainer">
      <Slider ref={sliderRef} afterChange={updateIndex} {...sliderSettings}>
        {aboutSliderImages.map(slide => (
          <AboutSlide backgroundImage={slide} />
        ))}
      </Slider>

      <div className="thumbnailContainer">
        {aboutSliderImages.map((thumbnail, index) => (
          <div
            onMouseLeave={play}
            onMouseEnter={pause}
            onClick={(): void => goTo(index)}
            style={{
              border: currentIndex === index && '3px solid #76aa6f',
              marginRight: index === aboutSliderImages.length - 1 ? 0 : 20,
              backgroundImage: `url(${thumbnail})`,
            }}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
