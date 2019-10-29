import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DropdownMenu = ({ options }) => {
  return (
    <ul className="dropdown-menu">
      {options.map(option => (
        <li key={uuid()} className="dropdown-menu-option">
          <Link to="/">{option}</Link>
        </li>
      ))}
    </ul>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.array.isRequired
};

export default DropdownMenu;
