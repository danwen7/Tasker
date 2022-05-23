import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Test from "./components/test";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Test />} />
      <Route exact path="/image" element={<Nav />} />
    </Routes>
  );
}

export default App;
