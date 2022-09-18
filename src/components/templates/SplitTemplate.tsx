import React, { ReactElement, VFC } from 'react';
import MyAvatar from '../atoms/MyAvatar/MyAvatar';

type Props = {
  menuTool: ReactElement;
  menuContents: ReactElement;
};

const SplitTemplate: VFC<Props> = (props) => {
  const { menuTool, menuContents } = props;
  return (
    <div className="w-full h-full ">
      <div className="flex w-full h-full ">
        <div className=" w-1/2 bg-red-200 h-full">
          <div className=" pt-7 px-3 bg-green-500 h-1/6">
            <MyAvatar name="KOTARO" team="team" />
          </div>
          <div className="h-5/6 bg-blue-500">
            <div className="pt-3 px-3 bg-blue-400 h-1/6">{menuTool}</div>
            <div className="bg-red-200 h-5/6 overflow-y-scroll">
              {menuContents}
            </div>
          </div>
        </div>
        <div className=" w-1/2 bg-green-200 h-full">test</div>
      </div>
    </div>
  );
};

export default SplitTemplate;
