import React from 'react'

// import Button from 'react-bootstrap/Button';
// import NavBar from "./NavigationBar";
import SearchUser from "./SearchUser";

export default class TableEle extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
            searchValue: "",
            error: null,
            isLoaded: false,
            users: [],
    
        }
    }

    // state = {
    //     searchValue: "",
    //     error: null,
    //     isLoaded: false,
    //     users: [],

    // }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20") //getting 20 random users from this API
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        users: response.results //storing results array in items
                    });
                    console.log(this.state.users);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    handleInputChange = event => {
        const name = event.target.name;
        console.log(this.state.searchValue);
        const value = event.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleSearch = event => {
        event.preventDefault();
        let users = this.state.users
        console.log(users);
        //     const filteredResults = users.filter(user => employee.role === this.state.filter);
        // // if there are results that match the filter, set the state.results to the new results
        // // if no results, noResults is set to true, which is used for conditional rendering
        // if (filteredResults.length !== 0) {
        //     this.setState({results: filteredResults, noResults: false, madeSearch: true});
        // } else {
        //     this.setState({noResults: true});
        // }
        // // clear the input
        // this.setState({filter: ''});


    };
    
    render() {
        return (

            <div className="container" >
                  <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
               

                <Table striped bordered hover variant="dark" className="mt-2">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>First Name</th>
                            <th >Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>City</th>
                            <th>State</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* looping over user array    */}
                        {this.state.users.map(user => {

                            return (
                                <tr key={user.login.uuid}>
                                    <td><img src={user.picture.medium} alt="user"></img></td>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.location.city}</td>
                                    <td>{user.location.state}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}