/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { VFC } from 'react';
import { requests } from '../../../testData/RequestData';
import { requestDataType } from '../../../types/data/requestDataType';
import { selectHandlerType } from '../../../types/inputHandlerType';
import SelectForm from '../SelectForm/SelectForm';
import { selectItemType } from '../SelectForm/selectItemType';

// 申請者で絞り込み
type Props = {
  handler: selectHandlerType;
};

const RequestListTool: VFC<Props> = (props) => {
  const { handler } = props;

  const requestToSelectMenu = () => {
    const applicants = requests.map((r: requestDataType) => ({
      id: r.applicant_id,
      label: r.applicant,
    }));
    const dupDel = applicants.filter((a: selectItemType, i, self) => {
      const tmp = self.map((item: selectItemType) => item.id);
      if (tmp.indexOf(a.id) === i) {
        return a;
      }
    });

    return [{ id: 0, label: 'all' }, ...dupDel];
  };

  return (
    <div className="flex">
      <div className="w-4/6">
        <SelectForm
          label="申請者名で絞り込み"
          handler={handler}
          menu={requestToSelectMenu()}
        />
      </div>
    </div>
  );
};

export default RequestListTool;
