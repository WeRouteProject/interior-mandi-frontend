import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import AuthModal from './components/AuthModal';
import { AuthProvider } from './contexts/AuthContext';
import DashboardPostLogin from './pages/DashboardPostLogin';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<DashboardPostLogin />} />
            </Routes>
          </main>
          <Footer />
          <AuthModal />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;