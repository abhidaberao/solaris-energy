import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './pages/Admin/AdminDash';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Admin/DashLayout';
import Home from './pages/Admin/subpages/Customers';
import Blogs from './pages/Admin/subpages/FieldWorkers';
import AdminDash from './pages/Admin/AdminDash';
import FieldWorkerDash from './pages/FieldWorker/FieldWorkerDash';

function App() {
  return (
    <div className="App">
      <AdminDash/>
    </div>
  );
}

export default App;
