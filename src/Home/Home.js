import React from "react";
// import APOS from "./APOS"
// import Auth from "./Authhome"
// import Ptot from "./PTOT"
import "./Home.css"


import "./Home.css";

function Home() {


  return (
    <div className="bg-gray-100 w-fill h-screen">
      <h2 className="flex justify-center text-gray-600 font-semibold pt-10 text-3xl"> Pro Health and Fitness library</h2>
      <div className=" rounded-lg p-16">
        <p className="p-5 font-semibold text-gray-600 text-2xl shadow-2xl">
          This application allows
          therapists and administrative staff to quickly access the documents
          they need. It serves as a centralized repository for all the PDF
          documents needed for clinical operations, such as patient intake
          forms, APOS treatment plans, Direct Access form, APOS follow up
          questionaire and much more. Find your document above!
        </p>
      </div>
      
        {/* <APOS />
        
        <Auth />
      
        <Ptot />
         */}

      <div className="border-t-2 shadow-xs border-gray-200">

      <div className="flex justify-evenly">
        <img
          className="w-250 h-150"
          src={require("../PTimgRBG.png")}
          alt="fdimg"
        />
        <img className="" src={require("../ptimgphfRBG.png")} alt="fdimg2" />
      </div>
      </div>
    </div>
  );
}

export default Home;
