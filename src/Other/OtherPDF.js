import React, { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
// jpg imports below
import Checklist from "./Others-Images/Others-APOS-Checklist-cover.jpg";
import fitting_E from "./Others-Images/Others-APOS-Fitting-SO.jpg";
import fitting_S from "./Others-Images/Others-APOS-Fitting-SO-S.jpg";
import DA_E from "./Others-Images/Others-DA-E.jpg";
import DA_S from "./Others-Images/Others-DA-S.jpg";
import FH_E from "./Others-Images/Others-FH-E.jpg";
import FH_S from "./Others-Images/Others-DA-S.jpg";
import APOS1YEAR from "./Others-Images/Others-APOS-1-year-MD-letter.jpg";
import NOT_SEEN from "./Others-Images/Others-APOS-NOT-Seen-MD-letter.jpg";
import Seen from "./Others-Images/Others-APOS-Seen-MD-letter.jpg";
import Ex_letter from "./Others-Images/Others-Excuse-Letter.jpg";
import HF_PT_Form_Cover from "./OThers-Images/Others-PTOT-HF-Acknowledgement.jpg";
import HF_PT_Form_S_Cover from "./Others-Images/Others-PTOT-HF-Acknowledgement.jpg";
import HF_APOS_Form_Cover from "./Others-Images/Others-HF-APOS-Acknowledgement.jpg";




// pdf imports below
import checklistPdf from "./Other-files/Others-APOS-Checklist.pdf";
import fitting_E_pdf from "./Other-files/Others-APOS-Fitting-SO.pdf";
import fitting_S_pdf from "./Other-files/Others-APOS-Fitting-SO-S.pdf";
import directAccess_E from "./Other-files/Others-DA.pdf";
import directAccess_S from "./Other-files/Others-DA-S.pdf";
import FinancialH from "./Other-files/Others-FH.pdf";
import FinancialH_S from "./Other-files/Others-FH-S.pdf";
import HF_PT_form from "./Other-files/Others-PTOT-HF-Acknowledgement.pdf";
import HF_PT_S_form from "./Other-files/Others-PTOT-HF-Acknowledgement.pdf";
import HF_APOS_form from "./Other-files/Others-APOS-HF-Acknowledgement.pdf";




// Doc imports below 
import Post_year_md_letter from "./Other-files/Others-APOS-1-Year-MD-letter.docx";
import Seen_md_letter from "./Other-files/Others-APOS-Seen-MD-letter.docx";
import Not_Seen_md_letter from "./Other-files/Others-APOS-Not-Seen-MD-letter.docx";
import Excuse_letter from "./Other-files/Others-Excuse-Letter.docx";


function OtherPDF() {
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
  const [overview14, setOverview14] = useState(true);



  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);
  const [isLoading7, setIsLoading7] = useState(false);
  const [isLoading8, setIsLoading8] = useState(false);
  const [isLoading9, setIsLoading9] = useState(false);
  const [isLoading10, setIsLoading10] = useState(false);
  const [isLoading11, setIsLoading11] = useState(false);
  const [isLoading12, setIsLoading12] = useState(false);
  const [isLoading13, setIsLoading13] = useState(false);
  const [isLoading14, setIsLoading14] = useState(false);






  useEffect(() => {
    if (isLoading) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        setOverview(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading2) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading2(false);
        setOverview2(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading2]);

  useEffect(() => {
    if (isLoading3) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading3(false);
        setOverview3(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading3]);

  useEffect(() => {
    if (isLoading4) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading4(false);
        setOverview4(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading4]);

  useEffect(() => {
    if (isLoading5) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading5(false);
        setOverview5(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading5]);

  useEffect(() => {
    if (isLoading6) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading6(false);
        setOverview6(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading6]);

  useEffect(() => {
    if (isLoading7) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading7(false);
        setOverview7(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading7]);



  useEffect(() => {
    if (isLoading8) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading8(false);
        setOverview8(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading8]);


  useEffect(() => {
    if (isLoading9) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading9(false);
        setOverview9(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading9]);


  useEffect(() => {
    if (isLoading10) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading10(false);
        setOverview10(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading10]);



  useEffect(() => {
    if (isLoading11) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading11(false);
        setOverview11(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading11]);



  useEffect(() => {
    if (isLoading12) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading12(false);
        setOverview12(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading12]);


  useEffect(() => {
    if (isLoading13) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading13(false);
        setOverview13(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading13]);


  useEffect(() => {
    if (isLoading14) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading14(false);
        setOverview14(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading14]);





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
    setOverview14(true);
  };

  function handleClick() {
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
    setOverview14(true);
  }

  function handleClick2() {
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
    setOverview14(true);
  }

  function handleClick3() {
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
    setOverview14(true);
  }

  function handleClick4() {
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
    setOverview14(true);
  }

  function handleClick5() {
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
    setOverview14(true);
  }

  function handleClick6() {
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
    setOverview14(true);
  }

  function handleClick7() {
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
    setOverview14(true);
  }


  function handleClick8() {
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
    setOverview14(true);
  }


  function handleClick9() {
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
    setOverview14(true);
  }

  function handleClick10() {
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
    setOverview14(true);
  }

  function handleClick11() {
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
    setOverview14(true);
  }

  function handleClick12() {
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
    setOverview14(true);
  }
  

  function handleClick13() {
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
    setOverview14(true);
  }

  function handleClick14() {
    setIsLoading14(true);

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
  }



  return (
    <div className="bg-gray-100 w-fill h-screen">
      <div className="container">
        <div className="grid flex justify-center">
          <div className="image-container">
            {isLoading ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview ? (
              <div>
                <p className="image-label"> APOS Checklist </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={Checklist}
                  alt="APOS Checklist"
                  onClick={handleClick}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="checklist"
                  id="Checklist"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={checklistPdf}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading2 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview2 ? (
              <div>
                <p className="image-label"> APOS Fitting form English </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={fitting_E}
                  alt="Fitting SO"
                  onClick={handleClick2}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="fitting SO"
                  id="fitting-SO"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={fitting_E_pdf}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading3 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview3 ? (
              <div>
                <p className="image-label"> APOS Fitting form Spanish </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={fitting_S}
                  alt="Fitting SO spanish"
                  onClick={handleClick3}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="fitting SO spanish"
                  id="fitting-SO-s"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={fitting_S_pdf}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading4 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview4 ? (
              <div>
                <p className="image-label"> Direct Access Form English </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={DA_E}
                  alt="Direct Access Form English"
                  onClick={handleClick4}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Direct Access Form English"
                  id="Direct-Access"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={directAccess_E}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading5 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview5 ? (
              <div>
                <p className="image-label"> Direct Access Form Spanish </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={DA_S}
                  alt="Direct Access Form Spanish"
                  onClick={handleClick5}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Direct Access Form Spanish"
                  id="Direct-Access-S"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={directAccess_S}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading6 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview6 ? (
              <div>
                <p className="image-label">Financial Hardship Form</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={FH_E}
                  alt="Financial Hardship Form"
                  onClick={handleClick6}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Financial Hardship Form"
                  id="Financial-Hardship"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={FinancialH}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <div className="image-container">
            {isLoading7 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview7 ? (
              <div>
                <p className="image-label">Financial Hardship Form Spanish</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={FH_S}
                  alt="Financial Hardship Form Spanish"
                  onClick={handleClick7}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Financial Hardship Form Spanish"
                  id="Financial-Hardship-S"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={FinancialH_S}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

///////////////////////////////////////////////////////////////////////////////////////////////////////////
          <div className="image-container">
            {isLoading8 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview8 ? (
              <div>
                <p className="image-label">HF Beneficiary Acknowledgement</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={HF_PT_Form_Cover}
                  alt="PT HF Beneficiary Acknowledgement"
                  onClick={handleClick8}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="PT HF Beneficiary Acknowledgement"
                  id="PT-HF-Beneficiary-Acknowledgement"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={HF_PT_form}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <div className="image-container">
            {isLoading9 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview9 ? (
              <div>
                <p className="image-label">HF Beneficiary Acknowledgement Spanish</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={HF_PT_Form_S_Cover}
                  alt="HF Beneficiary Acknowledgement Spanish"
                  onClick={handleClick9}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="HF Beneficiary Acknowledgement Spanish"
                  id="HF-Beneficiary-Acknowledgement-Spanish"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={HF_PT_S_form}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}

          </div>          
          <div className="image-container">
            {isLoading10 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview10 ? (
              <div>
                <p className="image-label">APOS HF Beneficiary form</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={HF_APOS_Form_Cover}
                  alt="APOS HF Beneficiary form"
                  onClick={handleClick10}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="APOS HF Beneficiary form"
                  id="APOS-HF-Beneficiary-form"
                  style={{ border: "1px" }}
                  // add pdf here 
                  src={HF_APOS_form}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>
         
          <div className="image-container">
            {isLoading11 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview11 ? (
              <div>
                <p className="image-label">PT Excuse Letter</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={Ex_letter}
                  alt="PT Excuse Letter"
                  onClick={handleClick11}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="PT Excuse Letter"
                  id="PT-Excuse-Letter"
                  style={{ border: "1px" }}
                  // add pdf/doc here 
                  src={Excuse_letter}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="image-container">
            {isLoading12 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview12 ? (
              <div>
                <p className="image-label">Post Year MD Letter</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={APOS1YEAR}
                  alt="Post Year MD Letter"
                  onClick={handleClick12}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Post Year MD Letter"
                  id="Post-Year-MD-Letter"
                  style={{ border: "1px" }}
                  // add pdf/doc here 
                  src={Post_year_md_letter}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>


          <div className="image-container">
            {isLoading13 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview13 ? (
              <div>
                <p className="image-label">Not Seen MD Letter</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={NOT_SEEN}
                  alt="Not Seen MD Letter"
                  onClick={handleClick13}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Not Seen MD Letter"
                  id="Not-Seen-MD-Letter"
                  style={{ border: "1px" }}
                  // add pdf/doc here 
                  src={Not_Seen_md_letter}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>


          <div className="image-container">
            {isLoading14 ? (
              <FallingLines
                visible={true}
                width="100"
                ariaLabel="Falling-lines-loading"
                color="#0F659C"
              />
            ) : overview14 ? (
              <div>
                <p className="image-label">Seen MD Letter</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={Seen}
                  alt="Seen MD Letter"
                  onClick={handleClick14}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Seen MD Letter"
                  id="Seen-MD-Letter"
                  style={{ border: "1px" }}
                  // add pdf/doc here 
                  src={Seen_md_letter}
                  frameborder="1"
                  height="450"
                  width="450"
                ></iframe>
                <button
                  className="close mt-5 flex align-center justify-center"
                  onClick={handleRevert}
                >
                  Close
                </button>
              </div>
            )}
          </div>





        </div>
      </div>
    </div>
  );
}

export default OtherPDF;
