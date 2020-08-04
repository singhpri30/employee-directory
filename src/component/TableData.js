import React from "react";
import Table from 'react-bootstrap/Table';

function ResultList(props) {
    return (
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
    );
}

export default ResultList;
