import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>{<Route path="/" element={<Home />} />}</Routes>
      </div>
    </Router>
  );
};

export default App;
