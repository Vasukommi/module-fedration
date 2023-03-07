import React from 'react';
import Form from "../src/components/form.jsx";
import Products from './components/products.jsx';
import StateService from '../src/components/stateService.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <StateService />
      <Form />
      <Products />
    </div>
  );
}

export default App;
