const updateTasks = (tasks) => {
  return {
    type: 'UPDATE_TASKS',
    tasks
  };
};

export default updateTasks;
