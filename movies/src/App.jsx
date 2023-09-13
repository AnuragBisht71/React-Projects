import React from "react";

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
    return <div></div>;
  };
}

export default App;
