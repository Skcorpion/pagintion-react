import React from 'react';

const Articles = ({ page, perPage, articles, withInfo }) => {
  const startSlicePos = perPage * (page - 1);
  const endSlicePos = startSlicePos + perPage;
  const showedArticles = articles.slice(startSlicePos, endSlicePos);
  const listOfArticles = showedArticles.map((article, index) => (
    <li key={index}>{article}</li>
  ));

  const firstArticle = (page - 1) * perPage + 1;
  const lastArticle = firstArticle - 1 + listOfArticles.length;
  const info = (
    <p>
      {firstArticle} - {lastArticle} of {articles.length}
    </p>
  );

  return (
    <>
      <ul>{listOfArticles}</ul>
      {withInfo ? info : ''}
    </>
  );
};

export default Articles;
