import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class Home extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",
    search: "",
  };

  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id === id;
    });

    let currMoviesArr = this.state.movies.map((el) => el);

    if (currMoviesArr[index].liked) {
      currMoviesArr[index].liked = false;
    } else {
      currMoviesArr[index].liked = true;
    }

    this.setState({ movies: currMoviesArr });
  };

  deleteMovie = (id) => {
    let filteredArr = this.state.movies.filter((el) => {
      return el._id != id;
    });

    this.setState({ movies: filteredArr });
  };

  updateSearch = (searchString) => {
    this.setState({ search: searchString });
  };

  componentDidMount() {
    let f = async () => {
      let responseMovies = await fetch("/movies");
      let responseGenre = await fetch("/genre");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    };

    f();
  }

  render = () => {
    return (
      <div className="row">
        <Filter
          handleFilter={this.setFilter}
          selectedFilter={this.state.selectedFilter}
          genreData={this.state.genre}
        />

        <div className="col-9">
          <Search
            updateSearch={this.updateSearch}
            search={this.state.search}
            totalMovies={this.state.movies.length}
          />
          <Table
            search={this.state.search}
            deleteMovie={this.deleteMovie}
            toggleLike={this.toggleLike}
            selectedFilter={this.state.selectedFilter}
            moviesData={this.state.movies}
          />
        </div>
      </div>
    );
  };
}

export default Home;
