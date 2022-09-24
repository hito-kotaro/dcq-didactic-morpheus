import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { questDataType } from '../../../types/data/questDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';
import QuestUpdate from './QuestUpdate';

type Props = {
  quest: questDataType;
  chComponent: (component: ReactElement) => void;
  isDetail: boolean;
};

const QuestPanelHeader: VFC<Props> = (props) => {
  const { isDetail, quest, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();

  const dummy = () => {
    console.log('hello');
  };

  const questUpdate = () => {
    chComponent(<QuestUpdate quest={quest} />);
  };

  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'クエストを削除', onClick: handleOpen },
    { label: 'クエストを更新', onClick: questUpdate },
  ];

  const deleteQuest = () => {
    console.log('delete');
  };
  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${quest.title}を削除しますか？`}
        subMsg="削除しても、過去のクエスト達成履歴は保持されます。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteQuest}
      />
      <div className="flex justify-end">
        {isDetail ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          ''
        )}
      </div>
      <span className="text-2xl font-semibold text-text">クエスト管理</span>
    </div>
  );
};

export default QuestPanelHeader;
