import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './components/ProfilePage';
import { OnboardingFlow } from './pages/OnboardingFlow';
import { ProjectCreationFlow } from './components/ProjectCreationFlow';
import { VendorComparisonReport } from './pages/VendorComparisionReport';
import { VendorSelectionPage } from './pages/VendorSelectionPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import DashboardPostLogin from './pages/DashboardPostLogin';
import Login from './pages/Login';
import AuthModal from './components/AuthModal';
import { AuthProvider } from './contexts/AuthContext';
import { User, UserType } from './types';

const mockUser: User = {
  id: '1',
  name: 'Hailey',
  location: 'Bangalore',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  bio: 'A homeowner with a love for quiet corners, natural textures, and meaningful spaces. By profession, I work in the tech industry, but my heart leans toward design, slow living, and curating spaces that reflect personal stories.',
  verified: true,
};

const hideHeaderRoutes = [
    '/onboarding',
    '/project-creation',
    '/simple-purpose',
    '/vendor-comparison',
    '/vendor-selection',
  ];

const hideFooterRoutes = [
  '/onboarding',
  '/project-creation',
  '/simple-purpose',
  '/vendor-comparison',
  '/vendor-selection',
  '/login', // Hide footer on login page only
];

function AppContent() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const showHeader = !hideHeaderRoutes.includes(path);
  const showFooter = !hideFooterRoutes.includes(path);

  const handleOnboardingComplete = (type: UserType) => {
    setUserType(type);
    navigate('/');
  };

  const handleProjectCreationComplete = () => {
    navigate('/vendor-comparison');
  };


  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showHeader && <Header />}
      <div className="flex flex-1">
        <main className="flex-1">
          <Routes>
            <Route path="/landing" element={<LandingPage onVendorCompare={() => navigate('/vendor-comparison')} onVendorSelect={() => navigate('/vendor-selection')} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardPostLogin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage user={mockUser} />} />
            <Route path="/onboarding" element={<OnboardingFlow onComplete={handleOnboardingComplete} />} />
            <Route path="/project-creation" element={<ProjectCreationFlow onClose={() => navigate('/')} onComplete={handleProjectCreationComplete} />} />
            <Route path="/vendor-comparison" element={<VendorComparisonReport onClose={() => navigate('/')} />} />
            <Route path="/vendor-selection" element={<VendorSelectionPage onClose={() => navigate('/')} />} />
            <Route path="/proposals" element={
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proposals</h2>
                  <p className="text-gray-600">Your proposals will appear here</p>
                </div>
              </div>
            } />
            <Route path="/projects" element={
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
                  <p className="text-gray-600">Your projects will appear here</p>
                </div>
              </div>
            } />
            <Route path="/settings" element={
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Settings</h2>
                  <p className="text-gray-600">Manage your account settings</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
      {showFooter && <Footer />}
      <AuthModal />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
