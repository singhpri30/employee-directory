import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchUser from './SearchUser';


export default function NavigationBar() {
  return (
    
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>Employee Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <SearchUser></SearchUser>
        </Navbar.Collapse>
      </Navbar>
    
  )
}
