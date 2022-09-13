import { Button, TextField } from '@mui/material';
import React from 'react';
import CreateUserForm from '../../components/mol/AdminMenu/CreateUserForm';
import AdminHomeHeader from '../../components/org/AdminHomeHeader/AdminHomeHeader';

const AdminHomeTemplate = () => {
  return (
    <div className="flex h-screen">
      <div className="border-x-1 w-1/12 min-w-100">side</div>
      <div className=" w-11/12">
        <div className="w-2/3 mx-auto">
          <div className="h-10" />
          <AdminHomeHeader />
          <div className="h-10" />
          <div className="bg-green-50 rounded-lg border-1">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeTemplate;
