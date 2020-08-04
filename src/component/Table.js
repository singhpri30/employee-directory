import React from 'react'
import UserList from "./TableData";
import 'bootstrap/dist/css/bootstrap.css';

// import Button from 'react-bootstrap/Button';
// import NavBar from "./NavigationBar";
import SearchUser from "./SearchUser";

export default class TableEle extends React.Component {

    state = {
        searchValue: "",
        error: null,
        isLoaded: false,
        users: [],

    }

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
        let users = this.state.users
        const name = event.target.name;

        const value = event.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
        const filteredResults = users.filter(user => {
            return user.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 ? true : false
            // console.log(user);
            // console.log(searchTerm)
        })
        this.setState({
            users: filteredResults
        })

        console.log(filteredResults);
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.handleInputChange(this.state.users);


    // }

    render() {
        return (
            <div className="container">
                <SearchUser
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <UserList userResults={this.state.users} />
            </div>
        );
    }
}