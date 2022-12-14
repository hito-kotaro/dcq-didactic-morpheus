import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { questDataType } from '../../../types/data/questDataType';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MyModal from '../../atoms/MyModal/MyModal';
import useMyModal from '../../atoms/MyModal/useMyModal';
import QuestUpdate from '../../org/Managements/QuestManagement/QuestUpdate';

type Props = {
  quest: questDataType;
  // eslint-disable-next-line no-unused-vars
  chComponent: (component: ReactElement) => void;
};

const QuestPanelHeader: VFC<Props> = (props) => {
  const { quest, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();

  const questUpdate = () => {
    chComponent(<QuestUpdate quest={quest} />);
  };

  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'クエストを削除', onClick: handleOpen },
    { label: 'クエストを更新', onClick: questUpdate },
  ];

  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${quest.title}を削除しますか？`}
        subMsg="削除しても、過去のクエスト達成履歴は保持されます。"
        positiveBtnMsg="削除"
        positiveBtnAction={() => {}}
      />
      <div className="flex justify-end">
        <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
      </div>
      <span className="text-2xl font-semibold text-text">クエスト管理</span>
    </div>
  );
};

export default QuestPanelHeader;
