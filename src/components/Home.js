import React from "react";
import {Button, Container, Header, Image} from "semantic-ui-react";

import './styles/Home.css';

import starts from '../images/stars.svg';
import astronauts from '../images/astronauts.svg';
import platziConf from '../images/platziconf-logo.svg';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: 'black', height: 'calc(100% - 58px)'}}>
                <figure className="Image-container">
                    <Image src={starts} className="Image-container__img"/>
                </figure>
                <div className="Home-container">
                    <Container>
                        <Image centered src={platziConf} size="medium"/>
                        <Header as="h1" style={{color: 'white'}}>PRINT YOUR BADGES</Header>
                        <p>The easiest way to manage your conference</p>
                        <Container textAlign="center">
                            <Link to="/badges/new">
                                <Button style={{background: '#98CA3F', color: 'white'}}>
                                    Get started!
                                </Button>
                            </Link>
                        </Container>
                    </Container>
                    <Image centered src={astronauts} size="big"/>
                </div>
            </div>
        );
    };
}

export default Home;
