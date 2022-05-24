import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Test from "./components/test";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nav" element={<Nav />} />
    </Routes>
  );
}

export default App;
