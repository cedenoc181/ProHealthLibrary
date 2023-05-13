import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import  intake_E from "./PTOT-files/PTOT-Intake-E.pdf"
// import  intake_S from "./PTOT-files/PTOT-Intake-S.pdf"
// import  R_intake_E from "./PTOT-files/PTOT-R-Intake-E.pdf"
// import  R_intake_S from "./PTOT-files/PTOT-R-Intake-S.pdf"

// import ptot1 from "./PTOT-files/PTOT-Intake-S.pdf";
// import ptot2 from "./PTOT-files/PTOT-Intake-E.pdf";
// import ptot3 from "./PTOT-files/PTOT-R-Intake-S.pdf";
// import ptot4 from "./PTOT-files/PTOT-R-Intake-E.pdf";
// import img1 from "./PTOT-Images/PTOT-Intake-S-cover.jpg"
// import img2 from "./PTOT-Images/PTOT-Intake-E-cover.jpg"
// import img3 from "./PTOT-Images/PTOT-R-Intake-S-cover.jpg"
// import img4 from "./PTOT-Images/PTOT-R-Intake-E-cover.jpg"

function PTOTPDF() {
  // const data = [ ptot1, ptot2, ptot3, ptot4 ]
  // const cover = [ img1, img2, img3, img4 ]

  const obj = [
    {
      id: 1,
      PDF_path: "./PTOT-files/PTOT-Intake-E.pdf",
      Document_Title: "PT & OT Intake English",
      Image_path: "./PTOT-Images/PTOT-Intake-E-cover.jpg",
    },

    {
      id: 2,
      PDF_path: "./PTOT-files/PTOT-Intake-S.pdf",
      Document_Title: "PT & OT Intake Spanish",
      Image_path: "./PTOT-Images/PTOT-Intake-S-cover.jpg",
    },
    {
      id: 3,
      PDF_path: "./PTOT/PTOT-files/PTOT-R-Intake-E.pdf",
      Document_Title: "PT & OT Returning Intake English",
      Image_path: "./PTOT-Images/PTOT-R-Intake-E-cover.jpg",
    },
    {
      id: 4,
      PDF_path: "./PTOT-files/PTOT-R-Intake-S.pdf",
      Document_Title: "PT & OT Returining Intake Spanish",
      Image_path: "./PTOT-Images/PTOT-R-Intake-S-cover.jpg",
    },
  ];

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // const myJSON = JSON.stringify(data.PDF_path);
  // const PDFimages = data.Image_path;

  // console.log(data.Image_path);
  // console.log(myJSON);
  // const obj = [
  //   {
  //     "id" : 1,
  //     "PDF_path" : "./PTOT-files/PTOT-Intake-E.pdf",
  //     "Document_Title" : "PT & OT Intake English",
  //     "Image_path" : "./PTOT-Images/PTOT-Intake-E-cover.jpg"
  //   },
  //   {
  //     "id" : 2,
  //     "PDF_path" : "./PTOT-files/PTOT-Intake-S.pdf",
  //     "Document_Title" : "PT & OT Intake Spanish",
  //     "Image_path" : "./PTOT-Images/PTOT-Intake-S-cover.jpg"
  //   },
  //   {
  //     "id" : 3,
  //     "PDF_path" : "./PTOT-files/PTOT-R-Intake-E.pdf",
  //     "Document_Title" : "PT & OT Returning Intake English",
  //     "Image_path" : "./PTOT-Images/PTOT-R-Intake-E-cover.jpg"
  //   },
  //   {
  //     "id" : 4,
  //     "PDF_path" : "./PTOT-files/PTOT-R-Intake-S.pdf",
  //     "Document_Title" : "PT & OT Returning Intake Spanish",
  //     "Image_path" : "./PTOT-Images/PTOT-R-Intake-S-cover.jpg"
  //   }
  // ];

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [selectedPDF, setSelectedPDF] = useState(null);

  // function onDocumentSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  // function handleImageClick(pdfPath) {
  //   setSelectedPDF(pdfPath);
  // }
  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* {data.map((data) => ( */}
      <div class="img-thumbnail">
        <p></p>
        <img src="" alt="docs" />
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
      </div>
      {/* ))} */}
    </div>
  );
}
      // {/* {selectedPDF && (
        // <div className="row mt-4">
          // <div className="col">
            // <Document
              // file={selectedPDF}
              // onLoadSuccess={onDocumentSuccess}
            // >
              // <Page
                // pageNumber={pageNumber}
                // renderTextLayer={false}
                // renderAnnotationLayer={false}
                // customTextRenderer={false}
              // />
            // </Document>
            // <p className="text-center mt-3">
              //  Page {pageNumber} of {numPages} 
            // </p>
          // </div>
        // </div>
      // )} */}

export default PTOTPDF;
