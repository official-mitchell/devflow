import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Footer";

import cn from "classnames";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
