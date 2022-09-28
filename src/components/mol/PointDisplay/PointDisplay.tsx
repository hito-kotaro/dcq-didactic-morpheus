import React, { ReactElement, VFC } from 'react';

type Props = {
  icon: ReactElement;
  msg: string;
  point: number;
};
const PointDisplay: VFC<Props> = (props) => {
  const { icon, msg, point } = props;
  return (
    <div className="w-4/12 p-3 ">
      <div className="border-1 w-full h-full rounded-md p-2 text-text font-semibold">
        <div>{msg}</div>
        <div className="h-2" />
        <div className="flex">
          {icon}
          <div className=" text-5xl ml-auto">{point}</div>
        </div>
      </div>
    </div>
  );
};

export default PointDisplay;
