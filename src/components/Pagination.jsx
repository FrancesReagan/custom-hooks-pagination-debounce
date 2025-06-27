// this pagination demo component simulates a list of 123 items.//
// it uses usePagination to paginate..it shows the current page's items, 
// navigation buttons, and page info....it includes buttons to jump to specific pages.//

import React from "react";
import usePagination from "../hooks/usePagination";

const Pagination = () => {
  // this will simulate 123 items//
  const items = Array.from({ length: 123 }, (_, i)  => `Item ${i + 1}`);
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage
    
  } = usePagination({
    totalItems: items.length,
    itemsPerPage: 10,
    initialPage: 1,
});
  
  // get current page's items//
  const currentItems = items.slice(startIndex, endIndex + 1);

  return (
    <div style={{ padding: "20px"}}>
    <h2>Pagination Demo</h2>
    <p>
      Items per page: 10 | Total items: {items.length}
    </p>
    <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
     </button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={nextPage} disabled={!canNextPage}> 
        Next 
        </button> 
        </div>
     
      <p>
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page: {itemsOnCurrentPage})
      </p>

      <div>
        <p>Jump to page: </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {Array.from({ length: totalPages }, (_,i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            disabled={page === currentPage}
            style={{ margin: "0 5px" }}
            >
              {page}
            </button>
        ))}
      </div>
      </div>
    </div>

    );
  };

  export default Pagination;