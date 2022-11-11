import { atom } from 'recoil';

export const isMobileState = atom<boolean>({
  key: 'IS_MOBILE',
  default: false,
});
