import React from 'react'
import Table from 'react-bootstrap/Table';

export default class TableEle extends React.Component {
    // const url="https://randomuser.me/api/?results=10";
    // console.log(url);

    state = {
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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        return (
            <div className="container" >
                <Table striped bordered hover variant="dark" className="mt-2">
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.users.map(user => {

                            return(
                                <tr key={user.login.uuid}>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                {/* <td>{user.login.uuid}</td> */}
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td><img src={user.picture.medium} alt="user"></img></td>
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