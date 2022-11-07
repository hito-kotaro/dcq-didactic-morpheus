import { useRecoilState } from 'recoil';
import { sideMenuState } from './sideMenuStore';

const useSidemenuState = () => {
  const [open, setOpen] = useRecoilState(sideMenuState);

  const toggle = () => {
    setOpen(!open);
  };
  return { open, toggle };
};

export default useSidemenuState;
