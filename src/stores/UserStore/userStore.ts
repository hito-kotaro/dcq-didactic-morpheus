import { atom } from 'recoil';
import { userDataType } from '../../types/data/userDataType';

export const userState = atom<userDataType[]>({
  key: 'TEAMS',
  default: [],
});
