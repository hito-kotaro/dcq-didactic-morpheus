import { badgeType } from '../../atoms/MyBadge/myBadgeType';

/* eslint-disable no-unused-vars */
export type listType = {
  id: number;
  avatar: string;
  title: string;
  description: string;
  badges: badgeType[];
  date: string;
};
