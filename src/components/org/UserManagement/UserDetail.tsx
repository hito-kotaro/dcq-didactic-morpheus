import React, { VFC } from 'react';
import { Divider } from '@mui/material';
import { userDataType } from '../../../types/data/userDataType';
import ActivityList from '../ActivityList/ActivityList';
import { activityData } from '../../../testData/ActivityData';

type Props = {
  user: userDataType;
};
const UserDetail: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <div>
      <div className="text-lg text-text font-semibold text-center">
        {user.name}のアクティビティ
      </div>

      <div className="mt-3">
        <Divider />
      </div>
      <ActivityList activities={activityData} />
    </div>
  );
};

export default UserDetail;
