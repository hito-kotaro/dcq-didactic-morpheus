import React, { VFC } from 'react';
import MyBadge from '../../atoms/MyBadge/MyBadge';
import type { badgeType } from './myBadgeType';

type Props = {
  badgeList: badgeType[];
};

const MyBadgeList: VFC<Props> = (props) => {
  const { badgeList } = props;
  return (
    <div className="flex">
      {badgeList.length >= 1
        ? badgeList.map((b: badgeType) => (
            <>
              <MyBadge content={b.content} color={b.color} />
              <div className="w-3" />
            </>
          ))
        : 'badgeなし'}
    </div>
  );
};

export default MyBadgeList;
