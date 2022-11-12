import React from 'react';

// componsents
import { Button } from '@mui/material';
import SelectForm from '../SelectForm/SelectForm';
import AdminMenuTemplate from '../../templates/AdminMenuTemplate';

// custom hooks
import useSelectForm from '../SelectForm/useSelectForm';

// constants
import { SEASON_MENU } from '../../../lib/constants';

const SeasonSetting = () => {
  const seasonSelectHandler = useSelectForm();

  return (
    <AdminMenuTemplate title="シーズン設定">
      <>
        <div className="font-semibold">現在のシーズン設定</div>
        <div className="text-text">年度半年(4/1 ~ 9/30 / 10/1 ~ 3/31)</div>
        <div className="h-2" />
        <SelectForm
          menu={SEASON_MENU}
          label="シーズン区切りを選択"
          handler={seasonSelectHandler}
        />
        <div className="h-2" />
        <Button variant="contained">更新</Button>
      </>
    </AdminMenuTemplate>
  );
};

export default SeasonSetting;
