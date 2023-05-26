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
    className="doc"
    pageNumber={pageNumber}
    renderTextLayer={false}
    renderAnnotationLayer={false}
    customTextRenderer={false}
    />
  </Document>
  <p className="page flex justify-evenly">
    Page {pageNumber} of {numPages}
    </p> 
    <div className="flex justify-center border-t-2">
    <button className="btn p-2 m-2 border-2 border-black rounded" onClick={prevPage}>Previous Page</button>
    <button className="btn p-2 m-2 border-2 border-black rounded" onClick={nextPage}>Next Page</button>
    </div> 
      </div>





    </div>
  )
}

export default Authhome