import { atom } from 'recoil';
import { questDataType } from '../../types/data/questDataType';

export const questState = atom<questDataType[]>({
  key: 'QUEST',
  default: [],
});
