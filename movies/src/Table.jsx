import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

class Table extends React.Component {
  state = {
    currPage: 1,
  };

  selectPage = (value) => {
    this.setState({ currPage: value });
  };

  render = () => {
    let allMovies = this.props.moviesData;
    let currFilter = this.props.selectedFilter;

    let filteredMoviesArr = allMovies.filter((el) => {
      if (currFilter === "All Genre") {
        return true;
      } else if (el.genre.name === currFilter) {
        return true;
      }
    });

    filteredMoviesArr = filteredMoviesArr.filter((el) => {
      let movieTitle = el.title;
      movieTitle = movieTitle.toLowerCase();
      let searchText = this.props.search.toLowerCase();
      return movieTitle.includes(searchText);
    });

    let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);

    let startIndex = (this.state.currPage - 1) * 4;
    let endIndex = Math.min(filteredMoviesArr.length, this.state.currPage * 4);

    let arrToBeUsedInTable = filteredMoviesArr.slice(startIndex, endIndex);

    return (
      <>
        <div class="row">
          <div class="col-11">
            <table class="table table-light table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {arrToBeUsedInTable.map((el) => {
                  return (
                    <tr key={el._id}>
                      <td>{el.title}</td>
                      <td>{el.genre.name}</td>
                      <td>{el.numberInStock}</td>
                      <td>{el.dailyRentalRate}</td>
                      <td
                        onClick={() => {
                          this.props.toggleLike(el._id);
                        }}
                      >
                        {el.liked ? (
                          <i class="fa-solid fa-heart"></i>
                        ) : (
                          <i class="fa-regular fa-heart"></i>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.deleteMovie(el._id);
                          }}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          selectPage={this.selectPage}
          currPage={this.state.currPage}
          numberOfPages={numberOfPages}
        />
      </>
    );
  };
}

export default Table;
