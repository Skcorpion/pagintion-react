import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const PageLink = ({ page, currentPage, perPage }) => (
  <Link
    to={`/pagination?page=${page + 1}&perPage=${perPage}`}
    className={classNames('page-link', {
      'page-link__active': page + 1 === currentPage,
    })}
  >
    {page + 1}
  </Link>
);

export default PageLink;
