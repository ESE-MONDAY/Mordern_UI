import React from "react";
import { Header, Features, Footer, What, Possibility, Blog} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
     
    </div>
  );
}

export default App;
