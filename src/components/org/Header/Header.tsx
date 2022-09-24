import { Avatar } from '@mui/material';
import React from 'react';
import DoIcon from '../../atoms/Icons/DoIcon';
import MenuButton from '../../mol/MenuButton/MenuButton';

const Header = () => {
  const dummy = () => {};
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ログアウト', onClick: dummy },
    { label: 'ユーザ情報変更', onClick: dummy },
  ];

  return (
    <div className="w-full bg-h_base fixed text-h_text z-1300 p-1 flex">
      <DoIcon />
      <div className="ml-auto mr-5">
        <MenuButton menuItems={menuItems} icon={<Avatar />} />
      </div>
    </div>
  );
};

export default Header;
