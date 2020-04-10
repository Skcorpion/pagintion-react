import React from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';

const articles = [...Array(42).keys()];
const selectPerPage = [3, 5, 10, 20];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onPageChange = this.onPageChange.bind(this);
    this.onPerPageChange = this.onPerPageChange.bind(this);

    this.state = {
      total: articles.length /* required */,
      perPage: 5 /* optional with 5 by default */,
      currentPage: 1 /* optional with 1 by default */,
      showedArticles: articles.slice(0, 5),
    };
  }

  onPageChange = (event) => {
    if (event.target.type === 'button') {
      const target = event.target.innerText;

      this.setState((prevState) => {
        let selectedPage = +target;

        if (target === 'prev') {
          selectedPage = prevState.currentPage - 1;
        } else if (target === 'next') {
          selectedPage = prevState.currentPage + 1;
        }

        const startSlicePos = this.state.perPage * (selectedPage - 1);
        const endSlicePos = startSlicePos + this.state.perPage;

        if (prevState.page !== selectedPage) {
          return {
            currentPage: selectedPage,
            showedArticles: articles.slice(startSlicePos, endSlicePos),
          };
        }
      });
    }
  };

  onPerPageChange = (event) => {
    const perPage = +event.target.value;

    this.setState({
      perPage,
      currentPage: 1,
      showedArticles: articles.slice(0, perPage),
    });
  };

  render() {
    const { total, perPage, currentPage, showedArticles } = this.state;
    console.log('showedArticles', showedArticles);
    console.log('currentPage', currentPage);

    return (
      <>
        <h1>Pagination</h1>
        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          withInfo={true}
          selectPerPage={selectPerPage}
          showedArticles={showedArticles}
          onPageChange={this.onPageChange}
          onPerPageChange={this.onPerPageChange}
        />
      </>
    );
  }
}

export default App;
