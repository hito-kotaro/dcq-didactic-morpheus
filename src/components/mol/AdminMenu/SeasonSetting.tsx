import React from 'react';
import { Button } from '@mui/material';
import SelectForm from '../SelectForm/SelectForm';
import { selectMenuType } from '../SelectForm/selectItemType';

const SeasonSetting = () => {
  const menus: selectMenuType[] = [
    { id: 1, label: '年度半年(4/1 ~ 9/30  /  10/1  ~ 3/31)' },
    {
      id: 2,
      label:
        '年度3ヶ月(4/1 ~ 6/30  :  7/1  ~ 9/30 : 10/1 ~ 12/31 : 1/1 ~ 3/31)',
    },
    { id: 3, label: '半年(1/1 ~ 6/30  : 7/1  ~ 12/31)' },
    {
      id: 4,
      label: '3ヶ月(1/1 ~ 3/31  : 4/1  ~ 6/30 :  7/1 ~ 9/30 : 10/1 ~ 12/31 )',
    },
    { id: 5, label: '1ヶ月' },
  ];

  return (
    <div className="flex">
      <div className="w-1/2">シーズン設定</div>
      <div className="w-1/2">
        <div className="font-semibold">現在の連携先ID</div>
        <div className="text-text">年度半年(4/1 ~ 9/30 / 10/1 ~ 3/31)</div>
        <div className="h-2" />
        <SelectForm menu={menus} label="シーズン区切りを選択" />
        <div className="h-2" />
        <Button variant="contained">更新</Button>
      </div>
    </div>
  );
};

export default SeasonSetting;
