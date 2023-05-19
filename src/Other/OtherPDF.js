import React, { useState, useRef, useEffect } from "react";
import { FallingLines } from  'react-loader-spinner';
// jpg imports below
import Checklist from "./Others-Images/Others-APOS-Checklist-cover.jpg";
import fitting_E from "./Others-Images/Others-APOS-Fitting-SO.jpg";
import fitting_S from "./Others-Images/Others-APOS-Fitting-SO-S.jpg";
import DA_E from "./Others-Images/Others-DA-E.jpg";
import DA_S from "./Others-Images/Others-DA-S.jpg";
import FH_E from "./Others-Images/Others-FH-E.jpg";
import FH_S from "./Others-Images/Others-DA-S.jpg";
// pdf imports below
import checklistPdf from "./Other-files/Others-APOS-Checklist.pdf";
import fitting_E_pdf from "./Other-files/Others-APOS-Fitting-SO.pdf";
import fitting_S_pdf from "./Other-files/Others-APOS-Fitting-SO-S.pdf";
import directAccess_E from "./Other-files/Others-DA.pdf";
import directAccess_S from "./Other-files/Others-DA-S.pdf";
import FinancialH from "./Other-files/Others-FH.pdf";
import FinancialH_S from "./Other-files/Others-FH-S.pdf";

function OtherPDF() {
  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);
  const [overview5, setOverview5] = useState(true);
  const [overview6, setOverview6] = useState(true);
  const [overview7, setOverview7] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4,setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);
  const [isLoading7, setIsLoading7] = useState(false);

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


  const handleRevert = () => {
    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
  };









  function handleClick() {
    setIsLoading(true);

    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
  }

  function handleClick2() {
    setIsLoading2(true);

    setOverview(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
  }

  function handleClick3() {
    setIsLoading3(true);

    setOverview(true);
    setOverview2(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
  }

  function handleClick4() {
    setIsLoading4(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview5(true);
    setOverview6(true);
    setOverview7(true);
  }

  function handleClick5() {
    setIsLoading5(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview6(true);
    setOverview7(true);
  }

  function handleClick6() {
    setIsLoading6(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview7(true);
  }

  function handleClick7() {
    setIsLoading7(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
    setOverview5(true);
    setOverview6(true);
  }

  return (
    <div className="bg-gray-100 w-fill h-screen">
      <div className="container">
        <div className="grid flex justify-center">
          <div className="image-container">
            {isLoading ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview ? (
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
            ))}
          </div>

          <div className="image-container">
            {isLoading2 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview2 ? (
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
                  id="fitting SO"
                  style={{ border: "1px" }}
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
            ))}
          </div>

          <div className="image-container">
            {isLoading3 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview3 ? (
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
                  id="fitting SO spanish"
                  style={{ border: "1px" }}
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
            ))}
          </div>

          <div className="image-container">
            {isLoading4 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview4 ? (
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
                  id="Direct Access Form English"
                  style={{ border: "1px" }}
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
            ))}
          </div>

          <div className="image-container">
            {isLoading5 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview5 ? (
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
                  id="Direct Access Form Spanish"
                  style={{ border: "1px" }}
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
            ))}
          </div>

          <div className="image-container">
            {isLoading6 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview6 ? (
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
                  id="Financial Hardship Form"
                  style={{ border: "1px" }}
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
            ))}
          </div>
          <div className="image-container">
            {isLoading7 ? ( <FallingLines
  visible={true}
  width="100"
  ariaLabel="Falling-lines-loading"
  color = '#0F659C'
/>): (overview7 ? (
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
                  id="Financial Hardship Form Spanish"
                  style={{ border: "1px" }}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPDF;
