import React, { VFC } from 'react';
import { Button, Divider } from '@mui/material';
import { issueDataType } from '../../../types/data/penaltyDataType';
import MyBadge from '../../atoms/MyBadge/MyBadge';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';

type Props = {
  issue: issueDataType;
  // eslint-disable-next-line no-unused-vars
  onClick: (i: issueDataType) => void;
};
const PenaltyHistoryListItem: VFC<Props> = (props) => {
  const { issue, onClick } = props;
  return (
    <>
      <Button fullWidth onClick={() => onClick(issue)}>
        <div className="w-full flex text-text p-3">
          <BoringAvatar name={issue.team} isTeam />
          <div className="ml-3 w-full">
            <div className="flex">
              <div className="text-text text-lg font-semibold text-left">
                {issue.title}
              </div>
            </div>
            <div className="h-1" />
            <div className="flex">
              <MyBadge
                content={`付与されたチーム: ${issue.team}`}
                bg="bg-rejected"
                text="text-rejected"
              />
              <div className="w-3" />
              <MyBadge
                content={` 付与日:  ${issue.created_at.substring(
                  0,
                  10,
                )} ${issue.created_at.substring(11, 16)}`}
                bg="bg-rejected"
                text="text-rejected"
              />
              <div className="w-3" />
            </div>
            <div className="my-3">
              <Divider />
            </div>
            <div className="text-left">
              <p>{issue.description}</p>
            </div>
          </div>
        </div>
      </Button>
      <Divider />
    </>
  );
};

export default PenaltyHistoryListItem;
