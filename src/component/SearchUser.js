// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

// export default function SearchUser(props){
//     return(
//         <Form inline >
//         <FormControl onChange={props.handleInputChange} value={props.searchValue}type="text" name="search" placeholder="Search" className="mr-sm-2 mr-auto" />
//         <Button onClick={props.handleSearch}variant="outline-success">Search</Button>
//     </Form>
//     )
// }

   
       
import React from "react";

function SearchUser(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchUser;


