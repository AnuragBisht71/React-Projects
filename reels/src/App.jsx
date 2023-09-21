import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";

let App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
