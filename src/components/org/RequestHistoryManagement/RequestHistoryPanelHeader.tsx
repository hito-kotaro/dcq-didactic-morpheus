import React, { VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { requestDataType } from '../../../types/data/requestDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';

type Props = {
  request: requestDataType;
  isDetail: boolean;
};

const RequestHistoryPanelHeader: VFC<Props> = (props) => {
  const { isDetail, request } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: '承認を取り消し', onClick: handleOpen },
  ];
  const deleteRequest = () => {};
  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`「${request.title}」を取り消しますか？`}
        subMsg="取り消しすると付与されたポイント分が減少します。　取り消された履歴は残ります。"
        positiveBtnMsg="承認を取り消し"
        positiveBtnAction={deleteRequest}
      />
      <div className="flex justify-end">
        {isDetail ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          <div className="h-10" />
        )}
      </div>
      <span className="text-2xl font-semibold text-text">
        リクエスト履歴管理
      </span>
    </div>
  );
};

export default RequestHistoryPanelHeader;
