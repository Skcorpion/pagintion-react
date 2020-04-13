import React from 'react';
import { Link } from 'react-router-dom';
import PageLink from './PageLink';
// import classNames from 'classnames';

const Pagination = ({
  total,
  perPage,
  currentPage,

  selectPerPage,
  onPerPageChange,
}) => {
  const pages = Math.ceil(total / perPage);
  const startSlice = currentPage < 3 ? 1 : currentPage - 2;
  const endSlice = currentPage > pages - 2 ? pages - 1 : currentPage + 1;

  const listOfPages = [...Array(pages).keys()]
    .slice(startSlice, endSlice)
    .map((page) => (
      <li key={page}>
        <PageLink page={page} currentPage={currentPage} perPage={perPage} />
      </li>
    ));

  const listOfOption = selectPerPage.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  return (
    <>
      <select value={perPage} onChange={(event) => onPerPageChange(event)}>
        {listOfOption}
      </select>
      <ul className="pagination-pages">
        <li>
          <Link
            to={`/pagination?page=${
              currentPage !== 1 ? currentPage - 1 : 1
            }&perPage=${perPage}`}
          >
            prev
          </Link>
        </li>
        <li>
          <PageLink page={0} currentPage={currentPage} perPage={perPage} />
        </li>
        <li hidden={!(currentPage > 3)}>
          <span>...</span>
        </li>
        {listOfPages}
        <li hidden={!(currentPage < pages - 2)}>
          <span>...</span>
        </li>
        <li>
          <PageLink
            page={pages - 1}
            currentPage={currentPage}
            perPage={perPage}
          />
        </li>
        <li>
          <Link
            to={`/pagination?page=${
              currentPage !== pages ? currentPage + 1 : pages
            }&perPage=${perPage}`}
          >
            next
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
