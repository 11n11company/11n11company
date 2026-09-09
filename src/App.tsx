import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleSelectService = (_serviceName: string) => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A] selection:bg-black selection:text-white">
      {/* Editorial Navigation Bar */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* Main Single Page Content */}
      <Home
        onOpenContactModal={handleOpenContactModal}
        onSelectService={handleSelectService}
      />

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive 'Start a Project' Inquiry Modal */}
      <ProjectModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </div>
  );
};

export default App;
