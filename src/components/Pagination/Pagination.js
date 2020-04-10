import React from 'react';
import PropTypes from 'prop-types';
import PaginationPages from '../PaginationPages/PaginationPages';
import SelectPerPage from '../SelectPerPage/SelectPerPage';

class Pagination extends React.Component {
  render() {
    const {
      total,
      perPage,
      currentPage,
      withInfo,
      selectPerPage,
      showedArticles,
      onPageChange,
      onPerPageChange,
    } = this.props;

    const listOfArticles = showedArticles.map((article, index) => (
      <li key={index}>{article}</li>
    ));

    const pages = Math.ceil(total / perPage);

    const firstArticle = (currentPage - 1) * perPage + 1;
    const lastArticle = firstArticle - 1 + listOfArticles.length;
    const info = (
      <p>
        {firstArticle} - {lastArticle} of {total}
      </p>
    );

    return (
      <>
        <SelectPerPage
          perPage={perPage}
          selectPerPage={selectPerPage}
          onPerPageChange={(event) => onPerPageChange(event)}
        />
        <p>
          Total {total} articles, where {perPage} articles on the page start
          from {currentPage}
          st page.
        </p>
        <ul>{listOfArticles}</ul>
        <PaginationPages
          pageChange={(event) => onPageChange(event)}
          currentPage={currentPage}
          pages={pages}
        />
        {withInfo ? info : ''}
      </>
    );
  }
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  withInfo: PropTypes.bool.isRequired,
  selectPerPage: PropTypes.arrayOf().isRequired,
  showedArticles: PropTypes.arrayOf().isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  selectPerPage: [],
};

export default Pagination;
