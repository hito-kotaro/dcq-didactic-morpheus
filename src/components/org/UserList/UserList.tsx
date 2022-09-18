import React, { VFC } from 'react';
import { Divider } from '@mui/material';
import UserListItem from '../../mol/UserListItem/UserListItem';
import { userData } from '../../../types/data/userDataType';

type Props = {
  users: userData[];
};

const UserList: VFC<Props> = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((u: any) => (
        <>
          <UserListItem name={u.name} team={u.team_id} score={u.point} />
          <div className="my-3">
            <Divider />
          </div>
        </>
      ))}
    </div>
  );
};

export default UserList;
