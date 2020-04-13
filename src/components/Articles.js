import React from 'react';

const Articles = ({ page, perPage, articles, withInfo }) => {
  const startSlicePos = perPage * (page - 1);
  const endSlicePos = startSlicePos + perPage;
  const showedArticles = articles.slice(startSlicePos, endSlicePos);
  const listOfArticles = showedArticles.map((article, index) => (
    <li key={index}>"Quarantine days - {article + 1}"</li>
  ));

  const firstArticle = (page - 1) * perPage + 1;
  const lastArticle = firstArticle - 1 + listOfArticles.length;
  const info = (
    <span className="articles-info">
      {firstArticle} - {lastArticle} of {articles.length}
    </span>
  );

  return (
    <div className="articles">
      <ul>{listOfArticles}</ul>
      {withInfo ? info : ''}
    </div>
  );
};

export default Articles;
