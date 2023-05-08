import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import APOSTP from "./APOS-files/APOS-TP.pdf"

function APOSPDF() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess({numPages}) {
    setNumPages(numPages)
    }

  return (
    <div className="bg-gray-100 w-fill h-screen">
  <Document file={APOSTP} onLoadSuccess={onDocumentSuccess}>
    <Page 
    pageNumber={pageNumber}
    renderTextLayer={false}
    renderAnnotationLayer={false}
    customTextRenderer={false}
    />
  </Document>
  <p className="flex justify-evenly">
    Page {pageNumber} of {numPages}
    </p> 

    </div>
  )
}

export default APOSPDF