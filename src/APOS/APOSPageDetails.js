import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function APOSPageDetails() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pdfFiles)

  function onDocumentSuccess({numPages}) {
    setNumPages(numPages)
    }
  return (
    <div className="bg-gray-100 w-fill h-screen">

{/* 
<Document file="" onLoadSuccess={onDocumentSuccess}>
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
 */}






    </div>
  )
}

export default APOSPageDetails