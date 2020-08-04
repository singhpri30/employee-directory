import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class TableEle extends React.Component {
    
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
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

// sortTable=(event,sortKey)=>{
//     const users = this.state.users;
//     users.sort((a,b) => a[sortKey]-b[sortKey]);
//     this.setState({users})
// }
    render() {
        return (
            <div className="container" >
                <Table striped bordered hover variant="dark" className="mt-2">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={e=>{
                                this.sortTable(e, "first name" )
                            }}><Button>First Name</Button></th>
                            <th onClick={e=>{
                                this.sortTable(e, "last name" )
                            }}>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Contact Number</th>

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