import React, { useEffect, VFC } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import {
  issueRequestType,
  penaltyDataType,
} from '../../../types/data/penaltyDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';
import SelectForm from '../../mol/SelectForm/SelectForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useGlobalState from '../../../stores/useGlobalState';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';

type Props = {
  penalty: penaltyDataType;
};

const PenaltyDetail: VFC<Props> = (props) => {
  const { penalty } = props;
  const teamSelectHandler = useSelectForm();
  const { fetchAllTeams } = useTeamApi();
  const { createIssue } = usePenaltyApi();
  const { teams } = useGlobalState();
  const descHandler = useInputForm();

  useEffect(() => {
    fetchAllTeams();
  }, []);

  useEffect(() => {
    teamSelectHandler.formatSelectItem(teams);
  }, [teams]);

  const onClickCreateIssue = () => {
    const createParam: issueRequestType = {
      title: `付与済み - ${penalty.title}`,
      description: descHandler.value,
      team_id: Number(teamSelectHandler.value),
      penalty_id: penalty.id,
    };
    createIssue(createParam);
    descHandler.clear();
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
              menu={teamSelectHandler.selectItem}
            />
            <div className="h-5" />
            <TextField
              fullWidth
              type="text"
              // label="新しいチームの説明(任意)"
              label="ペナルティコメント(任意)"
              variant="outlined"
              onChange={descHandler.onChange}
              value={descHandler.value}
              multiline
              maxRows={5}
              minRows={5}
            />
            <div className="h-5" />
            <Button variant="contained" onClick={onClickCreateIssue}>
              ペナルティを付与
            </Button>
            <div className="h-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PenaltyDetail;
