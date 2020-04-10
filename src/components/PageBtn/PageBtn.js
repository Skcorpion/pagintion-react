import React from 'react';
import classNames from 'classnames';

const PageBtn = ({ page, currentPage }) => {
  return (
    <button
      type="button"
      key={page}
      className={classNames('page-btn', {
        'page-btn__active': page + 1 === currentPage,
      })}
    >
      {page + 1}
    </button>
  );
};

export default PageBtn;
