// import { useState } from "react";
import "./index.css";
import { ThemeProvider } from "next-themes";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <HeroSection />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
