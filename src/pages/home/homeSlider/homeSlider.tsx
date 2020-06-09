import React, { FC, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './homeSlider.css';
import { Fade, Zoom } from 'react-reveal';
import Slide from './slide';
import SliderRightButton from '../../../components/slider/sliderRightButton/slider.rightButton';
import { leftButtonStyles, rightButtonStyles } from './homeSlider.data';
import Button from '../../../components/button/button';
 import secondSlide from '../../../assets/secondSlide.jpg';
import thirdSlide from '../../../assets/thirdSlide.jpg';
import ActionButton from '../../../components/actionButton/actionButton';

const sliderSettings = {
  pauseOnHover: false,
  arrows: false,
  adaptiveHeight: true,
  pauseOnDotsHover: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipe: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HomeSlider: FC = () => {
  const [email, setEmail] = useState();

  const sliderRef = useRef(null);

  const next = (): void => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return (): void => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [email]);

  const prev = (): void => {
    sliderRef.current.slickPrev();
  };

  const pause = (): void => {
    sliderRef.current.slickPause();
  };

  const play = (): void => {
    sliderRef.current.slickPlay();
  };

  const onChange = (event: { target: { value: any } }): void => {
    setEmail(event.target.value);
  };

  const subscribe = (): void => {
    const date = new Date();
    setEmail('');
    const oldSubscriptions = JSON.parse(localStorage.getItem('subscriptions'));
    const newOrder = {
      email,
      date: `${date.toDateString()} at ${date.toLocaleTimeString()}`,
    };

    localStorage.setItem('subscriptions', JSON.stringify([newOrder, ...(oldSubscriptions || [])]));
  };

  const downHandler = (event: { preventDefault: () => void; key: string }): void => {
    if (event.key === 'Enter') {
      subscribe();
      event.preventDefault();
    }
  };

  return (
    <div className="sliderContainer">
      <SliderRightButton onMouseLeave={play} onMouseEnter={pause} onClick={prev} style={leftButtonStyles} position="left" />
      <SliderRightButton onMouseLeave={play} onMouseEnter={pause} onClick={next} style={rightButtonStyles} position="right" />
      <Slider lazyLoad="ondemand" ref={sliderRef} {...sliderSettings}>
        <Slide backgroundImage={thirdSlide}>
          <Fade left>
            <h4>Welcome to our poultry</h4>
          </Fade>
          <Zoom>
            <h1>Products</h1>
          </Zoom>
          <Fade right>
            <h3>LAYED WITH LOVE</h3>
          </Fade>
          <Fade bottom>
            <Button title="order now" containerStyle={{ marginTop: 50 }} to="/order" />
          </Fade>
        </Slide>

        <Slide backgroundImage={secondSlide}>
          <Fade left>
            <h4>Subscribe to our news letter</h4>
          </Fade>
          <Zoom>
            <h1>STAY CONNECTED</h1>
          </Zoom>
          <Fade right>
            <form>
              <input
                value={email}
                className="subscriptionInput"
                onFocus={pause}
                onBlur={play}
                placeholder=""
                name="email"
                type="email"
                onChange={onChange}
              />
            </form>
          </Fade>
          <Fade bottom>
            <ActionButton onClick={subscribe} action="Subscribe" containerStyle={{ marginTop: 50 }} />
          </Fade>
        </Slide>
      </Slider>
    </div>
  );
};

export default HomeSlider;
