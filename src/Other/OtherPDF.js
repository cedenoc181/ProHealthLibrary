import React from 'react';
import checklist from "./Others-Images/Others-APOS-Checklist-cover.jpg"
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
            src={checklist}
            alt="APOS checklist"
          />
          <p className="image-label"> APOS Checklist</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={fitting_E}
            alt="APOS Fitting form English"
          />
          <p className="image-label"> APOS Fitting form English</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={fitting_S}
            alt="APOS Fitting form Spanish"
          />
          <p className="image-label"> APOS Fitting form Spanish </p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={DA_E}
            alt="Direct Access form English"
          />
          <p className="image-label"> Direct Access form English</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={DA_S}
            alt="Direct Access form Spanish"
          />
          <p className="image-label"> Direct Access form Spanish</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={FH_E}
            alt="Financial Hardshiop form English"
          />
          <p className="image-label"> Financial Hardshiop form English </p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={FH_S}
            alt="Financial Hardshiop form Spanish"
          />
          <p className="image-label"> Financial Hardshiop form Spanish</p>
        </div>
       
      </div>
     </div>
    </div>
  )
}

export default OtherPDF