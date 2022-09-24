import React, { VFC } from 'react';
import { Avatar, Button } from '@mui/material';
import MyBadgeList from '../MyBadgeList/MyBadgeList';
import { activityListItemType } from './activityListItemType';

type Props = {
  activity: activityListItemType;
};

const ActivityListItem: VFC<Props> = (props) => {
  const { activity } = props;
  return (
    <Button fullWidth>
      <div className="w-full px-3 border-b-1 mt-3">
        <div>
          <div className="flex">
            <Avatar />
            <div className="w-5" />

            <div className="w-full">
              <div className="text-text font-semibold text-lg text-left">
                Activity
              </div>
              <div className="flex">
                <div className="text-text">{activity.date}</div>
                <div className="ml-auto">
                  <MyBadgeList
                    badgeList={[
                      {
                        bg: 'bg-open',
                        text: 'text-open',
                        content: activity.status,
                      },
                      // {
                      //   bg: 'bg-open',
                      //   text: 'text-open',
                      //   content: String(activity.reward),
                      // },
                    ]}
                  />
                </div>
              </div>
              <div className="h-3" />
              <div className="text-left text-text">
                <p>{activity.description}</p>
              </div>
              <div className="h-3" />
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default ActivityListItem;
