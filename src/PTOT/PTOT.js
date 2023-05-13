import React from 'react'
import PTOTPDF from "./PTOTPDF"
import "./PTOT.css"

// i may have pass down data without putting it in a bracket so data might not be accurate 
function PTOT() {
  // console.log(pdfArray.pdfArray);
  return (
<div className="ptot bg-gray-100 w-fill h-screen">

    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Physical and Occupational Therapy PDF's regarding new patient intakes 
             and returning patient intakes in both english and spanish.
          </p>
    </div>

  <div className="pdf-display">
  <PTOTPDF />
    {/* {pdfArray.pdfArray.map((data) =>(
            <PTOTPDF key={pdfArray.id} data={data}/>
            ))} */}
   </div>
 </div>
  )
}

export default PTOT