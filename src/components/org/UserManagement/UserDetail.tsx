import React, { useEffect, useState, VFC } from 'react';
import { Divider } from '@mui/material';
import { userDataType } from '../../../types/data/userDataType';
import ActivityList from '../ActivityList/ActivityList';
import { activityData } from '../../../testData/ActivityData';
import RequestList from '../RequestList/RequestList';
import { requestDataType } from '../../../types/data/requestDataType';
import { requests } from '../../../testData/RequestData';

type Props = {
  user: userDataType;
  onClick: (r: requestDataType) => void;
};
const UserDetail: VFC<Props> = (props) => {
  const { user, onClick } = props;
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
      {/* <ActivityList activities={activityData} /> */}
      <RequestList requests={filterd} onClick={onClick} />
    </div>
  );
};

export default UserDetail;
