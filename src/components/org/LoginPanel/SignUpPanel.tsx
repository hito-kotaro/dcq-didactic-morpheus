import { Box, Button, TextField } from '@mui/material';
import React, { VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import sampleLogo from '../../../images/LoginLogo.svg';

type Props = {
  changePanel: () => void;
};

const SignUpPanel: VFC<Props> = (props) => {
  const { changePanel } = props;
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const tenantHandler = useInputForm();
  return (
    <Box>
      <div className="h-10" />
      <div className=" h-3/4 min-h-600 max-h-600  w-2/6 min-w-400 max-w-400 bg-white rounded-xl drop-shadow-lg mx-auto">
        <div className="h-5" />

        <div className="flex justify-center">
          <img src={sampleLogo} alt="sampleLogo" />
        </div>

        <div className="h-5" />

        <div className="w-2/3 mx-auto">
          <div className="">
            <TextField
              fullWidth
              type="text"
              label="新しいテナント名"
              variant="outlined"
              onChange={tenantHandler.onChange}
              value={tenantHandler.value}
            />
          </div>

          <div className="h-8" />
          <div className="">
            <TextField
              fullWidth
              type="password"
              label="新しいパスワード"
              variant="outlined"
              onChange={pwdHandler.onChange}
              value={pwdHandler.value}
            />
          </div>
          <div className="h-8" />
          <div className="">
            <TextField
              fullWidth
              type="password"
              label="新しいパスワード再入力"
              variant="outlined"
              onChange={rePwdHandler.onChange}
              value={rePwdHandler.value}
            />
          </div>
          <Button variant="text" onClick={() => changePanel()}>
            ログイン
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default SignUpPanel;
