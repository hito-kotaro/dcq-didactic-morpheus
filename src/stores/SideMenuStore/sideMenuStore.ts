import { atom } from 'recoil';

export const sideMenuState = atom<boolean>({
  key: 'SIDEMENU',
  default: false,
});
