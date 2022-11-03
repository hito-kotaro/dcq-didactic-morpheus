import React, { VFC } from 'react';
import { Button, Divider } from '@mui/material';
import { questDataType } from '../../../types/data/questDataType';
import DcpIcon from '../Icons/DcpIcon';
import ScoreIcon from '../ScoreIcon/ScoreIcon';
import BoringAvatar from '../MyAvatar/BoringAvatar';

type Props = {
  quest: questDataType;
  onClick: (q: questDataType) => void;
};

const QuestListItem: VFC<Props> = (props) => {
  const { quest, onClick } = props;

  return (
    <>
      <Button fullWidth onClick={() => onClick(quest)}>
        <div className="w-full flex text-text p-3">
          <BoringAvatar name={quest.owner} />
          <div className="ml-3 w-full">
            <div className="text-text text-lg font-semibold text-left">
              {quest.title}
            </div>
            <div className="flex">
              <div>{quest.date}</div>
              <div className="ml-auto">
                <ScoreIcon icon={<DcpIcon size="sm" />} score={quest.reward} />
                {/* <MyBadge
                  bg="bg-open"
                  text="text-open"
                  content={String(quest.reward)}
                /> */}
              </div>
            </div>
            <div className="text-left">
              <p>{quest.description}</p>
            </div>
          </div>
        </div>
      </Button>
      <Divider />
    </>
  );
};

export default QuestListItem;
