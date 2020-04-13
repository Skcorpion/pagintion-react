import React from 'react';
import { Link } from 'react-router-dom';
import PageLink from './PageLink';
import classNames from 'classnames';

const Pagination = ({
  total,
  perPage,
  currentPage,
  onInfo,
  withInfo,
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
    <div className="pagination-wrapper">
      <ul className="pagination-pages">
        <div className="info-checkbox">
          <label htmlFor="withInfo-check">Info:</label>
          <input
            id="withInfo-check"
            type="checkbox"
            checked={withInfo}
            onChange={(event) => onInfo(event)}
          />
        </div>
        <li>
          <Link
            className={classNames('page-link', {
              'page-link__disable': currentPage === 1,
            })}
            to={`/pagintion-react/?page=${
              currentPage !== 1 ? currentPage - 1 : 1
            }&perPage=${perPage}`}
          >
            prev
          </Link>
        </li>
        <li>
          <PageLink page={0} currentPage={currentPage} perPage={perPage} />
        </li>
        <li>
          <span hidden={!(currentPage > 3)}>...</span>
        </li>
        {listOfPages}
        <li>
          <span hidden={!(currentPage < pages - 2)}>...</span>
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
            className={classNames('page-link', {
              'page-link__disable': currentPage === pages,
            })}
            to={`/pagintion-react/?page=${
              currentPage !== pages ? currentPage + 1 : pages
            }&perPage=${perPage}`}
          >
            next
          </Link>
        </li>
        <select
          className="pages-select"
          value={perPage}
          onChange={(event) => onPerPageChange(event)}
        >
          {listOfOption}
        </select>
      </ul>
    </div>
  );
};

export default Pagination;
