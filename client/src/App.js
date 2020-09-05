import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

// Import Components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
