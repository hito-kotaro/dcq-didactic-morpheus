import { atom } from 'recoil';
import useWindowSize from '../../hooks/WindowSize/useWindowSize';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../lib/constants';

const [width] = useWindowSize();
export const isMobileState = atom<boolean>({
  key: 'IS_MOBILE',
  default: width > MOBILE_WIDTH_MAX_LIMIT,
});
