import React, { VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';

type Props = {
  penalty: assignedPenaltyDateType;
  isDetail: boolean;
};

const PenaltyHistoryPanelHeader: VFC<Props> = (props) => {
  const { penalty, isDetail } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ペナルティを取り消し', onClick: handleOpen },
  ];

  const deletePenalty = () => {};

  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`「${penalty.title}」を取り消しますか？`}
        subMsg="取り消すると付与されたペナルティポイントは減少します。　取り消された履歴は残ります。"
        positiveBtnMsg="承認を取り消し"
        positiveBtnAction={deletePenalty}
      />
      <div className="flex justify-end">
        {isDetail ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          <div className="h-10" />
        )}
      </div>
      <span className="text-2xl font-semibold text-text">
        ペナルティ付与履歴管理
      </span>
    </div>
  );
};

export default PenaltyHistoryPanelHeader;
