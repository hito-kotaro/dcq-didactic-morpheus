import { Divider } from '@mui/material';
import React, { ReactElement, VFC } from 'react';
import MyAvatar from '../atoms/MyAvatar/MyAvatar';

type Props = {
  menuTool: ReactElement;
  menuContents: ReactElement;
  mainHeader: ReactElement;
  mainContents: ReactElement;
};

const SplitTemplate: VFC<Props> = (props) => {
  const { menuTool, menuContents, mainHeader, mainContents } = props;
  return (
    <div className="w-full h-full ">
      <div className="flex w-full h-full ">
        <div className=" w-1/2 h-full">
          <div className=" pt-7 px-3  h-1/6">
            <MyAvatar name="KOTARO" team="team" />
          </div>
          <Divider />
          <div className="h-5/6 ">
            <div className="pt-3 px-3  h-1/6">{menuTool}</div>
            <Divider />
            <div className=" h-5/6 overflow-y-scroll">{menuContents}</div>
          </div>
        </div>
        <div className=" w-1/2  h-full">
          {/* Main Panel Header */}
          {mainHeader}
          <Divider />

          <div className="h-5/6 pt-3 overflow-y-scroll">
            {/* Main Panel Contents */}
            {mainContents}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitTemplate;
