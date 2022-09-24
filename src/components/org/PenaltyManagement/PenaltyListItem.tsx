import { Button, Avatar, Divider } from '@mui/material';
import React, { VFC } from 'react';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import PenaltyIcon from '../../atoms/Icons/PenaltyIcon';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';

type Props = {
  penalty: penaltyDataType;
  onClick: (p: penaltyDataType) => void;
};
const PenaltyListItem: VFC<Props> = (props) => {
  const { penalty, onClick } = props;
  return (
    <>
      <Button fullWidth onClick={() => onClick(penalty)}>
        <div className="w-full flex text-text p-3">
          <Avatar />
          <div className="ml-3 w-full">
            <div className="text-text text-lg font-semibold text-left">
              {penalty.title}
            </div>
            <div className="flex">
              <div>{penalty.date}</div>
              <div className="ml-auto">
                <ScoreIcon
                  icon={<PenaltyIcon size="sm" />}
                  score={penalty.penalty}
                />
                {/* <MyBadge
                  bg="bg-open"
                  text="text-open"
                  content={String(quest.reward)}
                /> */}
              </div>
            </div>
            <div className="text-left">
              <p>{penalty.description}</p>
            </div>
          </div>
        </div>
      </Button>
      <Divider />
    </>
  );
};

export default PenaltyListItem;
