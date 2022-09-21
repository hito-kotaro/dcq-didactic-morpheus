import React, { VFC } from 'react';
import { userDataType } from '../../../types/data/userDataType';

type Props = {
  user: userDataType;
};
const UserDetail: VFC<Props> = (props) => {
  const { user } = props;
  return <div>{user.name}</div>;
};

export default UserDetail;
