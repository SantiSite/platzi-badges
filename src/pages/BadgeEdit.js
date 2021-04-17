import React from 'react';
import {Divider, Grid, Icon, Image, Loader, Segment} from "semantic-ui-react";
import alertify from 'alertifyjs';

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import api from "../api";

import './styles/BadgeEdit.css';
import conf from '../images/platziconf-logo.svg';

class BadgeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: true,
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
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, form: data});
            alertify.set('notifier', 'position', 'top-center');
            alertify.success('Todo Salió bien');
        } catch (e) {
            this.setState({loading: false, error: e});
            alertify.set('notifier', 'position', 'top-center');
            alertify.error(`Error: ${e.message}`);
        }
    }

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

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({loading: false});
            alertify.set('notifier', 'position', 'top-center');
            alertify.success('El participante se actualizo correctamente');
            this.props.history.push('/badges');
        } catch (e) {
            this.setState({loading: false, error: e})
            alertify.set('notifier', 'position', 'top-center');
            alertify.error(`Error: ${e.message}`)
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <React.Fragment>
                    <Loader active inline="centered" size='massive' style={{marginTop: '50px'}}/>
                </React.Fragment>
            )
        }
        return (
          <React.Fragment>
              <div className="BadgeEdit__hero">
                  <Image size="small" centered src={conf} alt="Imagen del hero"/>
              </div>
              <Segment>
                  <Grid textAlign="center">
                      <Grid.Column verticalAlign='middle' width={8} style={{display: 'flex', alignItems: 'center'}}>
                          <Badge
                              name={this.state.form.firstName || 'First_Name'}
                              lastName={this.state.form.lastName || 'Last_Name'}
                              twitter={this.state.form.twitter || 'Twitter'}
                              jobTitle={this.state.form.jobTitle || 'Job Title'}
                              email={this.state.form.email}
                          />
                      </Grid.Column>
                      <Grid.Column verticalAlign='middle' width={8}>
                          <BadgeForm
                              onChange={this.handleChange}
                              onSubmit={this.handleSubmit}
                              formValue={this.state.form}
                              error={this.state.error}
                          />
                      </Grid.Column>
                  </Grid>
                  <Divider vertical><Icon name={"user"} size="huge"/></Divider>
              </Segment>
          </React.Fragment>
        );
    }
}

export default BadgeEdit;
