import React from 'react'
import UserList from "./TableData";
import 'bootstrap/dist/css/bootstrap.css';

// import Button from 'react-bootstrap/Button';
// import NavBar from "./NavigationBar";
import SearchUser from "./SearchUser";

export default class TableEle extends React.Component {

    state = {
        search: "",
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
        // users = this.state.users
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let users = this.state.users
        console.log(users);
        const value = this.state.search;
        console.log(value);
        if (value !== "") {
            const filteredResults = users.filter(user => 
                
                // user.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 ? true : false);
                user.name.first.toLowerCase()===value.toLowerCase());
                //try search by last name,city and state
                // console.log(user);
                // console.log(searchTerm)
                this.setState({
                    users: filteredResults
                })
            }
        else {
            alert("Please enter search value");
            window.location.reload(false); //refresh the userList when user deletes text value
        }
 
        
    }


    sortByFirst = (event) => {
        event.preventDefault();
        let sortedUserList = this.state.users.sort((a, b) => a.name.first.localeCompare(b.name.first));
        this.setState({
            users: sortedUserList
        })
    }
    sortByLast = (event) => {
        event.preventDefault();
        let sortedUserList = this.state.users.sort((a, b) => a.name.last.localeCompare(b.name.last));
        this.setState({
            users: sortedUserList
        })
    }
    sortByCity = (event) => {
        event.preventDefault();
        let sortedUserList = this.state.users.sort((a, b) => a.location.city.localeCompare(b.location.city));
        this.setState({
            users: sortedUserList
        })
    }

    sortByState = (event) => {
        event.preventDefault();
        let sortedUserList = this.state.users.sort((a, b) => a.location.state.localeCompare(b.location.state));
        this.setState({
            users: sortedUserList
        })
    }



    render() {
        return (
            <div className="container">
                <SearchUser
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <UserList userResults={this.state.users}
                    sortByFirst={this.sortByFirst}
                    sortByLast={this.sortByLast}
                    sortByCity={this.sortByCity}
                    sortByState={this.sortByState} />
            </div>
        );
    }
}