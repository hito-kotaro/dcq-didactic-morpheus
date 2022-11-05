import React, { useState } from 'react';
import useGlobalState from '../../../stores/useGlobalState';
import { questDataType } from '../../../types/data/questDataType';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import { listType } from './listType';

const useList = () => {
  const { teams, users, quests } = useGlobalState();

  // いろんな方をListの方に変換するp必要がある

  // Team型をlistTypeに変換
  const convTeam = (): listType[] => {
    return teams.map((t: teamDataType) => {
      return {
        id: t.id,
        avatar: t.name,
        title: t.name,
        description: t.description ?? '説明はありません',
        badges: [],
        date: '',
      };
    });
  };

  const convUser = (): listType[] => {
    return users.map((u: userDataType) => {
      return {
        id: u.id,
        avatar: u.name,
        title: u.name,
        description: '',
        badges: [{ bg: '', text: '', content: u.role }],
        date: '',
      };
    });
  };

  const convQuest = (): listType[] => {
    return quests.map((q: questDataType) => {
      return {
        id: q.id,
        avatar: q.owner,
        title: q.title,
        description: q.description,
        badges: [{ bg: 'bg-open', text: 'text-open', content: 'open' }],
        date: q.date,
      };
    });
  };
  return { convTeam, convUser, convQuest };
};

export default useList;
