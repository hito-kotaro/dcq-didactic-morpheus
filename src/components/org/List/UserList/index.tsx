import React, { VFC } from 'react';
import { Divider } from '@mui/material';
import UserListItem from '../../../atoms/ListItems/UserListItem';
import { userDataType } from '../../../../types/data/userDataType';

type Props = {
  users: userDataType[];
  onClick: (u: userDataType) => void;
};

const UserList: VFC<Props> = (props) => {
  const { users, onClick } = props;
  console.log(users);
  return (
    <div>
      {users.map((u: userDataType) => (
        <div key={u.id}>
          <UserListItem user={u} onClick={onClick} />
          <div className="my-3">
            <Divider />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;