export type teamDataType = {
  id: number;
  name: string;
  member: number;
  point: number;
  penalty: number;
  description?: string;
};

export type newTeamType = Pick<teamDataType, 'name' | 'description'>;
