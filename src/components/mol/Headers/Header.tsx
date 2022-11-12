import React from 'react';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useLoginApi from '../../../hooks/Api/useLoginApi';
import DoIcon from '../../atoms/Icons/DoIcon';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import useSidemenuState from '../../../stores/SideMenuStore/useSidemenuState';

const Header = () => {
  const { logout } = useLoginApi();
  const dummy = () => {};
  const { toggle } = useSidemenuState();
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ログアウト', onClick: logout },
    { label: 'ユーザ情報変更', onClick: dummy },
  ];

  return (
    <div className="w-full bg-h_base fixed text-h_text z-1300 p-1 flex">
      <DoIcon />
      <div>
        <Button onClick={toggle}>
          <MenuIcon />
        </Button>
      </div>
      <div className="ml-auto mr-5">
        <MenuButton
          menuItems={menuItems}
          icon={<BoringAvatar name={localStorage.getItem('name') ?? ''} />}
          isHeaderMenu
        />
      </div>
    </div>
  );
};

export default Header;
