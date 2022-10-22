import React, { VFC } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';
import SelectForm from '../../mol/SelectForm/SelectForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { teamDataType } from '../../../types/data/teamDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useTeamStore from '../../../stores/TeamStore/useTeamStore';

type Props = {
  penalty: penaltyDataType;
};

const PenaltyDetail: VFC<Props> = (props) => {
  const { penalty } = props;
  const teamSelectHandler = useSelectForm();
  const { teams } = useTeamStore();
  const commentHandler = useInputForm();

  const convertedSelectMenu = () => {
    return teams.map((t: teamDataType) => ({ id: t.id, label: t.name }));
  };
  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {penalty.title}
      </div>
      {penalty.title === '' ? (
        ''
      ) : (
        <div className="px-3">
          <div className="h-3" />
          <OwnerHeader
            owner={penalty.owner}
            date={penalty.date}
            reward={penalty.penalty}
            status="open"
            isPenalty
          />
          <div className="my-3">
            <Divider />
          </div>
          <div className="text-text">
            <div className="text-lg">ペナルティ詳細</div>
            <div className="h-3" />
            <div>
              <p>{penalty.description}</p>
            </div>
            <div className="my-5">
              <Divider />
            </div>
            <div className="text-lg">ペナルティをチームに付与</div>
            <SelectForm
              handler={teamSelectHandler}
              label="チームを選択"
              menu={convertedSelectMenu()}
            />
            <div className="h-5" />
            <TextField
              fullWidth
              type="text"
              // label="新しいチームの説明(任意)"
              label="ペナルティコメント(任意)"
              variant="outlined"
              onChange={commentHandler.onChange}
              value={commentHandler.value}
              multiline
              maxRows={5}
              minRows={5}
            />
            <div className="h-5" />
            <Button variant="contained">ペナルティを付与</Button>
            <div className="h-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PenaltyDetail;
