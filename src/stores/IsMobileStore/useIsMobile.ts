import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useWindowSize from '../../hooks/WindowSize/useWindowSize';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../lib/constants';
import { isMobileState } from './isMobileStore';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [width] = useWindowSize();

  useEffect(() => {
    setIsMobile(width > MOBILE_WIDTH_MAX_LIMIT);
  }, [width]);

  return { isMobile, setIsMobile };
};

export default useIsMobile;
