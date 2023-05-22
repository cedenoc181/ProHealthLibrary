import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ortho from "./Home-pdf/Orthonet-authform.pdf"

function Authhome() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
  
    function onDocumentSuccess({numPages}) {
      setNumPages(numPages)
      }

      function nextPage (){
        if (numPages > pageNumber){

            setPageNumber(pageNumber + 1)
        }
        
      }

      function prevPage (){
        if(pageNumber >= 2) {

            setPageNumber(pageNumber - 1)
        
        }
      }




  return (
    <div>

<div>
        <a href="/Auth">
          <button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">
            Authorization PDF
          </button>
        </a>
        <Document file={ortho} onLoadSuccess={onDocumentSuccess}>
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
    <button className="" onClick={nextPage}>Next Page</button>
    <button className="" onClick={prevPage}>Previous Page</button>
      </div>





    </div>
  )
}

export default Authhome