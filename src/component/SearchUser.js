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
          className="d-inline w-50 shadow-lg rounded"
          placeholder="Search by first name, last name, state and city"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchUser;


