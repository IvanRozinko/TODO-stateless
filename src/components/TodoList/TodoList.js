import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateTasks from '../../redux/actions';
import Heading from '../Heading/Heading';
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoEditItem from '../TodoEditItem/TodoEditItem';

const FILTER_OPTIONS = ['All', 'Done', 'Active'];

const TodoList = ({ onUpdateTasks, tasks }) => {
  const [activeTask, setActiveTask] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    const timeStamp = Date.now();
    const newTask = {
      id: timeStamp,
      title: 'New task, press to edit...',
      date: timeStamp,
      done: false
    };
    onUpdateTasks([...tasks, newTask]);
  };

  const toggleModal = () => setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal);

  const deleteTask = (id) => {
    onUpdateTasks(tasks.filter((task) => task.id !== id));
    toggleModal();
  };

  const handleItemClick = (id) => {
    setActiveTask(tasks.find(
      (task) => task.id === id
    ));
    toggleModal();
  };

  const saveTasks = (updatedTask, toggle) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id
      ? { ...task, ...updatedTask }
      : task));
    onUpdateTasks(updatedTasks);
    if (toggle) {
      toggleModal();
    }
  };

  const timeStampToString = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const filteredTasks = () => {
    if (filter === 'Done') {
      return (tasks.filter((task) => task.done));
    } if (filter === 'Active') {
      return (tasks.filter((task) => !task.done));
    }
    return (tasks);
  };

  return (
    <div className="columns is-centered is-gapless">
      <div className="column is-three-fifths">
        <Heading
          timeStampToString={timeStampToString}
          addTask={addTask}
          setFilter={setFilter}
          filterOptions={FILTER_OPTIONS}
          filter={filter}
        />
        <div className="column">
          {filteredTasks().map((task) => (
            <TodoListItem
              task={task}
              key={task.id}
              onClick={handleItemClick}
              updateTasks={saveTasks}
              timeStampToString={timeStampToString}
            />
          ))}
        </div>
        {isOpenModal
          && (
          <TodoEditItem
            activeTask={activeTask}
            isOpen={isOpenModal}
            toggleModal={toggleModal}
            updateTasks={saveTasks}
            deleteTask={deleteTask}
          />
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateTasks: (tasks) => dispatch(updateTasks(tasks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

TodoList.propTypes = {
  onUpdateTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
