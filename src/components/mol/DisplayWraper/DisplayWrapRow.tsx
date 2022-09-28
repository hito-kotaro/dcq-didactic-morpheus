import React, { ReactElement, VFC } from 'react';

type Props = {
  displays: ReactElement[];
};

const DisplayWrapRow: VFC<Props> = (props) => {
  const { displays } = props;

  return (
    <div className="flex justify-between">
      {displays.map((d: ReactElement) => d)}
    </div>
  );
};

export default DisplayWrapRow;
