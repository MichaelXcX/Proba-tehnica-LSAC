import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import User from "./components/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/user" exact element={<User />} />
      </Routes>
    </Router>
  );
};

reactDom.render(<App />, document.getElementById("root"));
