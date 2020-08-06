import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import "./tableData.css";

function UserList(props) {
    return (
        <Table striped bordered hover variant="dark" className="mt-2">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th className="MyReactTableClass" onClick={props.sortByFirst}>First Name</th>
                    <th onClick={props.sortByLast}>Last Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th onClick={props.sortByCity}>City</th>
                    <th onClick={props.sortByState}>State</th>

                </tr>   
            </thead>
            <tbody>
                {/* looping over user array    */}
                {props.userResults.map(user => {

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

export default UserList;
