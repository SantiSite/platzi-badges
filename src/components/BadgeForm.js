import React from 'react';
import {Form, Header, Icon} from "semantic-ui-react";

class BadgeForm extends React.Component {

    handleChange(e) {
        // console.log(`
        //     name: ${e.target.name}
        //     value: ${e.target.value}
        // `)
        this.setState({
            firstName: e.target.value,
            lastName: e.target.value,
        })
    }

    handleClick(e) {
        console.log('Button was Clicked');
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form was Submitted')
    };

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular />
                    <Header.Content>New Attendant</Header.Content>
                </Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input name="firstName" onChange={this.handleChange} label="First Name" placeholder="First Name"/>
                        <Form.Input name="lastName" onChange={this.handleChange} label="Last Name" placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Button onClick={this.handleClick}>Saved</Form.Button>
                </Form>
            </div>
        );
    }
}

export default BadgeForm;
