import useGlobalState from '../../../stores/useGlobalState';
import {
  issueDataType,
  penaltyDataType,
} from '../../../types/data/penaltyDataType';
import { questDataType } from '../../../types/data/questDataType';
import { requestDataType } from '../../../types/data/requestDataType';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import { listType } from './listType';

const useList = () => {
  const { teams } = useGlobalState();

  // いろんな方をListの方に変換するp必要がある

  const pickItem = (id: number, data: any[]) => {
    const pick = data.filter((d: any) => d.id === id);
    return pick[0];
  };

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

  const convUser = (users: userDataType[]): listType[] => {
    return users.map((u: userDataType) => {
      return {
        id: u.id,
        avatar: u.name,
        title: u.name,
        description: '',
        badges: [],
        date: '',
      };
    });
  };

  const convQuest = (quests: questDataType[]): listType[] => {
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

  // const convRequest = (requests: requestDataType[]): listType[] => {
  //   //  先にフィルターする
  //   // const filtered: requestDataType[] = requests.filter(
  //   //   (r: requestDataType) => r.status === 'open',
  //   // );

  //   return requests.map((r: requestDataType) => {
  //     return {
  //       id: r.id,
  //       avatar: r.applicant,
  //       title: r.title,
  //       description: r.description,
  //       badges: [{ bg: 'bg-open', text: 'text-open', content: 'open' }],
  //       date: r.created_at,
  //     };
  //   });
  // };

  const convPenalty = (penalties: penaltyDataType[]): listType[] => {
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

  const convRequest = (requests: requestDataType[]): listType[] => {
    return requests.map((r: requestDataType) => {
      return {
        id: r.id,
        avatar: r.applicant,
        title: r.title,
        description: r.description,
        badges: [
          { bg: `bg-${r.status}`, text: `text-${r.status}`, content: r.status },
        ],
        date: r.updated_at,
      };
    });
  };

  const convPenaltyHis = (issues: issueDataType[]): listType[] => {
    return issues.map((i: issueDataType) => {
      return {
        id: i.id,
        avatar: i.authorizer,
        title: i.title,
        description: i.description,
        badges: [],
        date: i.created_at,
      };
    });
  };

  return {
    pickItem,
    convTeam,
    convUser,
    convQuest,
    convRequest,
    convPenalty,
    convPenaltyHis,
  };
};

export default useList;
