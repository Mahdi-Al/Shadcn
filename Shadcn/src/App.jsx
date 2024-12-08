// import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
}

export default App;
