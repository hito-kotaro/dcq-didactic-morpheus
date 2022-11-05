import React, { useState } from 'react';
import useGlobalState from '../../../stores/useGlobalState';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import { questDataType } from '../../../types/data/questDataType';
import { requestDataType } from '../../../types/data/requestDataType';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import { listType } from './listType';

const useList = () => {
  const { teams, users, quests, requests, penalties } = useGlobalState();

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

  const convRequest = (): listType[] => {
    //  先にフィルターする
    const filtered: requestDataType[] = requests.filter(
      (r: requestDataType) => r.status === 'open',
    );

    return filtered.map((r: requestDataType) => {
      return {
        id: r.id,
        avatar: r.applicant,
        title: r.title,
        description: r.description,
        badges: [{ bg: 'bg-open', text: 'text-open', content: 'open' }],
        date: r.created_at,
      };
    });
  };

  const convPenalty = (): listType[] => {
    return penalties.map((p: penaltyDataType) => {
      return {
        id: p.id,
        avatar: p.owner,
        title: p.title,
        description: p.description,
        badges: [],
        date: p.date,
      };
    });
  };

  return { convTeam, convUser, convQuest, convRequest, convPenalty };
};

export default useList;
