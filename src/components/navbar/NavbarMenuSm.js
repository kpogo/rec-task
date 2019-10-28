import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

const NavbarMenuSm = ({ products, need, blog, show }) => {
  return (
    <ul className={`navbar-menu-small ${show ? 'show' : 'hide'}`}>
      <li className="navbar-item">
        <div className="navbar-item-header">
          Products <i className="fas fa-caret-down ml-1"></i>
        </div>
        <DropdownMenu options={products} />
      </li>
      <li className="navbar-item">
        <div className="navbar-item-header">
          Need <i className="fas fa-caret-down ml-1"></i>
        </div>
        <DropdownMenu options={need} />
      </li>
      <li className="navbar-item">
        <div className="navbar-item-header">
          Blog <i className="fas fa-caret-down ml-1"></i>
        </div>
        <DropdownMenu options={blog} />
      </li>
      <li className="navbar-item">
        <Link to="/">
          <div className="navbar-item-header">Calculator</div>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMenuSm;
