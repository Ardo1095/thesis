import React, { FC, useEffect, useState } from 'react';
import './orderPage.css';
import { Row, Col, Divider, Alert } from 'antd';
import AboutSlider from '../about/aboutSection/aboutSlider/aboutSlider';
import AddToCartSection from './addToCartSection';

const evenColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

const maxCrates = 1000;
const minCrates = 30;
const unitPrice = 900;

const OrderPage: FC = () => {
  const [numberOfCrates, setNumberOfCrates] = useState(minCrates);
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const add = (): void => {
    if (!isValid) {
      setNumberOfCrates(maxCrates);
    } else if (numberOfCrates < maxCrates) {
      setMessage('');
      setNumberOfCrates((prevState: number) => prevState + 1);
    } else {
      setMessage(`You cannot order more than ${maxCrates} crates`);
    }
  };

  const subtract = (): void => {
    if (!isValid) {
      setNumberOfCrates(minCrates);
    } else if (numberOfCrates > minCrates) {
      setMessage('');
      setNumberOfCrates((prevState: number) => prevState - 1);
    } else {
      setMessage(`You cannot less than ${minCrates} crates`);
    }
  };

  useEffect(() => {
    if (numberOfCrates.toString() === '') {
      setMessage('Please enter a number');
      return;
    }
    if (numberOfCrates >= minCrates && numberOfCrates <= maxCrates) {
      setIsValid(true);
      setMessage('');
    } else {
      setIsValid(false);
      if (numberOfCrates < minCrates) {
        setMessage(`You cannot less than ${minCrates} crates`);
      } else if (numberOfCrates > maxCrates) {
        setMessage(`You cannot order more than ${maxCrates} crates`);
      }
    }
  }, [numberOfCrates]);

  const onChangeInput = (value: number): void => {
    if (!value) {
      setIsValid(false);
    }
    setNumberOfCrates(value);
  };

  return (
    <section className="orderSectionContainer center">
      <div className="orderContainer">
        <Row gutter={48} type="flex">
          <Col {...evenColResponsiveProps}>
            <AboutSlider />
          </Col>
          <Col {...evenColResponsiveProps}>
            <h2 className="productName">Crates</h2>
            <Row type="flex">
              <p className="price">
                <p className="unitPrice">{unitPrice} FT</p>
                <Divider type="vertical" />
                per crate
              </p>
            </Row>
            <p className="productDescription">
              Lorem ipsum dolor sit amet, ei impetus epicurei his, ne falli erant consequuntur est. Mei simul aperiam eu, an rebum
              regione ponderum mel. Facer placerat ut duo, id duis solum maiorum vis, vim autemsemper docendi cu. Pro
            </p>

            <Divider />

            <p className="productWidget">
              <strong>Weight:</strong> 1kg
            </p>
            <p className="productWidget">
              <strong>Crate dimensions:</strong> 60 x 60 x 20
            </p>

            <AddToCartSection
              currentOrder={{ quantity: numberOfCrates, totalPrice: numberOfCrates * unitPrice }}
              disabled={!isValid}
              currentValue={numberOfCrates}
              subtract={subtract}
              add={add}
              onChangeInput={onChangeInput}
            />

            {message && <Alert message={message} type="error" />}

            <h4 style={{ marginTop: 50 }}>Total</h4>
            <p style={{ fontSize: 17 }} className="unitPrice">
              {isValid ? unitPrice * numberOfCrates : 0} FT
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OrderPage;
