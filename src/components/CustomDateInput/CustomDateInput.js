import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars */
const CustomDateInput = ({ value, onClick }, ref) => {
  return (
    <button
      onClick={onClick}
      className="button is-primary is-outlined"
      type="button"
    >
      {value}
    </button>
  );
};

export default forwardRef(CustomDateInput);

CustomDateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
