import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useWindowSize from '../../hooks/WindowSize/useWindowSize';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../lib/constants';
import { isMobileState } from './isMobileStore';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width > MOBILE_WIDTH_MAX_LIMIT) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);

  return { isMobile, setIsMobile };
};

export default useIsMobile;
