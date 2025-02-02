import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FlightPage from "./pages/FlightPage";
import './styles.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight/:id" element={<FlightPage />} />
      </Routes>
    </Router>
  );
};

export default App;
