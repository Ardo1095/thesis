import React, { FC } from 'react';
import './input.css';

interface Props {
  placeholder: string;
  name: string;
  onChange: any;
  required: boolean;
  style?: React.CSSProperties;
  type?: string;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
}

const Input: FC<Props> = ({ style, onChange, placeholder, name, required, type, onFocus, onBlur }) => (
  <input
    onFocus={onFocus}
    onBlur={onBlur}
    style={{ ...style }}
    type={type}
    required={required}
    onChange={({ target: { value, name } }) => onChange(value, name)}
    placeholder={placeholder}
    name={name}
    className="input"
  />
);

export default Input;
