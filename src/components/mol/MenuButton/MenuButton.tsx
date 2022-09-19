import React, { VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem } from '@mui/material';

type Props = {
  menuItems: { label: string; onClick: () => void }[];
};

const MenuButton: VFC<Props> = (props) => {
  const { menuItems } = props;
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
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
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
