import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

const App = () => {
  return (
    <AppProvider>
      <div className="container">

        <div className="row mt-3">
          <div className="col">
            <CartValue />
          </div>
          <div className="col">
            <Location />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ExpenseList />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ItemSelected />
          </div>
        </div>

      </div>
    </AppProvider>
  );
}

export default App;
