import React, { VFC } from 'react';
import { Button } from '@mui/material';
import ScoreIcon from '../ScoreIcon/ScoreIcon';
import { userDataType } from '../../../types/data/userDataType';
import DcpIcon from '../Icons/DcpIcon';
import { badgeType } from '../MyBadge/myBadgeType';
import MyBadgeList from '../MyBadge/MyBadgeList';
import BoringAvatar from '../MyAvatar/BoringAvatar';

type Props = {
  user: userDataType;
  onClick: (u: userDataType) => void;
};

const UserListItem: VFC<Props> = (props) => {
  const { user, onClick } = props;
  const badgeList: badgeType[] = [{ bg: '', text: '', content: user.role }];
  return (
    <Button fullWidth onClick={() => onClick(user)}>
      <div className="w-full">
        <div className="flex px-3">
          <div>
            <BoringAvatar name={user.name} />
          </div>
          <div className="w-3" />
          <div className="w-full">
            <div className="flex">
              <div className="text-text text-lg font-semibold">{`${user.name} @ ${user.team}`}</div>
              <div className="ml-auto">
                <ScoreIcon icon={<DcpIcon size="sm" />} score={user.point} />
              </div>
            </div>
            <div className="h-1" />
            <MyBadgeList badgeList={badgeList} />
          </div>
        </div>
      </div>
    </Button>
  );
};

export default UserListItem;
