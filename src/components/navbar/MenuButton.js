import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ onToggle, opened }) => {
  return (
    <div className={`btn-menu${opened ? '-opened' : ''}`} onClick={onToggle}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};

MenuButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
};

export default MenuButton;
