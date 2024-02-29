import { useState } from "react";
import { Document, Page } from "react-pdf";

function Pdf({ epcFile }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const viewPdfInSeparateWindow = () => {
    window.open(epcFile, "_blank");
  };

  return (
    <div className="w-full max-w-[50vw]">
      <button
        className="bg-[#152347] text-white p-vw rounded-md text-center"
        onClick={viewPdfInSeparateWindow}
      >
        View EPC
      </button>
    </div>
  );
}

export default Pdf;
