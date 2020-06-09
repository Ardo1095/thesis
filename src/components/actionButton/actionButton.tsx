import React, { FC } from 'react';
import './actionButton.css';

interface Props {
  action: string;
  onClick: React.MouseEventHandler;
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
}

const disabledColor = '#dddddd';

const ActionButton: FC<Props> = ({ containerStyle, onClick, action, disabled }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: disabled && disabledColor,
      borderColor: disabled && disabledColor,
      color: disabled && '#151515',
      ...containerStyle,
    }}
    className="actionButton"
  >
    {action}
  </div>
);

export default ActionButton;
