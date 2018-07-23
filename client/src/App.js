import React, { Component } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import ParallaxBackground from './components/ParallaxBackground/ParallaxBackground';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Browser from './components/Browser/Browser';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
  

    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
