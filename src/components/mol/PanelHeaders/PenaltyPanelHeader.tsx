import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import useMyModal from '../../atoms/MyModal/useMyModal';
import PenaltyUpdate from '../../org/PenaltyManagement/PenaltyUpdate';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import MyModal from '../../atoms/MyModal/MyModal';

type Props = {
  penalty: penaltyDataType;
  // eslint-disable-next-line no-unused-vars
  chComponent: (component: ReactElement) => void;
};
const PenaltyPanelHeader: VFC<Props> = (props) => {
  const { penalty, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const penaltyUpdate = () => {
    chComponent(<PenaltyUpdate penalty={penalty} chComponent={chComponent} />);
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
        {penalty ? (
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
