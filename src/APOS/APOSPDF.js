import React, {useState} from 'react'
// jpg imports 
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
// pdf imports 
import APOS_TP_E_pdf from "./APOS-files/APOS-TP.pdf"
import APOS_TP_S_pdf from "./APOS-files/APOS-TP-S.pdf"
import post_1_year_e_pdf from "./APOS-files/APOS-1-Year-intake-E.pdf"
import post_1_year_s_pdf from "./APOS-files/APOS-1-year-intake-S.pdf"
import eval_e from "./APOS-files/APOS-Eval-E.pdf"
import eval_s from "./APOS-files/APOS-Eval-S.pdf"
import fitting_e from "./APOS-files/APOS-Fitting-SO.pdf"
import fitting_s from "./APOS-files/APOS-Fitting-SO-S.pdf"
import new_intake from "./APOS-files/APOS-New-pt-Intake.pdf"
import follow_up from "./APOS-files/APOS-FU-Questionaire.pdf"
import new_pt_questionaire from "./APOS-files/APOS-New-pt-Questionaire.pdf"
import puso from "./APOS-files/APOS-PUSO.pdf"
import checklist from "./APOS-files/APOS-Checklist.pdf"

function APOSPDF() {

  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);
  const [overview5, setOverview5] = useState(true);
  const [overview6, setOverview6] = useState(true);
  const [overview7, setOverview7] = useState(true);
  const [overview8, setOverview8] = useState(true);
  const [overview9, setOverview9] = useState(true);
  const [overview10, setOverview10] = useState(true);
  const [overview11, setOverview11] = useState(true);
  const [overview12, setOverview12] = useState(true);
  const [overview13, setOverview13] = useState(true);
  
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
    setOverview5(!overview5);
  }


  function handleClick6(){
    setOverview6(!overview6);
  }


  function handleClick7(){
    setOverview7(!overview7);
  }


  function handleClick8(){
    setOverview8(!overview8);
  }


  function handleClick9(){
    setOverview9(!overview9);
  }


  function handleClick10(){
    setOverview10(!overview10);
  }


  function handleClick11(){
    setOverview11(!overview11);
  }


  function handleClick12(){
    setOverview12(!overview12);
  }


  function handleClick13(){
    setOverview13(!overview13);
  }



  return (
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
        { overview ? (
  <div>
    <p className="image-label"> APOS Post 1 Year Eval English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={APOS_1_Year_E}
    alt="APOS 1 year eval English"
    onClick={handleClick}
  />
  </div>
  ) :
        <div>
          <iframe title="APOS 1 year eval English" id="APOS 1 year eval English" style={{"border":"1px"}} src={post_1_year_e_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleClick}>Close</button>
        </div>
        }
        </div>

        <div className="image-container">
        { overview2 ? (
  <div>
    <p className="image-label"> APOS Post 1 Year Eval Spanish </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={APOS_1_Year_S}
    alt="APOS 1 year eval Spanish"
    onClick={handleClick2}
  />
  </div>
  ) :
        <div>
          <iframe title="APOS 1 year eval Spanish" id="APOS 1 year eval Spanish" style={{"border":"1px"}} src={post_1_year_s_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleClick2}>Close</button>
        </div>
        }
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

{ overview3 ? (
  <div>
    <p className="image-label"> APOS Evaulation English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={APOS_Eval_E}
    alt="APOS Eval_E"
    onClick={handleClick2}
  />
  </div>
  ) :
        <div>
          <iframe title="APOS 1 year eval Spanish" id="APOS 1 year eval Spanish" style={{"border":"1px"}} src={post_1_year_s_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleClick2}>Close</button>
        </div>
        }