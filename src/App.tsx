import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { useRoutes } from './hooks/useRoutes';

function App() {
  const appRoutes = useRoutes()

  return (
    <div className="app">
      {
        appRoutes
      }
    </div>
  );
}

export default App;
