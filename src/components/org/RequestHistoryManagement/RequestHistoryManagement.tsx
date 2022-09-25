import React from 'react';
import SplitTemplate from '../../templates/SplitTemplate';

const RequestHistoryManagement = () => {
  return (
    <SplitTemplate
      menuHeader={<div>menu header</div>}
      menuTool={<div>menu tool</div>}
      menuContents={<div>manu contents</div>}
      mainHeader={<div>main header</div>}
      mainContents={<div>main contents</div>}
    />
  );
};

export default RequestHistoryManagement;
