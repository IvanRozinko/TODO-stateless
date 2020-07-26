import tasksMock from '../assets/mock/todos';

const defaultState = {
  tasks: tasksMock,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TASKS': {
      return {
        ...state,
        tasks: action.tasks
      };
    }
    default: return state;
  }
};

export default reducer;
