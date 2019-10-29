import React, { useState } from 'react';
import NavbarMenuLg from './NavbarMenuLg';
import MenuButton from './MenuButton';
import NavbarMenuSm from './NavbarMenuSm';

const Navbar = () => {
  //Content of dropdowns
  const productsMenu = ['Mortgage', 'Credit cards', 'Mini loans', 'Loans'];
  const needsMenu = ['Car financig', 'Debt reunification', 'Home improvemnt'];
  const blogsMenu = ['Improve my finance', 'Day to day money', 'Wealth'];

  //State of mobile menu button - used to toggle button and define if menu should be displayed
  const [toggleShow, setToggleShow] = useState(false);

  //Change the above state
  const toogleShowMenu = () => {
    setToggleShow(!toggleShow);
  };
  return (
    <nav className="navbar">
      <MenuButton onToggle={toogleShowMenu} opened={toggleShow} />
      <NavbarMenuSm
        products={productsMenu}
        need={needsMenu}
        blog={blogsMenu}
        show={toggleShow}
      />
      <NavbarMenuLg products={productsMenu} need={needsMenu} blog={blogsMenu} />
    </nav>
  );
};

export default Navbar;
