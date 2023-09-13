import React from "react";

class Filter extends React.Component {
  state = {
    selectedFilter: "All Genre",
  };

  render = () => {
    return (
      <div class="col-3">
        <ul class="list-group m-4">
          <li
            onClick={() => {
              this.setState({ selectedFilter: "All Genre" });
            }}
            class={`list-group-item ${
              this.state.selectedFilter == "All Genre" ? "active" : ""
            }`}
          >
            All Genres
          </li>
          {this.props.genreData.map((el) => {
            return (
              <li
                key={el._id}
                onClick={() => {
                  this.setState({ selectedFilter: el.name });
                }}
                class={`list-group-item ${
                  this.state.selectedFilter == el.name ? "active" : ""
                }`}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default Filter;
