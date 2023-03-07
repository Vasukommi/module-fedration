import './App.css';
import React from "react";
import store from "./app/store.js";
import { Provider } from "react-redux";
import CounterRedux from "../src/components/counter/counter.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterRedux />
      </div>
    </Provider>
  );
}

export default App;