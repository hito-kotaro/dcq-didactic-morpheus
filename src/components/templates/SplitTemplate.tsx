import React, { ReactElement, VFC } from 'react';

type Props = {
  menuHeader: ReactElement;
  menuTool: ReactElement;
  menuContents: ReactElement;
  mainHeader: ReactElement;
  mainContents: ReactElement;
};

const SplitTemplate: VFC<Props> = (props) => {
  const { menuHeader, menuTool, menuContents, mainHeader, mainContents } =
    props;
  return (
    <div className="w-full h-full ">
      <div className="flex w-full h-full ">
        <div className=" w-1/2 h-full">
          <div className=" pt-7 px-3  h-1/6 border-b-1">
            {/* Menu Header */}
            {menuHeader}
          </div>
          <div className="h-5/6 ">
            <div className="pt-3 px-3  h-1/6 border-b-1">{menuTool}</div>
            <div className=" h-5/6 overflow-y-scroll">{menuContents}</div>
          </div>
        </div>
        <div className=" w-1/2  border-l-1 h-full ">
          <div className="h-1/6 border-b-1">
            {/* Main Panel Header */}
            {mainHeader}
          </div>
          {/* <Divider /> */}

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
