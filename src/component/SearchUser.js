import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class SearchUser extends Component {
  

    render() {
        return (
            <Form inline >
                <FormControl onChange={this.props.handleInputChange}type="text" placeholder="Search" className="mr-sm-2 mr-auto" />
                <Button variant="outline-success">Search</Button>
            </Form>
        )
    }
}
