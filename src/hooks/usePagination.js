import { use } from "react";
import { useState, useMemo } from "react";


// Manage the Current Page State//
const usePagination = ({ totalItems, itemsPerPage = 10, initalPage = 1}) => {
  // will calculate total pages--Math.max ensures at last 1 page, even if totalItems is 0.
  // Math.ceil(totalItems / itemsPerPage) computes totalPages --- 123 pages with 10 per page = 13 pages//
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
// ensuring initalPage is valid//
  const validInitialPage = Math.max(1, Math.min(initalPage, totalPages));
  // state for the current page//
  const [currentPage, setCurrentPage] = useState(validInitialPage);


  // Calculate Pagination Indices//
  const { startIndex, endIndex, itemsOnCurrentPage } = useMemo (() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage - 1, totalItems - 1);
    const itemsOnPage = totalItems > 0 ? end - start + 1 : 0;


  return {
    startIndex: start,
    endIndex: end,
    itemsOnCurrentPage: itemsOnPage,

  };
}, [currentPage, itemsPerPage, totalItems]);


// Implement Navigation Functions//
// create setPage, nextPage, prevPage//
const setPage = (page) => {
  const newPage = Math.max(1, Math.min(page, totalPages));
  setCurrentPage(newPage);
};

const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (!currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// navigation booleans//
// canNextPage: True if currentPage < totalPages.//
// canPrevPage: True if currentPage > 1 //
const canNextPage = currentPage < totalPages;
const canPrevPage = currentPage > 1;

// return the hook's api---return all values and functions//
return {
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  itemsOnCurrentPage,
  setPage,
  nextPage,
  prevPage,
  canNextPage,
  canPrevPage,
};

// handle edge cases//
// zero items: totalPages is 1, startIndex and endIndex are 0, itemsOnCurrentPage is 0.
// invalid initalPage: "clamped" to the right or valid range.//
// last page: this will correctly show fewer items if partial..//



};
export default usePagination;
