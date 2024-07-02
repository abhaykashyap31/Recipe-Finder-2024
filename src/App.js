import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Tabs from './components/Tabs';
import RecipeLists from './components/RecipeLists';
import Contacts from './components/contact';

function App() {
  const [loader, setLoader] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(true);

  // Custom component to handle the navigation
  const NavigateToContact = () => {
    const navigate = useNavigate();

    const handleSubmitReviewClick = () => {
      setShowSubmitButton(false); // Hide the button when clicked
      navigate('/contact');
    };

    return (
      <button className="submit-review-button" onClick={handleSubmitReviewClick}>
        Submit Review
      </button>
    );
  };

  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Tabs setLoader={setLoader} />
                <RecipeLists setLoader={setLoader} />
                {loader && (
                  <div className="loader">
                    <div className="spinner"></div>
                  </div>
                )}
              </>
            }
          />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        {showSubmitButton && <NavigateToContact />}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
