import React from 'react';

const MenuButton = ({ onToggle, opened }) => {
  return (
    <div className={`btn-menu${opened ? '-opened' : ''}`} onClick={onToggle}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};

export default MenuButton;
