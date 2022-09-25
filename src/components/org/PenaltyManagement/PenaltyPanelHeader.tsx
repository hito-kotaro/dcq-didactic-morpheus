import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuButton from '../../mol/MenuButton/MenuButton';
import useMyModal from '../../mol/MyModal/useMyModal';
import PenaltyUpdate from './PenaltyUpdate';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import MyModal from '../../mol/MyModal/MyModal';

type Props = {
  penalty: penaltyDataType;
  isDetail: boolean;
  chComponent: (component: ReactElement) => void;
};
const PenaltyPanelHeader: VFC<Props> = (props) => {
  const { penalty, isDetail, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const penaltyUpdate = () => {
    chComponent(<PenaltyUpdate penalty={penalty} />);
  };
  const deletePenalty = () => {};
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ペナルティ削除', onClick: handleOpen },
    { label: 'ペナルティ更新', onClick: penaltyUpdate },
  ];

  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`「${penalty.title}」を削除しますか？`}
        subMsg="削除しても、過去のペナルティ付与履歴は保持されます。"
        positiveBtnMsg="削除"
        positiveBtnAction={deletePenalty}
      />
      <div className="flex justify-end">
        {isDetail ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          ''
        )}
      </div>
      <span className="text-2xl font-semibold text-text">ペナルティ管理</span>
    </div>
  );
};

export default PenaltyPanelHeader;
