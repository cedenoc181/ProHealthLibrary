import React from 'react';
import intake_E_cover from "./PTOT-Images/PTOT-Intake-E-cover.jpg"
import intake_S_cover from "./PTOT-Images/PTOT-Intake-S-cover.jpg"
import R_intake_E_cover from "./PTOT-Images/PTOT-R-Intake-E-cover.jpg"
import R_intake_S_cover from "./PTOT-Images/PTOT-R-Intake-S-cover.jpg"

function PTOTPDF() {


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
      <div className="grid">
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={intake_E_cover}
            alt="PT intake English"
          />
          <p className="image-label"> Intake English</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={intake_S_cover}
            alt="PT intake Spanish"
          />
          <p className="image-label"> Intake Spanish</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={R_intake_E_cover}
            alt="PT Returning patient intake English"
          />
          <p className="image-label">Returning patient intake English</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={R_intake_S_cover}
            alt="PT Returning patient intake Spanish"
          />
          <p className="image-label">Returning patient intake Spanish</p>
        </div>
      </div>
    </div>
  );
}


export default PTOTPDF;
