import React, { FC, useContext } from 'react';
import { Col, Row } from 'antd';
import { Icon } from 'rsuite';
import { withRouter } from 'react-router-dom';
import ActionButton from '../../components/actionButton/actionButton';
import { Context } from '../../App';

interface AddToCartSectionProps {
  onChangeInput: any;
  add: React.MouseEventHandler;
  subtract: React.MouseEventHandler;
  currentValue: number;
  disabled?: boolean;
  history: any;
}

const AddToCartSection: FC<any> = ({ onChangeInput, add, subtract, currentValue, disabled, history, currentOrder }) => {
  const context = useContext(Context);

  const goToCheckout = (): void => {
    context.setCurrentOrder(currentOrder);
    history.push('/checkout');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
      <Row gutter={8} type="flex">
        <Col>
          <form autoComplete="off">
            <input
              value={currentValue}
              defaultValue={currentValue}
              onChange={({ target: { value } }): number => onChangeInput(value)}
              min={30}
              type="number"
              className="quantityInput"
            />
          </form>
        </Col>
        <Col>
          <div className="quantityButtonsContainer">
            <div onClick={add} className="quantityButton center">
              <Icon icon="plus" />
            </div>
            <div onClick={subtract} className="quantityButton center">
              <Icon icon="minus" />
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ marginLeft: 20 }}>
        <ActionButton disabled={disabled} onClick={goToCheckout} action="Checkout" />
      </div>
    </div>
  );
};

export default withRouter(AddToCartSection);
