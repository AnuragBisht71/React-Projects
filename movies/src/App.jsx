import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
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
          <Filter genreData={this.state.genre} />
        </div>
      </div>
    );
  };
}

export default App;
