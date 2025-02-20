import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarMenuLg = ({ products, need, blog }) => {
  return (
    <ul className="navbar-menu-large">
      <li className="navbar-item">
        Products <i className="fas fa-caret-down ml-1"></i>
        <DropdownMenu options={products} />
      </li>
      <li className="navbar-item">
        Need <i className="fas fa-caret-down ml-1"></i>
        <DropdownMenu options={need} />
      </li>
      <li className="navbar-item">
        Blog <i className="fas fa-caret-down ml-1"></i>
        <DropdownMenu options={blog} />
      </li>
      <li className="navbar-item">
        <Link to="/">Calculator</Link>
      </li>
    </ul>
  );
};

NavbarMenuLg.propTypes = {
  products: PropTypes.array.isRequired,
  need: PropTypes.array.isRequired,
  blog: PropTypes.array.isRequired
};

export default NavbarMenuLg;
