import { atom } from 'recoil';
import { requestDataType } from '../../types/data/requestDataType';

export const requestState = atom<requestDataType[]>({
  key: 'REQUEST',
  default: [],
});
