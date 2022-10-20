export type graphUserData = {
  name: string;
  point: number;
  team_id: number;
};

export type userDataType = {
  id: number;
  name: string;
  point: number;
  team: string;
  team_id: number;
  role: string;
  role_id: number;
};

export type userCreateType = {
  tenant_id: number;
  role_id: number;
  team_id: number;
  name: string;
  password: string;
};
