import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { initializeTheme } from './utils/theme';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    initializeTheme();
  }, []);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onContactClick={handleContactClick} />
      <div className="flex-grow py-16">
        <MainPage />
        {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;