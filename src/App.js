import React from 'react';
import './App.css';
import CreateAccount from './pages/CreateAccount';
import ViewAccounts from './pages/ViewAccounts';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Banco Digital</h1>
          <CreateAccount />
          <ViewAccounts />
        </header>
      </div>
  );
}

export default App;
