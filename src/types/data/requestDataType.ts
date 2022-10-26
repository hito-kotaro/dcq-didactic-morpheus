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
  date: string;
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
