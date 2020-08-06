import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function SearchUser(props) {
  return (
    <form className="text-center">
      <div className="form-group m-auto">
        <label className="mr-2" htmlFor="search"><strong>Search:</strong></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="d-inline"
          placeholder="Search for a Gif"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchUser;


