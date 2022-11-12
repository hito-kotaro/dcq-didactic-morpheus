import { Typography } from '@mui/material';
import React from 'react';

const AdminHomeHeader = () => {
  return (
    <div className="flex font-mono">
      <div className=" border-l-4 border-primary pl-3">
        <Typography variant="h4">
          {localStorage.getItem('tenant_name')}
        </Typography>
      </div>
    </div>
  );
};

export default AdminHomeHeader;
