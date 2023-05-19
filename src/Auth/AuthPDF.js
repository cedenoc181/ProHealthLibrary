import React, { useState, useRef, useEffect } from "react";
import { FallingLines } from  'react-loader-spinner';
// jpg imports below
import empire from "./Auth-Images/Auth-Empire.jpg";
import metroPlus from "./Auth-Images/Auth-MetroPlus.jpg";
import orthonet from "./Auth-Images/Auth-Orthonet.jpg";
import palladian from "./Auth-Images/Auth-Palladian.jpg";
// pdf imports below
import empirePdf from "./Auth-files/Auth-Empire.pdf";
import metroPlusPdf from "./Auth-files/Auth-MetroPlus.pdf";
import orthonetPdf from "./Auth-files/Auth-Orthonet.pdf";
import palladianPdf from "./Auth-files/Auth-Palladian.pdf";

function AuthPDF() {
  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);


  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4,setIsLoading4] = useState(false);

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




  const handleRevert = () => {
    setOverview(true);
    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
  };


  function handleClick() {
    setIsLoading(true);

    setOverview2(true);
    setOverview3(true);
    setOverview4(true);
  }

  function handleClick2() {
    setIsLoading2(true);

    setOverview(true);
    setOverview3(true);
    setOverview4(true);
  }

  function handleClick3() {
    setIsLoading3(true);

    setOverview(true);
    setOverview2(true);
    setOverview4(true);
  }

  function handleClick4() {
    setIsLoading4(true);

    setOverview(true);
    setOverview2(true);
    setOverview3(true);
  }

  return (
    <div className="bg-gray-100 w-fill h-screen mb-10">
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
                <p className="image-label">
                  {" "}
                  Empire Blue Cross Blue Shield Auth
                </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={empire}
                  alt="Empire"
                  onClick={handleClick}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="Empire"
                  id="Empire"
                  style={{ border: "1px" }}
                  src={empirePdf}
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
                <p className="image-label"> MetroPlus Auth </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={metroPlus}
                  alt="MetroPlus"
                  onClick={handleClick2}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="MetroPlus"
                  id="metroplus"
                  style={{ border: "1px" }}
                  src={metroPlusPdf}
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
                <p className="image-label"> Orthonet Auth</p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={orthonet}
                  alt="orthonet"
                  onClick={handleClick3}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="orthonet"
                  id="orthonet"
                  style={{ border: "1px" }}
                  src={orthonetPdf}
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
                <p className="image-label"> Palladian Auth </p>
                <img
                  className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                  src={palladian}
                  alt="palladian"
                  onClick={handleClick4}
                />
              </div>
            ) : (
              <div>
                <iframe
                  title="palladian"
                  id="palladian"
                  style={{ border: "1px" }}
                  src={palladianPdf}
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

export default AuthPDF;
