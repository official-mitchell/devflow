import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage';
import cn from 'classnames';

function App() {
  return (
    <div className={cn('container')}>
      <h1>App</h1>
      <HomePage />
    </div>
  );
}

export default App;
