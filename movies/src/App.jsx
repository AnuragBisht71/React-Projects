import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",
  };

  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
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
      <div>
        <Navbar />

        <div className="row">
          <Filter
            handleFilter={this.setFilter}
            selectedFilter={this.state.selectedFilter}
            genreData={this.state.genre}
          />

          <div className="col-9">
            <Search />
            <Table
              selectedFilter={this.state.selectedFilter}
              moviesData={this.state.movies}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
