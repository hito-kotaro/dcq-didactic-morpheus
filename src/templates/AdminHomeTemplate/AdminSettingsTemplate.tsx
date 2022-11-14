import React, { ReactElement, VFC } from 'react';

type Props = {
  settings: ReactElement[];
};

const AdminSettingsTemplate: VFC<Props> = (props) => {
  const { settings } = props;

  return (
    <>
      <div className="h-10" />
      {settings.map((setting: ReactElement) => setting)}
    </>
  );
};

export default AdminSettingsTemplate;
