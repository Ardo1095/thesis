import React, { FC, useContext, useState } from 'react';
import './checkoutPage.css';
import { Alert, Divider } from 'antd';
import { withRouter } from 'react-router-dom';

import { Context } from '../../App';
import Input from '../../components/input/input';
import ActionButton from '../../components/actionButton/actionButton';

const CheckoutPage: FC<any> = ({ history }) => {
  const {
    setCurrentOrder,
    state: { currentOrder },
  } = useContext(Context);
  const [paymentError, setPaymentError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: 'Woyong',
    address: '',
    city: '',
    email: '',
    phone: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  // const paymentValid = paymentDetails.cardNumber;
  //
  // const addressValid = shippingDetails.name;

  const paymentValid = paymentDetails.cardNumber && paymentDetails.cvc && paymentDetails.expiryDate;

  const addressValid =
    shippingDetails.email && shippingDetails.name && shippingDetails.address && shippingDetails.phone && shippingDetails.city;

  const onChange = (value: any, name: any): void => {
    setAddressError(false);
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const onChangePayment = (value: any, name: any): void => {
    setPaymentError(false);
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const pay = async (): Promise<void> => {
    if (!paymentValid) {
      setPaymentError(true);
    }

    if (!addressValid) {
      setAddressError(true);
    }

    if (addressValid && paymentValid) {
      const date = new Date();
      const existingOrders = JSON.parse(localStorage.getItem('orders'));

      setCurrentOrder({
        ...currentOrder,
        ...shippingDetails,
      });

      const newOrder = {
        ...currentOrder,
        ...shippingDetails,
        orderNumber: existingOrders ? existingOrders.length : 0,
        date: `${date.toDateString()} at ${date.toLocaleTimeString()}`,
        payment: 'Fulfilled',
      };

      localStorage.setItem('orders', JSON.stringify([newOrder, ...(existingOrders || [])]));
      history.push('/order-success');
    }
  };

  return (
    <div className="checkoutPageContainer">
      <div className="addressSection center">
        <h2>ADDRESS</h2>
        <form style={{ display: 'flex', width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
          <Input placeholder="Name" name="name" onChange={onChange} required />
          <Input placeholder="Address" name="address" onChange={onChange} required />
          <Input placeholder="City/Town" name="city" onChange={onChange} required />
          <Input placeholder="Email" name="email" onChange={onChange} required />
          <Input placeholder="Phone" name="phone" onChange={onChange} required />
        </form>

        {addressError && <Alert style={{ marginBottom: 40 }} message="Please fill out the entire form" type="error" />}
      </div>

      <div className="center" style={{ height: window.innerHeight - 130 }}>
        <Divider type="vertical" style={{ height: window.innerHeight / 2 }} />
      </div>
      <div className="paymentSection center">
        <h2>PAYMENT</h2>
        <form autoComplete="off" style={{ display: 'flex', width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
          <Input placeholder="Card number" name="cardNumber" onChange={onChangePayment} required />
          <Input placeholder="Expiry date" name="expiryDate" onChange={onChangePayment} required />
          <Input placeholder="CVC" name="cvc" onChange={onChangePayment} required />
        </form>
        {paymentError && <Alert style={{ marginBottom: 40 }} message="Please fill out the entire form" type="error" />}
        <ActionButton disabled={!(paymentValid && addressValid)} action={`pay ${currentOrder.totalPrice} FT`} onClick={pay} />
      </div>
    </div>
  );
};

export default withRouter(CheckoutPage);
