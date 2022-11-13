import React, { useEffect, VFC } from 'react';
import { TextField, Button, Divider } from '@mui/material';
import SelectForm from '../../../mol/SelectForm/SelectForm';
import useInputForm from '../../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../../mol/SelectForm/useSelectForm';
import useGlobalState from '../../../../stores/useGlobalState';
import useUserApi from '../../../../hooks/Api/useUserApi';

type Props = {
  handleClose?: () => void;
};

const UserCreate: VFC<Props> = (props) => {
  const { handleClose } = props;
  const { teams } = useGlobalState();
  const { createUser } = useUserApi();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const teamSelectHandler = useSelectForm();

  useEffect(() => {
    teamSelectHandler.formatSelectItem(teams);
  }, [teams]);

  const wrapOnClickCreate = () => {
    createUser(
      userHandler.value,
      pwdHandler.value,
      Number(teamSelectHandler.value),
    );
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <div className="px-3">
      <div className="text-text text-lg font-semibold">ユーザ新規作成</div>

      <div className="my-3">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        label="ユーザ名"
        variant="outlined"
        onChange={userHandler.onChange}
        value={userHandler.value}
      />

      <div className="h-3" />

      <TextField
        fullWidth
        type="password"
        label="パスワード"
        variant="outlined"
        onChange={pwdHandler.onChange}
        value={pwdHandler.value}
      />

      <div className="h-3" />

      <TextField
        fullWidth
        type="password"
        label="パスワード再入力"
        variant="outlined"
        onChange={rePwdHandler.onChange}
        value={rePwdHandler.value}
      />

      <div className="h-3" />
      <SelectForm
        menu={teamSelectHandler.selectItem}
        label="チームを選択してください"
        handler={teamSelectHandler}
      />

      <div className="h-3" />
      <Button variant="contained" onClick={wrapOnClickCreate}>
        新しいユーザを作成
      </Button>
    </div>
  );
};

export default UserCreate;
