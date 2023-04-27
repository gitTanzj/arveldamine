import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App';
import { ExpensesContextProvider } from './context/expenseContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExpensesContextProvider>
      <App />
    </ExpensesContextProvider>
  </React.StrictMode>
);