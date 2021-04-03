import React from 'react';
import {Divider, Grid, Icon, Image, Segment} from "semantic-ui-react";

import Badge from "../components/Badge";

import BadgeForm from "../components/BadgeForm";

import './styles/BadgeNew.css';
import hero from '../images/badge-header.svg';

class BadgesNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                jobTitle: '',
                twitter: '',
                condition: false,
            },
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // const nextForm = this.state.form;
        // nextForm[name] = value;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            }
        });
        console.log('state:', this.state.form);
    };

    render() {
        return (
          <React.Fragment>
              <div className="BadgeNew__hero">
                  <Image size="medium" centered src={hero} alt="Imagen del hero"/>
              </div>
              <Segment>
                  <Grid textAlign="center">
                      <Grid.Column verticalAlign='middle' width={8}>
                          <Badge name={this.state.form.firstName} lastName={this.state.form.lastName} avatarUrl="http:\/\/1.gravatar.com\/avatar\/d220bdc97edc47e5ad26a83227b0dd11" twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} />
                      </Grid.Column>
                      <Grid.Column verticalAlign='middle' width={8}>
                          <BadgeForm onChange={this.handleChange} formValue={this.state.form}/>
                      </Grid.Column>
                  </Grid>
                  <Divider vertical><Icon name={"user"} size="huge"/></Divider>
              </Segment>
          </React.Fragment>
        );
    }
}

export default BadgesNew;
