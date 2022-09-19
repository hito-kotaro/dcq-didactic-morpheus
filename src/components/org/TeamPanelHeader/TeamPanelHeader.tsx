/* eslint-disable no-nested-ternary */
import React, { VFC } from 'react';
import { teamDataType } from '../../../types/data/teamDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';

type Props = {
  team: teamDataType;
  toggleUpdate: () => void;
  isUpdate: boolean;
};

const TeamPanelHeader: VFC<Props> = (props) => {
  const { isUpdate, team, toggleUpdate } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const dummy = () => {
    console.log('hello');
  };
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'チームを削除', onClick: handleOpen },
    { label: 'チーム情報を更新', onClick: toggleUpdate },
  ];

  const deleteTeam = () => {
    console.log(`delete ${team.name}`);
    handleClose();
  };

  return (
    <div>
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${team.name}を削除しますか？`}
        subMsg="グループに所属しているメンバーがいる場合は他のグループに移動してから削除してください。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteTeam}
      />
      <span className="text-2xl font-semibold">
        {isUpdate
          ? `${team.name}を更新`
          : team.name !== ''
          ? team.name
          : 'チームを選択してください'}
      </span>
      <div className="flex justify-end">
        {team.name !== '' ? <MenuButton menuItems={menuItems} /> : ''}
      </div>
    </div>
  );
};

export default TeamPanelHeader;
