import React from 'react';
import checklist from "./Others-Images/Others-APOS-Chhecklist-cover.jpg"
import fitting_E from "./Others-Images/Others-APOS-Fitting-SO.jpg"
import fitting_S from "./Others-Images/Others-APOS-Fitting-SO-S.jpg"
import DA_E from "./Others-Images/Others-DA-E.jpg"
import DA_S from "./Others-Images/Others-DA-S.jpg"
import FH_E from "./Others-Images/Others-FH-E.jpg"
import FH_S from "./Others-Images/Others-DA-S.jpg"

function OtherPDF() {




  return (
    <div className="bg-gray-100 w-fill h-screen">
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={APOS_1_Year_E}
            alt="APOS Post 1 year Eval English"
          />
          <p className="image-label"> APOS Checklist</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_1_Year_S}
            alt="APOS Post 1 Year Eval Spanish"
          />
          <p className="image-label"> APOS Post 1 Year Eval Spanish</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Eval_E}
            alt="APOS Evaluation English"
          />
          <p className="image-label"> APOS Evaluation English </p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Eval_S}
            alt="APOS Evaluation Spanish"
          />
          <p className="image-label"> APOS Evaluation Spanish</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Intake}
            alt="APOS Intake"
          />
          <p className="image-label"> APOS Intake</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_TP_E}
            alt="APOS Treatment Plan English"
          />
          <p className="image-label"> APOS Treatment Plan English </p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_TP_S}
            alt="APOS Treatment Plan Spanish"
          />
          <p className="image-label"> APOS Treatment Plan Spanish</p>
        </div>
       
      </div>
     </div>
    </div>
  )
}

export default OtherPDF