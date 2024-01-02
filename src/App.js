import React, { useState, useEffect } from 'react';
import { Header } from './AppComponents/Header.js';
import { Main } from './AppComponents/Main.js';
import { Footer } from './AppComponents/Footer.js';
import { Loading } from './AppComponents/Loading.js';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the timeout to 3 seconds (adjust as needed)
  }, []); // Use an empty dependency array to run this effect only once

  return (
    <Router>
        <Loading isVisible={isLoading} />
          <Header />
          <Main />
          <Footer />
    </Router>
    //npm run deploy
  );
}

export default App;
