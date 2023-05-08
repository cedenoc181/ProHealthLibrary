import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import RIntake from "./PTOT-files/RIntake.pdf"
// import SRIntake from "./PTOT-files/SRIntake.pdf"


function PTOTPDF() {
const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);

function onDocumentSuccess({numPages}) {
setNumPages(numPages)
}

  return (
 <div class="img-thumbnail">
  <Document file={RIntake} onLoadSuccess={onDocumentSuccess}>
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

export default PTOTPDF