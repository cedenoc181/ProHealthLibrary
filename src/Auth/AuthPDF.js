import React from 'react'
// import { Viewer } from '@react-pdf-viewer/core';
import AFAPOS from "./Auth-files/all forms 2022.pdf"

// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function AuthPDF() {
  // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="bg-gray-100 w-fill h-screen">
<iframe id="fred" style={{border:"1px"}} title="PDF in an i-Frame" src={AFAPOS} frameborder="1" scrolling="auto" height="1100" width="850" ></iframe>

{/* <Viewer
    fileUrl={AFAPOS}
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance
      
    ]}
/> */}

    </div>
  )
}

export default AuthPDF