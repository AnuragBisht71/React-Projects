let Search = (props) => {
  return (
    <>
      <p class="mt-4">Showing {props.totalMovies} movies from database</p>
      <button type="button" class="btn btn-success">
        New
      </button>

      <div class="row">
        <div class="col-8">
          <div class="input-group flex-nowrap mt-4">
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              value={props.search}
              onChange={(e) => {
                props.updateSearch(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
