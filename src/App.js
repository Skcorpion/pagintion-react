import React from 'react';
import Articles from './components/Articles';
import Pagination from './components/Pagination';

const articles = [...Array(42).keys()];

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    page: +searchParams.get('page') || 1,
    perPage: +searchParams.get('perPage') || 5,
  };
}

function setParams({ page, perPage }) {
  const searchParams = new URLSearchParams();
  searchParams.set('page', page);
  searchParams.set('perPage', perPage);
  return searchParams.toString();
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: articles.length /* required */,
      perPage: 5 /* optional with 5 by default */,
      currentPage: 1 /* optional with 1 by default */,
      articles: articles,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { page, perPage } = getParams(location);
    this.setState({
      currentPage: page,
      perPage: perPage,
    });
  }

  componentDidUpdate() {
    const { location } = this.props;
    const { page } = getParams(location);

    this.setState((prevState) => {
      if (prevState.currentPage !== page) {
        return {
          currentPage: page,
        };
      }
    });
  }

  onPerPageChange = (event) => {
    const perPage = +event.target.value;

    this.setState({
      perPage,
      currentPage: 1,
    });

    const url = setParams({
      page: 1,
      perPage: perPage,
    });
    this.props.history.push(`?${url}`);
  };

  render() {
    const { total, perPage, currentPage, articles } = this.state;

    return (
      <main>
        <Articles
          page={currentPage}
          perPage={perPage}
          articles={articles}
          withInfo={true}
        />
        <Pagination
          onPerPageChange={this.onPerPageChange}
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          selectPerPage={[3, 5, 10, 20]}
        />
      </main>
    );
  }
}

export default App;
