let Search = () => {
  return (
    <>
      <p class="mt-4">Showing 9 movies from database</p>
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
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
