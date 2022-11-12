import React, { useEffect, useState, VFC } from 'react';
import { Divider } from '@mui/material';
import { userDataType } from '../../../types/data/userDataType';
import { requestDataType } from '../../../types/data/requestDataType';
import useGlobalState from '../../../stores/useGlobalState';
import List from '../List';
import useList from '../List/useList';

type Props = {
  user: userDataType;
  onClick: (id: number) => void;
};
const UserDetail: VFC<Props> = (props) => {
  const { user, onClick } = props;
  const { convRequest } = useList();
  const { requests } = useGlobalState();
  const [filterd, setFilterd] = useState<requestDataType[]>([]);

  useEffect(() => {
    setFilterd(
      requests.filter((r: requestDataType) => r.applicant_id === user.id),
    );
  }, [user]);
  return (
    <div>
      <div className="text-lg text-text font-semibold text-center">
        {user.name}のアクティビティ
      </div>

      <div className="mt-3">
        <Divider />
      </div>
      <List list={convRequest(filterd)} onClick={onClick} />
    </div>
  );
};

export default UserDetail;
