import React, { FC, useState, useEffect, useContext } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom';
import { Alert } from 'antd';
import Input from '../../components/input/input';
import ActionButton from '../../components/actionButton/actionButton';
import { Context } from '../../App';

interface LoginProps {
  history: any;
}

const Login: FC<LoginProps> = ({ history }) => {
  const context = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const validateLogin = (): void => {
    if (username === 'solomon' && password === 'solomon') {
      setInvalid(false);
      localStorage.setItem('admin', 'Solomon');
      const admin = localStorage.getItem('admin');
      context.setAdmin(admin);
      history.push('/admin');
    } else {
      setInvalid(true);
    }
  };

  const downHandler = ({ key }: { key: any }): void => {
    if (key === 'Enter') {
      validateLogin();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return (): void => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [username, password]);

  const onChangeUsername = (value: string): void => {
    setInvalid(false);
    setUsername(value);
  };

  const onChangePassword = (value: string): void => {
    setInvalid(false);
    setPassword(value);
  };

  return (
    <div className="loginContainer center">
      <h1>LOGIN</h1>
      <form className="center">
        <Input style={{ width: 400 }} placeholder="username" name="name" onChange={onChangeUsername} required />
        <Input
          type="password"
          style={{ width: 400 }}
          placeholder="password"
          name="password"
          onChange={onChangePassword}
          required
        />
        {invalid && <Alert style={{ marginBottom: 40 }} message="Looks like your credentials are not correct" type="error" />}
        <ActionButton action="let's go" onClick={validateLogin} />
      </form>
    </div>
  );
};

export default withRouter(Login);
