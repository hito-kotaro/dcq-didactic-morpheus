import React, { ReactElement, VFC } from 'react';

type Props = {
  title: string;
  children: ReactElement;
};
const AdminMenuTemplate: VFC<Props> = (props) => {
  const { title, children } = props;
  return (
    <div className="text-text">
      <div className="font-semibold">{title}</div>
      {children}
    </div>
  );
};

export default AdminMenuTemplate;
