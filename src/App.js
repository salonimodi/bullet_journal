import "./App.css";
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from "./components/login/login_page";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* Add more routes for other pages */}
    </Routes>
  </Router>
  );
}

export default App;
