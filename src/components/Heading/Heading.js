import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = ({
  addTask, timeStampToString, setFilter, filterOptions, filter
}) => {
  return (
    <div className="column heading heading-container">
      <div className="columns level-item">
        <h1 className="title is-2 heading-title has-text-centered">
          Make your list
        </h1>
      </div>
      <div className="columns is-vcentered is-mobile">
        <div className="column">
          <p className="subtitle">
            {timeStampToString(Date.now())}
          </p>
        </div>
        <div className="column">
          <div className="columns is-mobile level-right">
            <div className="column is-narrow">
              <Dropdown
                options={filterOptions}
                value={filter}
                placeholder="Filter"
                onChange={(selected) => setFilter(selected.value)}
                controlClassName="custom_control"
                arrowClassName="custom_arrow"
              />
            </div>
            <div className="column is-narrow">
              <button
                className="button is-primary"
                onClick={addTask}
                type="button"
              >
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  addTask: PropTypes.func.isRequired,
  timeStampToString: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};
