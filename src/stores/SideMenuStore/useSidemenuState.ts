import { useRecoilState } from 'recoil';
import { sideMenuState } from './sideMenuStore';

const useSidemenuState = () => {
  const [open, setOpen] = useRecoilState(sideMenuState);

  const toggle = () => {
    console.log(open);
    setOpen(!open);
  };
  return { open, toggle };
};

export default useSidemenuState;
