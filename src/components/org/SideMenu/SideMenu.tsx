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

type Props = {
  itemList: { label: string; icon: ReactElement; action: () => void }[];
};

const SideMenu: VFC<Props> = (props) => {
  type item = { label: string; icon: ReactElement; action: () => void };
  const [width, height] = useWindowSize();
  const { itemList } = props;
  const drawerWidth = width / 5;
  return (
    <Drawer
      variant="permanent"
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
            <ListItem key={i.label} disablePadding onClick={i.action}>
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
