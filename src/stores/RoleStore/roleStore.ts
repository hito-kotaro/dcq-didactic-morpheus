import { atom } from 'recoil';
import { roleDataType } from '../../types/data/roleDataType';

export const roleState = atom<roleDataType[]>({
  key: 'ROLES',
  default: [],
});
