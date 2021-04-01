import React from 'react';
import {Divider, Grid, Icon, Segment} from "semantic-ui-react";

import Badge from "../components/Badge";

import BadgeForm from "../components/BadgeForm";

import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import hero from '../images/badge-header.svg';

class BadgesNew extends React.Component {
    render() {
        return (
          <div>
              <Navbar />
              <div className="BadgeNew__hero">
                  <img src={hero} alt="Imagen del hero"/>
              </div>
              <Segment>
                  <Grid textAlign="center">
                      <Grid.Column verticalAlign='middle' width={8}>
                          <Badge name="Santiao" lastName="Restrepo" avatarUrl="http:\/\/1.gravatar.com\/avatar\/d220bdc97edc47e5ad26a83227b0dd11" twitter="@santirv246" jobTitle="Frontend developer in Taxia Life" />
                      </Grid.Column>
                      <Grid.Column verticalAlign='middle' width={8}>
                          <BadgeForm />
                      </Grid.Column>
                  </Grid>
                  <Divider vertical><Icon name={"user"} size="huge"/></Divider>
              </Segment>
          </div>
        );
    }
}

export default BadgesNew;
