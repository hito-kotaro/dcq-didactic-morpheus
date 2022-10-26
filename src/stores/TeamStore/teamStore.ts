import { atom } from 'recoil';
import { teamDataType } from '../../types/data/teamDataType';

export const teamState = atom<teamDataType[]>({
  key: 'TEAMS',
  default: [],
});
