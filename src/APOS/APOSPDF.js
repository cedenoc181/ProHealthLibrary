import React, {useRef, useState, useEffect} from 'react'
import { FallingLines } from  'react-loader-spinner'
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

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4,setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);
  const [isLoading7, setIsLoading7] = useState(false);
  const [isLoading8, setIsLoading8] = useState(false);
  const [isLoading9, setIsLoading9] = useState(false);
  const [isLoading10, setIsLoading10] = useState(false);
  const [isLoading11, setIsLoading11] = useState(false);
  const [isLoading12, setIsLoading12] = useState(false);
  const [isLoading13, setIsLoading13] = useState(false);
  
  const imageRef = useRef(null);

  useEffect(() => {
    if (isLoading)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        setOverview(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading]);


  useEffect(() => {
    if (isLoading2)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading2(false);
        setOverview2(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading2]);

  useEffect(() => {
    if (isLoading3)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading3(false);
        setOverview3(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading3]);

  useEffect(() => {
    if (isLoading4)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading4(false);
        setOverview4(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading4]);

  useEffect(() => {
    if (isLoading5)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading5(false);
        setOverview5(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading5]);

  useEffect(() => {
    if (isLoading6)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading6(false);
        setOverview6(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading6]);

  useEffect(() => {
    if (isLoading7)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading7(false);
        setOverview7(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading7]);

  useEffect(() => {
    if (isLoading8)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading8(false);
        setOverview8(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading8]);

  useEffect(() => {
    if (isLoading9)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading9(false);
        setOverview9(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading9]);

  useEffect(() => {
    if (isLoading10)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading10(false);
        setOverview10(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading10]);

  useEffect(() => {
    if (isLoading11)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading11(false);
        setOverview11(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading11]);

  useEffect(() => {
    if (isLoading12)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading12(false);
        setOverview12(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading12]);

  useEffect(() => {
    if (isLoading13)
    
    {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading13(false);
        setOverview13(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading13]);




  const handleRevert = () => {
    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  };

  function handleClick(){
    setIsLoading(true);

    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  
  }
  
  function handleClick2(){
    setIsLoading2(true);

    setOverview(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }
  
  
  function handleClick3(){
    setIsLoading3(true);

    setOverview(true);
    setOverview2(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }
  

  function handleClick4(){
    setIsLoading4(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick5(){
    setIsLoading5(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick6(){
    setIsLoading6(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick7(){
    setIsLoading7(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick8(){
    setIsLoading8(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick9(){
    setIsLoading9(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick10(){
    setIsLoading10(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview11(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick11(){
    setIsLoading11(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview12(true);
    setOverview13(true);
  }


  function handleClick12(){
    setIsLoading12(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview13(true);
  }


  function handleClick13(){
    setIsLoading13(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
    setOverview8(true);
    setOverview9(true);
    setOverview10(true);
    setOverview11(true);
    setOverview12(true);
  }



  return (
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
        { isLoading ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview ? (
  <div>
    <p className="image-label"> APOS Post 1 Year Eval English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_1_Year_E}
    alt="APOS 1 year eval English"
    onClick={handleClick}
  />
  </div>
  ) :
        <div>

          <iframe  ref={imageRef} title="APOS 1 year eval English" id="APOS 1 year eval English" style={{"border":"1px"}} src={post_1_year_e_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading2 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview2 ? (
  <div>
    <p className="image-label"> APOS Post 1 Year Eval Spanish </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_1_Year_S}
    alt="APOS 1 year eval Spanish"
    onClick={handleClick2}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS 1 year eval Spanish" id="APOS 1 year eval Spanish" style={{"border":"1px"}} src={post_1_year_s_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">

  { isLoading3 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview3 ? (
  <div>
    <p className="image-label"> APOS Evaulation English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Eval_E}
    alt="APOS Eval_E"
    onClick={handleClick3}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Eval form english" id="APOS Eval form english" style={{"border":"1px"}} src={eval_e} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
     { isLoading4 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview4 ? (
  <div>
    <p className="image-label"> APOS Evaulation Spanish </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Eval_S}
    alt="APOS Eval_S"
    onClick={handleClick4}
  />
  </div>
  ) :
        <div>
          <iframe  ref={imageRef} title="APOS Eval form Spanish" id="APOS Eval form Spanish" style={{"border":"1px"}} src={eval_s} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading5 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview5 ? (
  <div>
    <p className="image-label"> APOS Fitting Form English</p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Fitting_E}
    alt="APOS Fitting SO E"
    onClick={handleClick5}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Fitting SO E" id="APOS Fitting SO E" style={{"border":"1px"}} src={fitting_e} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading6 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview6 ? (
  <div>
    <p className="image-label"> APOS Fitting Form Spanish</p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Fitting_S}
    alt="APOS Fitting SO S"
    onClick={handleClick6}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Fitting SO S" id="APOS Fitting SO S" style={{"border":"1px"}} src={fitting_s} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading7 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview7 ? (
  <div>
    <p className="image-label"> APOS Treatment Plan Form English </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_TP_E}
    alt="APOS Treatment plan English"
    onClick={handleClick7}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Treatment Plan English" id="APOS Treatment Plan English" style={{"border":"1px"}} src={APOS_TP_E_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading8 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview8 ? (
  <div>
    <p className="image-label"> APOS Treatment Plan Form Spanish </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_TP_S}
    alt="APOS Treatment plan Spanish"
    onClick={handleClick8}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Treatment Plan Spanish" id="APOS Treatment Plan Spanish" style={{"border":"1px"}} src={APOS_TP_S_pdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading9 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview9 ? (
  <div>
    <p className="image-label"> APOS New Patient Intake Form </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Intake}
    alt="APOS New Patient Intake Form"
    onClick={handleClick9}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS New Patient Intake Form" id="APOS New Patient Intake Form" style={{"border":"1px"}} src={new_intake} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading10 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview10 ? (
  <div>
    <p className="image-label"> APOS Follow up Form </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_FU}
    alt="APOS Follow up Form"
    onClick={handleClick10}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Follow up Form" id="APOS Follow up Form" style={{"border":"1px"}} src={follow_up} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading11 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview11 ? (
  <div>
    <p className="image-label"> APOS Pick up sign off Form </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_PUSO}
    alt="APOS Pick up sign off Form"
    onClick={handleClick11}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS PUSO Form" id="APOS Follow up Form" style={{"border":"1px"}} src={puso} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

        <div className="image-container">
        { isLoading12 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview12 ? (
  <div>
    <p className="image-label"> APOS New Patient Questionaire Form </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_new_Questionaire}
    alt="APOS New Patient Questionaire Form"
    onClick={handleClick12}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS New Patient Questionaire Form" id="APOS New Patient Questionaire Form" style={{"border":"1px"}} src={new_pt_questionaire} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>
        
        <div className="image-container">
        { isLoading13 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): ( overview13 ? (
  <div>
    <p className="image-label"> APOS Checklist Form </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    ref={imageRef}
    src={APOS_Checklist}
    alt="APOS Checklist Form"
    onClick={handleClick13}
  />
  </div>
  ) :
        <div>
          <iframe ref={imageRef} title="APOS Checklist Form" id="APOS Checklist Form" style={{"border":"1px"}} src={checklist} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5" onClick={handleRevert}>Close</button>
        </div>
        )}
        </div>

      </div>
    </div>
  );
}


export default APOSPDF

// { overview13 ? (
//   <div>
//     <p className="image-label"> APOS Checklist Form </p>
//   <img
//     className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
//     src={APOS_Checklist}
//     alt="APOS Checklist Form"
//     onClick={handleClick13}
//   />
//   </div>
//   ) :
//         <div>
//           <iframe title="APOS Checklist Form" id="APOS Checklist Form" style={{"border":"1px"}} src={checklist} frameborder="1" height="450" width="450"></iframe>
//             <button className="close mt-5" onClick={handleClick13}>Close</button>
//         </div>
//         }