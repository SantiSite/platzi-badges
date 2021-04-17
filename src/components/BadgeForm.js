import React from 'react';
import {Form, Header, Icon, Divider, Container, Message} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class BadgeForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput =React.createRef();
    };

    // handleChange = e => {
    //     // console.log(`
    //     //     name: ${e.target.name}
    //     //     value: ${e.target.value}
    //     // `)
    //     const target = e.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value,
    //     });
    // };

    handleClick(e) {
        console.log('Button was Clicked');
    };

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('Form was Submitted');
    //     console.log('file:', this.fileInput.current.files[0].name);
    // };

    render() {
        return (
            <React.Fragment>
                <Container fluid style={{ width: '80%' }}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='user' circular />
                        <Header.Content>
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path='/badges/new'>
                                        New Attendant
                                    </Route>
                                    <Route exact path='/badges/:badgeId/edit'>
                                        Update Attendant
                                    </Route>
                                </Switch>
                            </BrowserRouter>
                        </Header.Content>
                    </Header>
                    <Form size="small" error onSubmit={this.props.onSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input value={this.props.formValue.firstName} required name="firstName" type="text" onChange={this.props.onChange} label="First Name" placeholder="First Name" autoComplete="name"/>
                            <Form.Input value={this.props.formValue.lastName} required name="lastName" type="text" onChange={this.props.onChange} label="Last Name" placeholder="Last Name" autoComplete="family-name"/>
                        </Form.Group>
                        <Divider />
                        <Form.Group widths="equal">
                            <Form.Input value={this.props.formValue.email} required name="email" type="email" onChange={this.props.onChange} label="Gmail" placeholder="example@gmail.com" autoComplete="email"/>
                            <Form.Input value={this.props.formValue.jobTitle} required name="jobTitle" type="text" onChange={this.props.onChange} label="Job Title" placeholder="Frontend developer"/>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input value={this.props.formValue.twitter} required name="twitter" type="text" onChange={this.props.onChange} label="Twitter" placeholder="@example123"/>
                            {/*<input ref={this.fileInput} name="file" type="file" />*/}
                        </Form.Group>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/badges/new'>
                                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                        <input style={{ marginRight: '10px' }} checked={this.props.formValue.condition} type="checkbox" name="condition" onChange={this.props.onChange} />
                                        I accept the <strong style={{ color: '#98CA3F', margin: '0 5px' }} >  terms of service </strong> and <strong style={{ color: '#98CA3F', marginLeft: '5px' }}> privacy policy</strong>
                                    </label>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                        {
                            this.props.error && (
                                <Message
                                    error
                                    content={this.props.error.message}
                                />
                            )
                        }
                        <Form.Button disabled={!this.props.formValue.condition} style={{backgroundColor: '#98CA3F'}} fluid onClick={this.handleClick}>
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path='/badges/new'>
                                        Send
                                    </Route>
                                    <Route exact path='/badges/:badgeId/edit'>
                                        Update
                                    </Route>
                                </Switch>
                            </BrowserRouter>
                        </Form.Button>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default BadgeForm;
