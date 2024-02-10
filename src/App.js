import React from 'react';
import { Header } from './AppComponents/Header.js';
import { Main } from './AppComponents/Main.js';
import { Footer } from './AppComponents/Footer.js';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <Router>
          <Header />
          <Main />
          <Footer />
    </Router>
    //npm run deploy
  );
}

export default App;
