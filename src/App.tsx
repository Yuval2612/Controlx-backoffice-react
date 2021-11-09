import React from 'react';
import './App.css';
import Sidebar from './components/menu/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import authService from './services/auth';
import Route from './Route';



function App() {
  const { token, setToken } = authService();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Sidebar></Sidebar>
      <Route />
    </>
  );
}

export default App;
