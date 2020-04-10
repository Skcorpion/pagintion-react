import React from 'react';

const SelectPerPage = ({ perPage, selectPerPage, onPerPageChange }) => {
  const listOfOption = selectPerPage.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  return (
    <select value={perPage} onChange={onPerPageChange}>
      {listOfOption}
    </select>
  );
};

export default SelectPerPage;
