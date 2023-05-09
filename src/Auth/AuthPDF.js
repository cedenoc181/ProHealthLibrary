import React from 'react'
import AFAPOS from "./Auth-files/all forms 2022.pdf"


function AuthPDF() {

  return (
    <div className="bg-gray-100 w-fill h-screen">
<iframe id="fred" style={{border:"1px"}} title="PDF in an i-Frame" src={AFAPOS} frameborder="1" scrolling="auto" height="100%" width="100%" ></iframe>

    </div>
  )
}

export default AuthPDF