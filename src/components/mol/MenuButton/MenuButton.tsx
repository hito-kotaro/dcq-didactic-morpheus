import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';

type Props = {
  icon: ReactElement;
  menuItems: { label: string; onClick: () => void }[];
  isHeaderMenu?: boolean;
};

const MenuButton: VFC<Props> = (props) => {
  const { menuItems, icon, isHeaderMenu } = props;
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
        {isHeaderMenu ? (
          <div className="px-2">
            <div className="flex">
              <BoringAvatar name="佐藤" />
              <div className="w-2" />
              <div className="text-text text-lg font-semibold leading-10">
                佐藤
              </div>
            </div>
            <div className="my-3">
              <Divider />
            </div>
          </div>
        ) : (
          ''
        )}
        {menuItems.map((item: { label: string; onClick: () => void }) => (
          <MenuItem key={item.label} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuButton;
