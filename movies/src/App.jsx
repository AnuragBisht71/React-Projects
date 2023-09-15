import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Customer from "./Customer";
import Rental from "./Rental";
import Login from "./Login";

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/customer" element={<Customer />}></Route>
          <Route exact path="/rental" element={<Rental />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    );
  };
}

export default App;
