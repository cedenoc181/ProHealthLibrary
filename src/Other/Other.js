import React from 'react'
import  OtherPDF from "./OtherPDF"

function Other() {
  return (
    <div className="bg-gray-100 w-fill h-screen">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Single page PDF's, APOS forms, direct access form, financial hardship form and more can be found here in both english and spanish.
          </p>
    </div>  



      <OtherPDF />
      
    </div>
  )
}

export default Other