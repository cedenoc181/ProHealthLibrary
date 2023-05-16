import React from 'react'
import empire from "./Auth-Images/Auth-Empire.jpg"
import metroPlus from "./Auth-Images/Auth-MetroPlus.jpg"
import orthonet from "./Auth-Images/Auth-Orthonet.jpg"
import palladian from "./Auth-Images/Auth-Palladian.jpg"


function AuthPDF() {



  return (
    <div className="bg-gray-100 w-fill h-screen">
<div className="container">
      <div className="grid flex justify-center">
        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
            src={empire}
            alt="Empire"
          />
          <p className="image-label"> Empire Blue Cross Blue Shield Auth</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={metroPlus}
            alt="MetroPlus"
          />
          <p className="image-label"> MetroPlus Auth</p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={orthonet}
            alt="orthonet"
          />
          <p className="image-label"> Orthonet Auth </p>
        </div>

        <div className="image-container">
          <img
            className="img-thumbnail shadow-2xl hover:border-blue-700 cursor-pointer"
            src={palladian}
            alt="palladian"
          />
          <p className="image-label"> palladian Auth</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AuthPDF