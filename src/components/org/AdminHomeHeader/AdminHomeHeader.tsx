import { Typography } from '@mui/material';
import React from 'react';

const AdminHomeHeader = () => {
  return (
    <div className="flex font-mono">
      <div id="icon-tmp" className="h-16 w-16 rounded-md bg-orange-400" />
      <div className="w-10" />
      <div className="">
        <Typography variant="h4">Luxy</Typography>
        <div className="flex">
          <div className="h-5 leading-5 text-lg font-semibold">TennantID:</div>
          <div className="h-5 leading-5 text-text">
            tekitounaaidexi-wokokoniiremasu
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeHeader;
