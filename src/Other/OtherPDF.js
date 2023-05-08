import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import FHF from "./Other-files/Fhard.pdf";

function OtherPDF() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess({numPages}) {
    setNumPages(numPages)
    }


  return (
    <div className="bg-gray-100 w-fill h-screen">

<Document file={FHF} onLoadSuccess={onDocumentSuccess}>
    <Page 
    pageNumber={pageNumber}
    renderTextLayer={false}
    renderAnnotationLayer={false}
    customTextRenderer={false}
    />
  </Document>

    <p className="flex justify-evenly border border-success w-100">
         Page {pageNumber} of {numPages}
    </p> 

    </div>
  )
}

export default OtherPDF