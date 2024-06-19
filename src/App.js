import React from 'react';
import Layout from './Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import StudentLogin from './Pages/LandingPage/StudentLogin/StudentLogin';
import InstitutionLogin from './Pages/LandingPage/InstitutionLogin/InstitutionLogin';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="institutionLogin" element={<InstitutionLogin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App