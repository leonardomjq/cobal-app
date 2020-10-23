import React from 'react';
import Routes from './routes';
import UserProvider from './context/User'
import './assets/styles/global.scss';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App;
