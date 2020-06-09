import React, { FC } from 'react';
import lottie from 'lottie-web';
import { withRouter } from 'react-router-dom'
import { Context } from '../../App';
import ActionButton from '../../components/actionButton/actionButton';

const OrderSuccess: FC<any> = ({ history }) => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('delivery'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_vz5qtb.json',
    });
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <div style={{ height: 300 }} id="delivery" />

      <Context.Consumer>
        {({ state: { currentOrder } }) => (
          <>
            <h2 style={{ marginTop: 40 }}>Wheels up on that order, {currentOrder.name.split(' ')[0]}</h2>
            <h6 style={{ color: '#777', marginTop: 10 }}>{`Shipping to: ${currentOrder.address}, ${currentOrder.city}`}</h6>
            <ActionButton containerStyle={{ marginTop: 40 }} action="Go home" onClick={() => history.push('/')} />
          </>
        )}
      </Context.Consumer>
    </div>
  );
};

export default OrderSuccess;
