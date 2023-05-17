import React, {useState} from 'react'
// jpg imports below
import empire from "./Auth-Images/Auth-Empire.jpg"
import metroPlus from "./Auth-Images/Auth-MetroPlus.jpg"
import orthonet from "./Auth-Images/Auth-Orthonet.jpg"
import palladian from "./Auth-Images/Auth-Palladian.jpg"
// pdf imports below 
import empirePdf from "./Auth-files/Auth-Empire.pdf"
import metroPlusPdf from "./Auth-files/Auth-MetroPlus.pdf"
import orthonetPdf from "./Auth-files/Auth-Orthonet.pdf"
import palladianPdf from "./Auth-files/Auth-Palladian.pdf"


function AuthPDF() {

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
<div className="bg-gray-100 w-fill h-screen mb-10">
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
          { overview ? (
          <div>
            <p className="image-label"> Empire Blue Cross Blue Shield Auth</p>
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={empire}
            alt="Empire"
            onClick={handleClick}
          />
          </div>
          ) :
                <div>
                  <iframe title="Empire" id="Empire" style={{"border":"1px"}} src={empirePdf} frameborder="1" height="450" width="450"></iframe>
                    <button className="close mt-5 flex align-center justify-center" onClick={handleClick}>Close</button>
                </div>
                }
          
        </div>

        <div className="image-container">
                   { overview2 ? (
             <div>
               <p className="image-label"> MetroPlus Auth </p>
             <img
               className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
               src={metroPlus}
               alt="MetroPlus"
               onClick={handleClick2}
             />
             </div>
             ) :
                   <div>
                     <iframe title="MetroPlus" id="metroplus" style={{"border":"1px"}} src={metroPlusPdf} frameborder="1" height="450" width="450"></iframe>
                       <button className="close mt-5 flex align-center justify-center" onClick={handleClick2}>Close</button>
                   </div>
                   }
        </div>

        <div className="image-container">
        { overview3 ? (
      <div>
       <p className="image-label"> Orthonet Auth</p>
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={orthonet}
            alt="orthonet"
            onClick={handleClick3}
          />
          </div>
          ) :
        <div>
          <iframe title="orthonet" id="orthonet" style={{"border":"1px"}} src={orthonetPdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick3}>Close</button>
        </div>
        }
        </div>

        <div className="image-container">
        { overview4 ? (
  <div>
    <p className="image-label"> Palladian Auth </p>
  <img
    className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
    src={palladian}
    alt="palladian"
    onClick={handleClick4}
  />
  </div>
  ) :
        <div>
          <iframe title="palladian" id="palladian" style={{"border":"1px"}} src={palladianPdf} frameborder="1" height="450" width="450"></iframe>
            <button className="close mt-5 flex align-center justify-center" onClick={handleClick4}>Close</button>
        </div>
        }
        </div>
    </div>
    </div>
    </div>
  )
              }

export default AuthPDF