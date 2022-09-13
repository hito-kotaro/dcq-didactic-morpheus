import React from 'react';

const HomeTemplate = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-red-200 w-1/12 min-w-100">side</div>
      <div className="bg-green-200 w-4/12">MainMenu</div>
      <div className="bg-blue-200 w-7/12">MainPanel</div>
    </div>
  );
};

export default HomeTemplate;
