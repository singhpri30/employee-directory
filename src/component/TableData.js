import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function UserList(props) {
    return (
        <Table striped bordered hover variant="dark" className="mt-2 w-auto">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th onClick={()=>props.sortBy("firstName",props.orderBy)}>First Name<FontAwesomeIcon icon={faAngleDown} /></th>
                    <th onClick={()=>props.sortBy("lastName",props.orderBy)}>Last Name<FontAwesomeIcon icon={faAngleDown} /></th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th onClick={()=>props.sortBy("city",props.orderBy)}>City<FontAwesomeIcon icon={faAngleDown} /></th>
                    <th onClick={()=>props.sortBy("state",props.orderBy)}>State<FontAwesomeIcon icon={faAngleDown} /></th>

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
