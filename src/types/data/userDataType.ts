export type graphUserData = {
  name: string;
  point: number;
  team_id: number;
};

export type userDataType = {
  id: number;
  name: string;
  point: number;
  team_id: number;
  team: string;
};

export type userCreateType = {
  tenant_id: number;
  team_id: number;
  name: string;
  password: string;
};
