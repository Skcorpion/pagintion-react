import React from 'react';
import PageBtn from '../PageBtn/PageBtn';

const PaginationPages = ({ pageChange, currentPage, pages }) => {
  const startSlice = currentPage < 3 ? 1 : currentPage - 2;
  const endSlice = currentPage > pages - 2 ? pages - 1 : currentPage + 1;

  const listOfPages = [...Array(pages).keys()]
    .slice(startSlice, endSlice)
    .map((page) => (
      <PageBtn key={page} page={page} currentPage={currentPage} />
    ));

  return (
    <div className="pagination-pages" onClick={pageChange}>
      <button disabled={currentPage === 1} type="button">
        prev
      </button>
      <PageBtn page={0} currentPage={currentPage} />

      <span hidden={!(currentPage > 3)}>...</span>
      {listOfPages}
      <span hidden={!(currentPage < pages - 2)}>...</span>
      <PageBtn page={pages - 1} currentPage={currentPage} />

      <button disabled={currentPage === pages} type="button">
        next
      </button>
    </div>
  );
};

export default PaginationPages;
