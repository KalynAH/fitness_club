import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboveNav from "./components/Abovenav/AboveNav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Display from "./components/Display/Display";
import RoutineDisplay from "./components/RoutineDisplay/RoutineDisplay";

const App = () => {
  return (
    <div className="app-wrapper">
      <AboveNav />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Form />} />
          <Route path="/routines" element={<Display />} />
          <Route path="/:id" element={<RoutineDisplay />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
