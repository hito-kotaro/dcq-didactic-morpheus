import React from 'react';
import { Box } from '@mui/material';
import sampleLogo from '../../../images/LoginLogo.svg';
import LoginForm from './LoginForm';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';

const LoginPanel = () => {
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
