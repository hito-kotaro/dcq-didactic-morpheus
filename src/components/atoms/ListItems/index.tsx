import React from 'react';
import { Button, Divider } from '@mui/material';
import UserAvatar from '../UserAvatar';

const ListItem = () => {
  const onClick = () => {};
  return (
    <Button fullWidth onClick={onClick}>
      <div className="w-full text-text flex pr-10">
        <div>
          <UserAvatar name="test" />
        </div>

        <div className="w-3 bg-red-100" />

        <div className="w-full text-left ml-2">
          <div className="text-2xl font-semibold bg-blue-100">Title</div>
          <div className="text-left">2022/01/01</div>
          <Divider />
          <div className="break-words bg-red-100">
            descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
          </div>
        </div>
      </div>
    </Button>
  );
};

export default ListItem;
