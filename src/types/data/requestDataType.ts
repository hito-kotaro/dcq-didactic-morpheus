export type requestDataType = {
  id: number;
  title: string;
  description: string;
  applicant_id: number;
  applicant: string;
  quest_description: string;
  quest_title: string;
  reward: number;
  status: string;
  authorizer?: string;
  auth_comment?: string;
  created_at: string;
  updated_at: string;
};

export const emptyRequest: requestDataType = {
  id: 0,
  title: '',
  description: '',
  applicant_id: 0,
  applicant: '',
  quest_description: '',
  quest_title: '',
  reward: 0,
  status: '',
  created_at: '',
  updated_at: '',
};

export type createRequestType = {
  title: string;
  description: string;
  quest_id: number;
  applicant_id: number;
};

export type updateRequestType = {
  status: string;
  auth_comment: string;
};

export type closedRequestDataType = {
  id: number;
  date: string;
  title: string;
  description: string;
  q_title: string;
  q_description: string;
  q_reward: number;
  q_owner: string;
  q_owner_id: number;
  applicant_id: number;
  applicant: string;
  status: string;
  authorizer: string;
  authorizer_id: number;
  comment: string;
};
