import React, { VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MyModal from '../../atoms/MyModal/MyModal';
import useMyModal from '../../atoms/MyModal/useMyModal';
import { issueDataType } from '../../../types/data/penaltyDataType';

type Props = {
  issue: issueDataType;
  isDetail: boolean;
};

const PenaltyHistoryPanelHeader: VFC<Props> = (props) => {
  const { issue, isDetail } = props;
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
        mainMsg={`「${issue.title}」を取り消しますか？`}
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
