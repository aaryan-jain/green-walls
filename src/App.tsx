import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/Navigation-bar";
import LandingPage from "./pages/landingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
