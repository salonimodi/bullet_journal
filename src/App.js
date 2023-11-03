import "./App.css";
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from "./components/login/login_page";
import TodoList from "./components/to_do_list/to_do_list";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/todolist" element={<TodoList />}/>
    </Routes>
  </Router>
  );
}

export default App;
