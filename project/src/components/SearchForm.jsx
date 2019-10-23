import React from "react";

const SearchForm = props => {
  const { searchVal, handleChange, handleSubmit } = props;

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        {/* exports the handleSubmit function when button is pressed */}
        <input
          className="search-field"
          type="text"
          name="search"
          value={searchVal}
          onChange={handleChange}
          placeholder="filler-words"
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
