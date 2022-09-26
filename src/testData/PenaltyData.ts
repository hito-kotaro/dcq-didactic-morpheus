import {
  assignedPenaltyDateType,
  penaltyDataType,
} from '../types/data/penaltyDataType';

export const assinedPenalty: assignedPenaltyDateType[] = [
  {
    id: 1,
    p_id: 1,
    title: '月報未提出-付与',
    p_title: '月報未提出',
    p_desciription:
      '月報の提出期限は、対象月の最終営業日〜翌月1日までのため、翌月1日の24:00時点で提出が行われていないメンバーを対象とする。※対象月が休業扱いの場合を除く',
    penalty: 10,
    date: '2022/01/01',
    team: 'teamA',
    team_id: 1,
    owner: '佐藤',
    owner_id: 1,
    authorizer: '佐藤',
    authorizer_id: 1,
    comment: '未提出',
  },
  {
    id: 2,
    p_id: 1,
    title: '月報未提出-付与',
    p_title: '月報未提出',
    p_desciription:
      '月報の提出期限は、対象月の最終営業日〜翌月1日までのため、翌月1日の24:00時点で提出が行われていないメンバーを対象とする。※対象月が休業扱いの場合を除く',
    penalty: 10,
    date: '2022/01/01',
    team: 'teamA',
    team_id: 1,
    owner: '佐藤',
    owner_id: 1,
    comment: '未提出',
    authorizer: '佐藤',
    authorizer_id: 1,
  },
  {
    id: 3,
    p_id: 1,
    title: '月報未提出-付与',
    p_title: '月報未提出',
    p_desciription:
      '月報の提出期限は、対象月の最終営業日〜翌月1日までのため、翌月1日の24:00時点で提出が行われていないメンバーを対象とする。※対象月が休業扱いの場合を除く',
    penalty: 10,
    date: '2022/01/01',
    team: 'teamA',
    team_id: 1,
    owner: '佐藤',
    owner_id: 1,
    comment: '未提出',
    authorizer: '佐藤',
    authorizer_id: 1,
  },
  {
    id: 4,
    p_id: 1,
    title: '月報未提出-付与',
    p_title: '月報未提出',
    p_desciription:
      '月報の提出期限は、対象月の最終営業日〜翌月1日までのため、翌月1日の24:00時点で提出が行われていないメンバーを対象とする。※対象月が休業扱いの場合を除く',
    penalty: 10,
    date: '2022/01/01',
    team: 'teamA',
    team_id: 1,
    owner: '佐藤',
    owner_id: 1,
    comment: '未提出',
    authorizer: '佐藤',
    authorizer_id: 1,
  },
];

export const penalties: penaltyDataType[] = [
  {
    id: 1,
    title: '月報未提出',
    description:
      '月報の提出期限は、対象月の最終営業日〜翌月1日までのため、翌月1日の24:00時点で提出が行われていないメンバーを対象とする。※対象月が休業扱いの場合を除く',
    penalty: 10,
    date: '2022/01/01',
    owner: '佐藤',
    owner_id: 1,
  },
  {
    id: 2,
    title: '無断遅刻/欠勤',
    description:
      '勤怠用のLINEに対し連絡無く遅刻 / 欠勤をした場合（事後報告含む）',
    penalty: 10,
    date: '2022/01/01',
    owner: '佐藤',
    owner_id: 1,
  },
  {
    id: 3,
    title: '飲み会翌日欠勤・遅刻',
    description:
      '平日中日などに実施される飲み会やイベント等でお酒を摂取した翌日の体調不良による遅刻・欠勤があった場合',
    penalty: 10,
    date: '2022/01/01',
    owner: '佐藤',
    owner_id: 1,
  },
  {
    id: 3,
    title: 'twitterフォロワー購入',
    description: 'フォロワーを購入する',
    penalty: 1000,
    date: '2022/01/01',
    owner: '佐藤',
    owner_id: 1,
  },
];
