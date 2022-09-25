import React, { VFC } from 'react';
import { teams } from '../../../testData/TeamData';
import { teamDataType } from '../../../types/data/teamDataType';
import { selectHandlerType } from '../../../types/inputHandlerType';
import SelectForm from '../../mol/SelectForm/SelectForm';

type Props = {
  teamSelectHandler: selectHandlerType;
};
const PenaltyHistoryMenuTool: VFC<Props> = (props) => {
  const { teamSelectHandler } = props;
  const teamToSelectMenu = () => {
    const tmp = teams.map((t: teamDataType) => ({ id: t.id, label: t.name }));
    return [{ id: 0, label: 'all' }, ...tmp];
  };

  return (
    <div className="flex w-full">
      <div className="w-full">
        <SelectForm
          label="チーム名で絞り込み"
          handler={teamSelectHandler}
          menu={teamToSelectMenu()}
        />
      </div>
    </div>
  );
};

export default PenaltyHistoryMenuTool;
