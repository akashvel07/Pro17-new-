import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import UserCursor from './components/UserCursor';
import TilesLoader from './components/TilesLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Sync state with browser location/hash for seamless routing & back/forward buttons
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validRoutes = ['home', 'about', 'capabilities', 'products', 'industries', 'contact'];
    return validRoutes.includes(hash) ? hash : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validRoutes = ['home', 'about', 'capabilities', 'products', 'industries', 'contact'];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (routeId) => {
    setCurrentRoute(routeId);
    window.location.hash = routeId === 'home' ? '' : `#${routeId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Editorial Tiles Preloader with Primary Brand Color (#981B25) */}
      {!isLoaded && (
        <TilesLoader
          minTime={1.8}
          accent="#981B25"
          background="#FAF9F6"
          onComplete={() => setIsLoaded(true)}
        />
      )}

      {/* Interactive Figma/OriginKit-style User Cursor */}
      <UserCursor name="You" color="#981B25" secondaryColor="#2D282A" />

      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main Page View */}
      <div style={{ flex: 1 }}>
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'capabilities' && (
          <CapabilitiesPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactPage />
        )}
      </div>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Interactive Global Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
