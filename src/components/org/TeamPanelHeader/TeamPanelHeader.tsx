/* eslint-disable no-nested-ternary */
import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { teamDataType } from '../../../types/data/teamDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';
import UpdateTeam from '../TeamManagement/UpdateTeam';

type Props = {
  team: teamDataType;
  chComponent: (component: ReactElement) => void;
};

const TeamPanelHeader: VFC<Props> = (props) => {
  const { team, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();

  const teamUpdate = () => {
    chComponent(<UpdateTeam team={team} />);
  };
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'チームを削除', onClick: handleOpen },
    { label: 'チーム情報を更新', onClick: teamUpdate },
  ];

  const deleteTeam = () => {
    console.log(`delete ${team.name}`);
    handleClose();
  };

  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${team.name}を削除しますか？`}
        subMsg="グループに所属しているメンバーがいる場合は他のグループに移動してから削除してください。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteTeam}
      />

      <span className="text-2xl font-semibold text-text">チーム管理</span>
      <div className="flex justify-end">
        {team.name !== '' ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TeamPanelHeader;
