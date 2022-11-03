import React from 'react';
import useLoginApi from '../../../hooks/Api/useLoginApi';
import DoIcon from '../../atoms/Icons/DoIcon';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const Header = () => {
  const { logout } = useLoginApi();
  const dummy = () => {};
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ログアウト', onClick: logout },
    { label: 'ユーザ情報変更', onClick: dummy },
  ];

  return (
    <div className="w-full bg-h_base fixed text-h_text z-1300 p-1 flex">
      <DoIcon />
      <div className="ml-auto mr-5">
        <MenuButton
          menuItems={menuItems}
          icon={<BoringAvatar name="佐藤" />}
          isHeaderMenu
        />
      </div>
    </div>
  );
};

export default Header;
