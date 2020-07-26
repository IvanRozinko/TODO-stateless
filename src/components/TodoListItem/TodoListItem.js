import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import Checkbox from '../Checkbox/Checkbox';

const TodoListItem = ({
  task, onClick, updateTasks, timeStampToString,
}) => (
  <div className="box">
    <div className="columns is-mobile is-vcentered">
      <div className="column is-1">
        <div className="level-item">
          <Checkbox isChecked={task.done} onClick={() => updateTasks({ ...task, done: !task.done })} />
        </div>
      </div>
      <div
        className="column is-11 pointer title-container"
        onClick={() => onClick(task.id)}
        role="button"
        tabIndex={0}
        onKeyDown={() => onClick(task.id)}
      >
        <p className={`level-left task-title ${task.done ? 'task-done' : ''}`}>{task.title}</p>
      </div>
    </div>
    <div className="columns level-right">
      <div
        className="level-right"
        onClick={() => onClick(task.id)}
        role="button"
        tabIndex={0}
        onKeyDown={() => onClick(task.id)}
      >
        <div className="has-text-right task-date">{timeStampToString(task.date)}</div>
      </div>
    </div>
  </div>
);

export default TodoListItem;

TodoListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    date: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  updateTasks: PropTypes.func.isRequired,
  timeStampToString: PropTypes.func.isRequired,
  activeTask: PropTypes.shape({}).isRequired,
};
