import React, { ReactElement, VFC } from 'react';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import useSidemenuState from '../../../stores/SideMenuStore/useSidemenuState';

type Props = {
  itemList: {
    label: string;
    icon: ReactElement;
    action: (c: ReactElement) => void;
    component: ReactElement;
  }[];
};

const SideMenu: VFC<Props> = (props) => {
  type item = {
    label: string;
    icon: ReactElement;
    action: (c: ReactElement) => void;
    component: ReactElement;
  };
  const { toggle, open } = useSidemenuState();

  const [width, height] = useWindowSize();
  const { itemList } = props;
  const drawerEmptyArea = 100;
  const drawerWidth = width > 1000 ? width / 2 : width - drawerEmptyArea;
  return (
    <Drawer
      variant="temporary"
      // variant={width > 1000 ? 'permanent' : 'temporary'}
      open={open}
      onClose={toggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <div>
        <List>
          {itemList.map((i: item) => (
            <ListItem
              key={i.label}
              disablePadding
              onClick={() => i.action(i.component)}
            >
              <ListItemButton>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideMenu;
