export type penaltyDataType = {
  id: number;
  title: string;
  description: string;
  penalty: number;
  date: string;
  owner: string;
  owner_id: number;
  comment?: string;
};

export type penaltyRequestType = {
  title: string;
  description: string;
  point: number;
};

export type issueRequestType = {
  title: string;
  description: string;
  team_id: number;
  penalty_id: number;
};

export type issueDataType = {
  id: number;
  title: string;
  description: string;
  point: number;
  authorizer: string;
  team_id: number;
  team: string;
  penalty_title: string;
  penalty_description: string;
  penalty_updated_at: string;
  created_at: string;
  updated_at: string;
};

export const emptyIssue: issueDataType = {
  id: 0,
  title: '',
  description: '',
  point: 0,
  authorizer: '',
  team_id: 0,
  team: '',
  penalty_title: '',
  penalty_description: '',
  penalty_updated_at: '',
  created_at: '',
  updated_at: '',
};

// export type assignedPenaltyDateType = {
//   id: number;
//   p_id: number;
//   title: string;
//   p_title: string;
//   p_desciription: string;
//   penalty: number;
//   date: string;
//   team: string;
//   team_id: number;
//   owner: string;
//   owner_id: number;
//   comment?: string;
//   authorizer: string;
//   authorizer_id: number;
// };
