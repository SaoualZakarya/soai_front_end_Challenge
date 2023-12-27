import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { Elements } from "./components/Elements";
import { Footer } from "./components/Footer";
function App() {

  return (
    <div className=" bg-white dark:bg-[#222]">
      <div className="relative overflow-hidden">
        <div className="all z-0"></div>
        <NavBar/>
        <Hero/>
        <Courses/>
      </div>
      <div className="bg-[#F5F5F5] dark:bg-[#262626] py-[80px]">
        <Elements/>
      </div>
      <Footer/>
    </div>
  );
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
