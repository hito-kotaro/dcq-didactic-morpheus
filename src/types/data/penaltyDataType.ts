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

export type assignedPenaltyDateType = {
  id: number;
  p_id: number;
  title: string;
  p_title: string;
  p_desciription: string;
  penalty: number;
  date: string;
  team: string;
  team_id: number;
  owner: string;
  owner_id: number;
  comment?: string;
  authorizer: string;
  authorizer_id: number;
};
