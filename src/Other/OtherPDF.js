import React from 'react';
// jpg imports below 
import checklist from "./Others-Images/Others-APOS-Checklist-cover.jpg"
import fitting_E from "./Others-Images/Others-APOS-Fitting-SO.jpg"
import fitting_S from "./Others-Images/Others-APOS-Fitting-SO-S.jpg"
import DA_E from "./Others-Images/Others-DA-E.jpg"
import DA_S from "./Others-Images/Others-DA-S.jpg"
import FH_E from "./Others-Images/Others-FH-E.jpg"
import FH_S from "./Others-Images/Others-DA-S.jpg"
// pdf imports below 
import checklistPdf from "./Other-files/Others-APOS-Checklist.pdf"
import fitting_E_pdf from "./Other-files/Others-APOS-Fitting-SO.pdf"
import fitting_S_pdf from "./Other-files/Others-APOS-Fitting-SO-S.pdf"
import directAccess_E from "./Other-files/Others-DA.pdf"
import directAccess_S from "./Other-files/Others-DA-S.pdf"
import FinancialH from "./Other-files/Others-FH.pdf"
import FinancialH_S from "./Other-files/Others-FH-S.pdf"

function OtherPDF() {

  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);
  const [overview5, setOverview5] = useState(true);
  const [overview6, setOverview6] = useState(true);
  const [overvie7, setOverview7] = useState(true);
  
  function handleClick(){
    setOverview(!overview);
  }
  
  function handleClick2(){
    setOverview2(!overview2);
  }
  
  
  function handleClick3(){
    setOverview3(!overview3);
  }
  
  
  function handleClick4(){
    setOverview4(!overview4);
  }

  function handleClick5(){
    setOverview4(!overview5);
  }

  function handleClick6(){
    setOverview4(!overview6);
  }

  function handleClick7(){
    setOverview4(!overview7);
  }



  return (
    <div className="bg-gray-100 w-fill h-screen">
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
        { overview ? (
  <div>
    <p className="image-label"> APOS Checklist </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={Checklist}
    alt="APOS Checklist"
    onClick={handleClick}
  />
  </div>
  ) :
        <div>
          <iframe title="checklist" id="Checklist" style={{"border":"1px"}} src={checklistPdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick}>Close</button>
        </div>
        }
        </div>

        <div className="image-container">

        { overview ? (
  <div>
    <p className="image-label"> APOS Fitting form English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={fitting_E}
    alt="Fitting SO"
    onClick={handleClick2}
  />
  </div>
  ) :
        <div>
          <iframe title="fitting SO" id="fitting SO" style={{"border":"1px"}} src={fitting_E_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick2}>Close</button>
        </div>
        }
        </div>

        <div className="image-container">
        { overview ? (
  <div>
    <p className="image-label"> APOS Fitting form Spanish </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={fitting_S}
    alt="Fitting SO spanish"
    onClick={handleClick3}
  />
  </div>
  ) :
        <div>
          <iframe title="fitting SO spanish" id="fitting SO spanish" style={{"border":"1px"}} src={fitting_S_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick3}>Close</button>
        </div>
        }
        </div>

        <div className="image-container">
        { overview ? (
  <div>
    <p className="image-label"> Direct Access Form English  </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={DA_E}
    alt="Direct Access Form English"
    onClick={handleClick4}
  />
  </div>
  ) :
        <div>
          <iframe title="Direct Access Form English" id="Direct Access Form English" style={{"border":"1px"}} src={directAccess_E} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick4}>Close</button>
        </div>
        }
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


{ overview ? (
  <div>
    <p className="image-label"> Direct Access Form Spanish  </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={DA_S}
    alt="Direct Access Form Spanish"
    onClick={handleClick5}
  />
  </div>
  ) :
        <div>
          <iframe title="Direct Access Form Spanish" id="Direct Access Form Spanish" style={{"border":"1px"}} src={directAccess_S} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick%}>Close</button>
        </div>
        }