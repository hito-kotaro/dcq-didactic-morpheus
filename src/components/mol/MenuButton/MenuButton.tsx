import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';

type Props = {
  icon: ReactElement;
  menuItems: { label: string; onClick: () => void }[];
};

const MenuButton: VFC<Props> = (props) => {
  const { menuItems, icon } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item: { label: string; onClick: () => void }) => (
          <MenuItem onClick={item.onClick}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuButton;
