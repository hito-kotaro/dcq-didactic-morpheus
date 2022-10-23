export type questDataType = {
  id: number;
  title: string;
  description: string;
  reward: number;
  date: string;
  owner_id: number;
  owner: string;
  example: string;
};

export type questRequestType = {
  title: string;
  description: string;
  example: string;
  reward: number;
};
