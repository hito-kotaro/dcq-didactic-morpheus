import React, { VFC } from 'react';
import ActivityListItem from '../../mol/ActivityListItem/ActivityListItem';
import { activityListItemType } from '../../mol/ActivityListItem/activityListItemType';

type Props = { activities: activityListItemType[] };
const ActivityList: VFC<Props> = (props) => {
  const { activities } = props;
  return (
    <>
      {activities.map((a: activityListItemType) => (
        <ActivityListItem activity={a} />
      ))}
    </>
  );
};

export default ActivityList;
