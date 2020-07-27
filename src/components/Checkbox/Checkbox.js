import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ isChecked, onClick }) => (
  <div className="container outline_none" onClick={onClick} role="button" tabIndex={0} onKeyDown={onClick}>
    <div className="checkbox-container">
      <div className={`${isChecked ? 'checked-side' : ''}`} />
      <div className={`${isChecked ? 'checked-bottom' : ''}`} />
    </div>
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
