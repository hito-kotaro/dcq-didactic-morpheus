import React, { VFC } from 'react';
import { Divider } from '@mui/material';
import UserListItem from '../../mol/UserListItem/UserListItem';
import { userDataType } from '../../../types/data/userDataType';

type Props = {
  users: userDataType[];
};

const UserList: VFC<Props> = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((u: userDataType) => (
        <div key={u.id}>
          <UserListItem name={u.name} team={u.team} score={u.point} />
          <div className="my-3">
            <Divider />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
