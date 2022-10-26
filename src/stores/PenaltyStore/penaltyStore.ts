import { atom } from 'recoil';
import { penaltyDataType } from '../../types/data/penaltyDataType';

export const penaltyState = atom<penaltyDataType[]>({
  key: 'PENALTY',
  default: [],
});
