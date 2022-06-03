import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Alll_file/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AoutPage/About";
import About_her from "./Components/Alll_file/About_her";
import Collection from "./Components/My_Collection/Collection";
import MainBinefits from "./Components/MainBenifits/MainBinefits";
import Atributes from "./Components/Atributes/Atributes";
import Main_Roadmap from "./Components/Main_Roadmap/Main_Roadmap";
import Mint from "./Components/Mint/Mint";
import Navbarnav from "./Components/Navbar/Navbar";



const App = () => {



  return (
    <div className="App">


      <BrowserRouter >
        <Navbarnav />
        <ToastContainer />
        <Routes >


          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_her />} />
          <Route path="/Collections" element={<Collection />} />
          <Route path="/MainBinefits" element={<MainBinefits />} />
          <Route path="/Attributes" element={<Atributes />} />
          <Route path="/Roadmap" element={<Main_Roadmap />} />
          <Route path="/Mint" element={<Mint />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
