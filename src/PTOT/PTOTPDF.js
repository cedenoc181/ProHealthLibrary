import React, { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
// jpg imports
import intake_E_cover from "./PTOT-Images/PTOT-Intake-E-cover.jpg";
import intake_S_cover from "./PTOT-Images/PTOT-Intake-S-cover.jpg";
import R_intake_E_cover from "./PTOT-Images/PTOT-R-Intake-E-cover.jpg";
import R_intake_S_cover from "./PTOT-Images/PTOT-R-Intake-S-cover.jpg";
import Hf_Acknowledgement_cover from "./PTOT-Images/PTOT-HF-Acknowledgement.jpg"
import Hf_Acknowledgement_S_cover from "./PTOT-Images/PTOT-HF-Acknowledgement-Spanish.jpg"


// pdf imports
import intake_E_pdf from "./PTOT-files/PTOT-Intake-E.pdf";
import intake_S_pdf from "./PTOT-files/PTOT-Intake-S.pdf";
import R_intake_E_pdf from "./PTOT-files/PTOT-R-Intake-E.pdf";
import R_intake_S_pdf from "./PTOT-files/PTOT-R-Intake-S.pdf";
import Pt_Acknowledgement_PDF from "./PTOT-files/PTOT-HF-Acknowledgement.pdf"
import Pt_Acknowledgement_S_PDF from "./PTOT-files/PTOT-HF-Acknowledgement-Spanish.pdf"

function PTOTPDF() {
  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);
  const [overview5, setOverview5] = useState(true);
  const [overview6, setOverview6] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);

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



  const handleRevert = () => {
    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
  };

  function handleClick() {
    setIsLoading(true);

    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
  }

  function handleClick2() {
    setIsLoading2(true);

    setOverview(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
  }

  function handleClick3() {
    setIsLoading3(true);

    setOverview(true);
    setOverview2(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
  }

  function handleClick4() {
    setIsLoading4(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview5(true);
    setOverview6(true);
  }

  function handleClick5() {
    setIsLoading5(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview6(true);
  }

  function handleClick6() {
    setIsLoading6(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
  }


  return (
    <div className="container">
      <div className="grid">
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
              <p className="image-label">Intake English</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={intake_E_cover}
                alt="Intake English"
                onClick={handleClick}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="Intake English"
                id="Intake-English"
                style={{ border: "1px" }}
                src={intake_E_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleRevert}>
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
              <p className="image-label">Intake Spanish</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={intake_S_cover}
                alt="Intake Spanish"
                onClick={handleClick2}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="Intake Spanish"
                id="Intake-Spanish"
                style={{ border: "1px" }}
                src={intake_S_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleRevert}>
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
              <p className="image-label">Returning Intake English</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={R_intake_E_cover}
                alt="Returning Intake English"
                onClick={handleClick3}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="Returning Intake English"
                id="Returning-Intake-English"
                style={{ border: "1px" }}
                src={R_intake_E_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleRevert}>
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
              <p className="image-label">Returning Intake Spanish</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={R_intake_S_cover}
                alt="Returning Intake Spanish"
                onClick={handleClick4}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="Returning Intake Spanish"
                id="Returning-Intake-Spanish"
                style={{ border: "1px" }}
                src={R_intake_S_pdf}
                frameborder="1"
                height="450"
                width="450"
              >
                Returning Intake Spanish
              </iframe>
              <button className="close mt-5 " onClick={handleRevert}>
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
              <p className="image-label"> HF Acknowledgement</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={Hf_Acknowledgement_cover}
                alt="HF Beneficiary Acknowledgement form"
                onClick={handleClick5}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="HF Beneficiary Acknowledgement form"
                id="HF-Beneficiary-Acknowledgement-form"
                style={{ border: "1px" }}
                src={Pt_Acknowledgement_PDF}
                frameborder="1"
                height="450"
                width="450"
              >
                HF Acknowledgement
              </iframe>
              <button className="close mt-5 " onClick={handleRevert}>
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
              <p className="image-label"> HF Acknowledgement Spanish</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={Hf_Acknowledgement_S_cover}
                alt="HF Beneficiary Acknowledgement Spanish form"
                onClick={handleClick6}
              />
            </div>
          ) : (
            <div>
              <iframe
                title="HF Beneficiary Acknowledgement Spanish form"
                id="HF-Beneficiary-Acknowledgement-Spanish-form"
                style={{ border: "1px" }}
                src={Pt_Acknowledgement_S_PDF}
                frameborder="1"
                height="450"
                width="450"
              >
                HF Acknowledgement Spanish
              </iframe>
              <button className="close mt-5 " onClick={handleRevert}>
                Close
              </button>
            </div>
          )}
        </div>



      </div>
    </div>
  );
}

export default PTOTPDF;
