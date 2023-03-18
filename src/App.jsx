import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Jobs from "./components/JobDiv/Jobs";
import Search from "./components/SearchDiv/Search";
import Value from "./components/ValueDiv/Value";
import Footer from "./components/FooterDiv/Footer";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
