import { selectItemType } from '../components/mol/SelectForm/selectItemType';

export const MOBILE_WIDTH_MAX_LIMIT = 1000;

export const SEASON_MENU: selectItemType[] = [
  { id: 1, label: '年度半年(4/1 ~ 9/30  /  10/1  ~ 3/31)' },
  {
    id: 2,
    label: '年度3ヶ月(4/1 ~ 6/30  :  7/1  ~ 9/30 : 10/1 ~ 12/31 : 1/1 ~ 3/31)',
  },
  { id: 3, label: '半年(1/1 ~ 6/30  : 7/1  ~ 12/31)' },
  {
    id: 4,
    label: '3ヶ月(1/1 ~ 3/31  : 4/1  ~ 6/30 :  7/1 ~ 9/30 : 10/1 ~ 12/31 )',
  },
  { id: 5, label: '1ヶ月' },
];
