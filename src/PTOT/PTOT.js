import React from 'react'
import PTOTPDF from "./PTOTPDF"

function PTOT() {
  return (
    <div className="bg-gray-100 w-fill h-screen">

<div className="Prompt">
      <p>
         PDF's below are all avaible PDFS regarding Physical and Occupational Therapy regarding new patitent intakes 
         and returning patient intakes in both english and spanish.
      </p>
</div>

<div className="pdf-display">
    <PTOTPDF />
</div>

    </div>
  )
}

export default PTOT