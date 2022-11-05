/* eslint-disable no-nested-ternary */
import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { teamDataType } from '../../../types/data/teamDataType';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MyModal from '../../atoms/MyModal/MyModal';
import useMyModal from '../../atoms/MyModal/useMyModal';
import UpdateTeam from '../../org/TeamManagement/UpdateTeam';

type Props = {
  // teamName: string;
  chComponent: (component: ReactElement) => void;
};

const TeamPanelHeader: VFC<Props> = (props) => {
  const { chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();

  const teamUpdate = () => {
    chComponent(<UpdateTeam />);
  };
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'チームを削除', onClick: handleOpen },
    { label: 'チーム情報を更新', onClick: teamUpdate },
  ];

  const deleteTeam = () => {
    handleClose();
  };

  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg="チームを削除しますか？"
        subMsg="グループに所属しているメンバーがいる場合は他のグループに移動してから削除してください。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteTeam}
      />

      <span className="text-2xl font-semibold text-text">チームメンバ一覧</span>
      <div className="flex justify-end">
        <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
      </div>
    </div>
  );
};

export default TeamPanelHeader;
