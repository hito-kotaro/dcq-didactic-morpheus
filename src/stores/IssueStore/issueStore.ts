import { atom } from 'recoil';
import { issueDataType } from '../../types/data/penaltyDataType';

export const issueState = atom<issueDataType[]>({
  key: 'ISSUE',
  default: [],
});
