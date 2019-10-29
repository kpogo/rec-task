import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  iconLable,
  iconStatus,
  valid,
  warning
}) => {
  const [iconLableColor, setIconLableColor] = useState(false);
  const [iconStatusColor, setIconStatusColor] = useState(false);
  const [showExample, setShowExample] = useState(false);
  useEffect(() => {
    if (valid) {
      setIconStatusColor(true);
    }
    if (!valid) {
      setIconStatusColor(false);
    }
  }, [valid]);
  const onFocus = e => {
    setIconLableColor(true);
    setShowExample(true);
  };
  const onBlur = e => {
    setIconLableColor(false);
    setShowExample(false);
  };

  return (
    <Fragment>
      <div className="input-field-wrapper">
        <div className="input-field-icons">
          <i
            className={`${iconLable} ${
              iconLableColor ? 'text-focused' : 'text-dim'
            }`}
          ></i>
          <i
            className={`${iconStatus} ${
              iconStatusColor ? 'text-success' : 'text-dim'
            }`}
          ></i>
        </div>
        <input
          className="input-field"
          type={type}
          name={name}
          value={value}
          onChange={e => onChange(e)}
          placeholder={placeholder}
          required
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <small
        className={`input-warning text-danger ${
          showExample && !valid ? 'hg-100' : 'hg-0'
        }`}
      >
        {warning}
      </small>
    </Fragment>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconLable: PropTypes.string.isRequired,
  iconStatus: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  warning: PropTypes.string.isRequired
};

export default InputField;
