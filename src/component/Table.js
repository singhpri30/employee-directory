import React from 'react'
import UserList from "./TableData";
import 'bootstrap/dist/css/bootstrap.css';
import SearchUser from "./SearchUser";

export default class TableEle extends React.Component {

    state = {
        search: "",
        error: null,
        isLoaded: false,
        users: [],
        originalUsers: [],
        orderBy: {
            first: {
                asc: true
            },
            last: {
                asc: true
            },
            state: {
                asc: true
            },
            city: {
                asc: true
            },
        }

    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20") //getting 20 random users from this API
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        users: response.results,//storing results array in items
                        originalUsers: response.results
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
        event.preventDefault();
        let users = this.state.users
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        if (value !== "") {
            const filteredResults = users.filter(user =>

                user.name.first.toLowerCase().includes(value.toLowerCase()) || user.name.last.toLowerCase().includes(value.toLowerCase()) || user.location.city.toLowerCase().includes(value.toLowerCase()) || user.location.state.toLowerCase().includes(value.toLowerCase()));
            this.setState({
                users: filteredResults
            })
        }
        else {
            this.setState({
                users: this.state.originalUsers
            })
        }
    };


    sortBy = (category, orderBy) => {
        let sortedUserList = [];
        switch (category) {
            case "firstName":
                if (orderBy.first.asc) {
                    sortedUserList = this.state.users.sort((a, b) => a.name.first.localeCompare(b.name.first));
                    this.setState({
                        orderBy: {
                            first: {
                                asc: false
                            },
                            last: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                        }
                    })

                }
                else {

                    sortedUserList = this.state.users.sort((a, b) => b.name.first.localeCompare(a.name.first));
                    this.setState({
                        orderBy: {
                            first: {
                                asc: true
                            },
                            last: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                        }
                    })

                }
                break;
            case "lastName":
                if (orderBy.last.asc) {
                    sortedUserList = this.state.users.sort((a, b) => a.name.last.localeCompare(b.name.last));
                    this.setState({
                        orderBy: {
                            last: {
                                asc: false
                            },
                            first: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                        }
                    })

                }
                else {

                    sortedUserList = this.state.users.sort((a, b) => b.name.last.localeCompare(a.name.last));
                    this.setState({
                        orderBy: {
                            last: {
                                asc: true
                            },
                            first: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                        }
                    })

                }

                break;
            case "city":
                if (orderBy.city.asc) {
                    sortedUserList = this.state.users.sort((a, b) => a.location.city.localeCompare(b.location.city));
                    this.setState({
                        orderBy: {
                            city: {
                                asc: false
                            },
                            first: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            last: {
                                asc: true
                            },
                        }
                    })

                }
                else {

                    sortedUserList = this.state.users.sort((a, b) => b.location.city.localeCompare(a.location.city));
                    this.setState({
                        orderBy: {
                            city: {
                                asc: true
                            },
                            first: {
                                asc: true
                            },
                            state: {
                                asc: true
                            },
                            last: {
                                asc: true
                            },
                        }
                    })

                }
                break;
            case "state":
                if (orderBy.state.asc) {
                    sortedUserList = this.state.users.sort((a, b) => a.location.state.localeCompare(b.location.state));
                    this.setState({
                        orderBy: {
                            state: {
                                asc: false
                            },
                            first: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                            last: {
                                asc: true
                            },
                        }
                    })

                }
                else {

                    sortedUserList = this.state.users.sort((a, b) => b.location.state.localeCompare(a.location.state));
                    this.setState({
                        orderBy: {
                            state: {
                                asc: true
                            },
                            first: {
                                asc: true
                            },
                            city: {
                                asc: true
                            },
                            last: {
                                asc: true
                            },
                        }
                    })

                }
                break;
            default:
                sortedUserList = this.state.users.sort((a, b) => a.name.first.localeCompare(b.name.first));
        }

        this.setState({
            users: sortedUserList
        })
    }




    render() {
        return (
            <div className="container">
                <SearchUser
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <UserList userResults={this.state.users}
                    sortBy={this.sortBy}
                    orderBy={this.state.orderBy}
                />
            </div>
        );
    }
}