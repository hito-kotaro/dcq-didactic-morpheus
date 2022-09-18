import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { TextField } from '@mui/material';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import MyAvatar from '../../components/atoms/MyAvatar/MyAvatar';
import useInputForm from '../../hooks/InputForm/useInputForm';
import TeamList from '../../components/mol/TeamList/TeamList';
import SplitTemplate from '../../components/templates/SplitTemplate';
import TeamManagement from '../../components/org/TeamManagement/TeamManagement';

const HomeTemplate = () => {
  const dummy = () => {
    console.log('hello');
  };
  const teamHandler = useInputForm();

  const itemList = [
    { label: '集計', icon: <InboxIcon />, action: dummy },
    { label: 'チーム/ユーザー管理', icon: <InboxIcon />, action: dummy },
    { label: 'クエストボード', icon: <InboxIcon />, action: dummy },
    { label: 'ペナルティ', icon: <InboxIcon />, action: dummy },
    { label: 'リクエスト', icon: <InboxIcon />, action: dummy },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen pt-10">
        <SideMenu itemList={itemList} />
        {/* ここで表示するコンポーネントを切り替える。 */}
        <TeamManagement />
      </div>
    </>
  );
};

export default HomeTemplate;
