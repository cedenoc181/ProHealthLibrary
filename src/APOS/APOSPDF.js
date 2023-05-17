import React, {useState} from 'react'
import APOS_TP_E from "./APOS-Images/APOS-TP-cover.jpg"
import APOS_TP_S from "./APOS-Images/APOS-TP-S-cover.jpg"
import APOS_1_Year_E from "./APOS-Images/APOS-1-year-intake-E-cover.jpg"
import APOS_1_Year_S from "./APOS-Images/APOS-1-year-intake-S-cover.jpg"
import APOS_Eval_E from "./APOS-Images/APOS-Eval-E-cover.jpg"
import APOS_Eval_S from "./APOS-Images/APOS-Eval-S-cover.jpg"
import APOS_Fitting_E from "./APOS-Images/APOS-Fitting-SO.jpg"
import APOS_Fitting_S from "./APOS-Images/APOS-Fitting-SO-S.jpg"
import APOS_PUSO from "./APOS-Images/APOS-PUSO-cover.jpg"
import APOS_Intake from "./APOS-Images/APOS-New-pt-Intake-E.jpg"
import APOS_FU from "./APOS-Images/APOS-FU-Questionaire-cover.jpg"
import APOS_new_Questionaire from "./APOS-Images/APOS-New-pt-Questionaire-cover.jpg"
import APOS_Checklist from "./APOS-Images/APOS-Checklist-cover.jpg"

function APOSPDF() {

  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);
  
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



  return (
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={APOS_1_Year_E}
            alt="APOS Post 1 year Eval English"
          />
          <p className="image-label"> APOS Post 1 Year Eval English</p>
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
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Fitting_E}
            alt="APOS Fitting English"
          />
          <p className="image-label"> APOS Fitting English</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Fitting_S}
            alt="APOS Fitting Spanish"
          />
          <p className="image-label"> APOS Fitting Spanish</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_PUSO}
            alt="APOS Pick up sign off "
          />
          <p className="image-label"> APOS Pick up sign off </p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_new_Questionaire}
            alt="APOS Questionaire"
          />
          <p className="image-label"> APOS New Patient Questionaire </p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_FU}
            alt="APOS Follow up questionaire"
          />
          <p className="image-label"> APOS Follow up Questionaire</p>
        </div>
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={APOS_Checklist}
            alt="APOS Checklist"
          />
          <p className="image-label"> APOS Checklist </p>
        </div>

      </div>
    </div>
  );
}


export default APOSPDF

// { overview ? (
//   <div>
//     <p className="image-label">Returning Intake Spanish</p>
//   <img
//     className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
//     src={R_intake_S_cover}
//     alt="Returning Intake Spanish"
//     onClick={handleClick4}
//   />
//   </div>
//   ) :
//         <div>
//           <iframe title="Returning Intake Spanish" id="Returning Intake Spanish" style={{"border":"1px"}} src={R_intake_S_pdf} frameborder="1" height="450" width="450"></iframe>
//             <button className="close mt-5 flex align-center justify-center" onClick={handleClick4}>Close</button>
//         </div>
//         }