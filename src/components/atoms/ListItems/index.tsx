import React, { VFC } from 'react';
import { Button, Divider } from '@mui/material';
import UserAvatar from '../UserAvatar';
import MyBadgeList from '../MyBadge/MyBadgeList';
import { badgeType } from '../MyBadge/myBadgeType';

type Props = {
  title: string;
  avatar: string;
  description: string;
  date: string;
  badgeList?: badgeType[];
  onClick: () => void;
};
const ListItem: VFC<Props> = (props) => {
  const { avatar, title, description, date, badgeList, onClick } = props;
  return (
    <Button fullWidth onClick={onClick}>
      <div className="w-full text-text flex py-1">
        <div>
          <UserAvatar name={avatar} />
        </div>

        <div className="w-3" />

        <div className="w-full text-left ml-2">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="text-left">{date}</div>
          <Divider />
          <div className="h-3" />
          <div className="flex justify-end">
            {badgeList ? <MyBadgeList badgeList={badgeList} /> : ''}
          </div>
          <div className="break-words">{description}</div>
        </div>
      </div>
    </Button>
  );
};

export default ListItem;
