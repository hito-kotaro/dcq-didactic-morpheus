import React, { ReactElement, useState, VFC } from 'react';
import { TextField, Button, Box } from '@mui/material';
import sampleLogo from '../../../images/LoginLogo.svg';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useLogin from '../../../hooks/Login/useLogin';
import LoginForm from './LoginForm';
import AdminLoginForm from './AdminLoginForm';
import SignUpForm from './SignUpForm';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';

type Props = {
  changePanel: () => void;
};

const LoginPanel: VFC<Props> = (props) => {
  const { changePanel } = props;
  const [isAdmin, setIsAdmin] = useState(false);
  const form = useChangeComponent();

  return (
    <Box>
      <div className="h-10" />
      <div className=" h-3/4 min-h-600 max-h-600  w-2/6 min-w-400 max-w-400 bg-white rounded-xl drop-shadow-lg mx-auto">
        <div className="h-5" />

        <div className="flex justify-center">
          <img src={sampleLogo} alt="sampleLogo" />
        </div>

        <div className="h-5" />
        {form.component ?? <LoginForm chComponent={form.chComponent} />}
      </div>
    </Box>
  );
};
export default LoginPanel;
