export type penaltyDataType = {
  id: number;
  title: string;
  description: string;
  penalty: number;
  date: string;
  owner: string;
  owner_id: number;
};

export type assignedPenaltyDateType = {
  id: number;
  p_id: number;
  title: string;
  p_title: string;
  p_desciription: string;
  description: string;
  penalty: number;
  date: string;
  team: string;
  team_id: number;
  owner: string;
  owner_id: number;
};