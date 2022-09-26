import { ReactElement } from 'react';

export type sideMenuDataType = {
  label: string;
  icon: ReactElement;
  action: (e: ReactElement) => void;
  component: ReactElement;
};
