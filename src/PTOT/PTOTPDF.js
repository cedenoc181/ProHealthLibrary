import React, { useState } from "react";
// jpg imports
import intake_E_cover from "./PTOT-Images/PTOT-Intake-E-cover.jpg";
import intake_S_cover from "./PTOT-Images/PTOT-Intake-S-cover.jpg";
import R_intake_E_cover from "./PTOT-Images/PTOT-R-Intake-E-cover.jpg";
import R_intake_S_cover from "./PTOT-Images/PTOT-R-Intake-S-cover.jpg";

// pdf imports
import intake_E_pdf from "./PTOT-files/PTOT-Intake-E.pdf";
import intake_S_pdf from "./PTOT-files/PTOT-Intake-S.pdf";
import R_intake_E_pdf from "./PTOT-files/PTOT-R-Intake-E.pdf";
import R_intake_S_pdf from "./PTOT-files/PTOT-R-Intake-S.pdf";

function PTOTPDF() {
  const [overview, setOverview] = useState(true);
  const [overview2, setOverview2] = useState(true);
  const [overview3, setOverview3] = useState(true);
  const [overview4, setOverview4] = useState(true);

  function handleClick() {
    setOverview(!overview);
  }

  function handleClick2() {
    setOverview2(!overview2);
  }

  function handleClick3() {
    setOverview3(!overview3);
  }

  function handleClick4() {
    setOverview4(!overview4);
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="image-container">
          {overview ? (
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
                id="Intake English"
                style={{ border: "1px" }}
                src={intake_E_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleClick}>
                Close
              </button>
            </div>
          )}
        </div>

        <div className="image-container">
          {overview2 ? (
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
                id="Intake Spanish"
                style={{ border: "1px" }}
                src={intake_S_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleClick2}>
                Close
              </button>
            </div>
          )}
        </div>

        <div className="image-container">
          {overview3 ? (
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
                id="Returning Intake English"
                style={{ border: "1px" }}
                src={R_intake_E_pdf}
                frameborder="1"
                height="450"
                width="450"
              ></iframe>
              <button className="close mt-5" onClick={handleClick3}>
                Close
              </button>
            </div>
          )}
        </div>

        <div className="image-container">
          {overview4 ? (
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
                id="Returning Intake Spanish"
                style={{ border: "1px" }}
                src={R_intake_S_pdf}
                frameborder="1"
                height="450"
                width="450"
              >
                Returning Intake Spanish
              </iframe>
              <button className="close mt-5 " onClick={handleClick4}>
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

