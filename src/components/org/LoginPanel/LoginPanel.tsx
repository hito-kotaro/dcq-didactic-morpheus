import React from 'react';
import sampleLogo from '../../../images/LoginLogo.svg';
import LoginForm from './LoginForm';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';

const LoginPanel = () => {
  const form = useChangeComponent();

  return (
    <div className="mx-auto">
      <div className="h-5" />

      <div className="flex justify-center">
        <img src={sampleLogo} alt="sampleLogo" />
      </div>

      <div className="h-5" />
      {form.component ?? <LoginForm chComponent={form.chComponent} />}
    </div>
  );
};
export default LoginPanel;
