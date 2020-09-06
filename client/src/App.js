import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

// Import Components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

// Import Actions
import { loadUser } from './redux/action/authActions';
import { getItems } from './redux/action/itemActions';
import BottomNavbar from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className='App'>
      <AppNavbar />
      <ShoppingList />
      <BottomNavbar />
    </div>
  );
}

export default App;
