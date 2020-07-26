import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bulma-components';
import DatePicker from 'react-datepicker';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import 'react-datepicker/dist/react-datepicker.css';

const TodoEditItem = ({
  isOpen, toggleModal, updateTasks, deleteTask, activeTask
}) => {
  const [task, setTask] = useState(activeTask);

  const handleInputChange = ({ target }) => setTask({
    ...task,
    [target.name]: target.value
  });

  const handleDateChange = (date) => setTask({
    ...task,
    date: Date.parse(date)
  });

  return (
    <Modal
      closeOnEsc
      show={isOpen}
      onClose={toggleModal}
    >
      <div className="modal-card">
        <header className="modal-card-head has-background-primary">
          <p className="modal-card-title">Edit task</p>
          <button
            className="delete"
            onClick={toggleModal}
            type="button"
            aria-label="delete"
          />
        </header>
        <section className="modal-card-body">
          <div className="level">
            <DatePicker
              selected={task.date}
              onChange={handleDateChange}
              customInput={<CustomDateInput />}
              dateFormat="dd/MM/yyyy"
              withPortal
            />
          </div>
          <input
            className="input is-primary"
            value={task.title}
            onChange={handleInputChange}
            name="title"
            maxLength={300}
          />
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-danger"
            onClick={() => deleteTask(task.id)}
            type="button"
          >
            Delete
          </button>
          <button
            className="button is-primary"
            onClick={() => updateTasks(task, toggleModal)}
            type="button"
          >
            Save
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default TodoEditItem;

TodoEditItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  updateTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.string.isRequired,
  activeTask: PropTypes.shape({}).isRequired,
};
