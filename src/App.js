import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import TodoList from './components/TodoList/TodoList';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
