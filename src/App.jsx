import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="bg-gray-900 text-neutral-100 m-5 container">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <div className="space-y-4">
                    <FeedbackList />
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
