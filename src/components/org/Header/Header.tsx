import React from 'react';
import HeaderLogo from '../../../images/MiniLogo.svg';

const Header = () => {
  return (
    <div className="w-full bg-h_base fixed text-h_text z-1300">
      <img src={HeaderLogo} alt="" />
    </div>
  );
};

export default Header;
