import React, { ReactElement, VFC } from 'react';
import AdminHomeHeader from '../../components/org/AdminHomeHeader/AdminHomeHeader';

type Props = {
  settings: ReactElement[];
};

const AdminHomeTemplate: VFC<Props> = (props) => {
  const { settings } = props;
  return (
    <div className="flex h-screen ">
      <div className="border-x-1 w-1/12 min-w-100">side</div>
      <div className=" w-11/12 overflow-y-scroll">
        <div className="w-4/5 mx-auto">
          <div className="h-10" />
          <AdminHomeHeader />
          <div className="h-10" />
          <div className="rounded-lg border-1 py-3 px-1">
            {settings.map((setting: ReactElement) => setting)}
          </div>
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

export default AdminHomeTemplate;
