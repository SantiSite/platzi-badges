import React from "react";
import {Button, Image, Loader} from "semantic-ui-react";
import { Link } from 'react-router-dom';

import api from "../api";

import BadgesList from "../components/BadgesList";
import PageError from '../components/PageError';

import hero from "../images/platziconf-logo.svg";
import './styles/Badges.css';

class Badges extends React.Component {

    constructor(props) {
        console.log('1. constructor');
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        console.log('3. componentDidMount');
        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         loading: true,
        //         error: null,
        //         data: undefined,
        //     })
        // }, 3000)
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 10000);
    };

    async fetchData() {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (e) {
            this.setState({loading: false, error: e});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5. componentDidUpdate');

        console.group('Estado previo de "props" y de "state"');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        })
        console.groupEnd();

        console.group('Estado actualizado de "props" y de "state"');
        console.log({
            updateProps: this.props,
            updateState: this.state,
        })
        console.groupEnd();
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
    }

    render() {
        console.log('2/4. render');
        if (this.state.loading && !this.state.data) {
            return (
                <React.Fragment>
                    <Loader style={{marginTop: '50px'}} active inline="centered" size="massive"/>
                </React.Fragment>
            );
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        return(
            <React.Fragment>
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <Image size="medium" className="Badges_conf-logo" src={hero} alt="Imagen del hero"/>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badge__list">
                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <Button size="small" style={{background: '#98CA3F'}}>
                                    <Link style={{ color: 'white'}} to="/badges/new">New Badge</Link>
                                </Button>
                            </div>
                            {this.state.loading && <Loader active inline='centered' size="mini" content="Loading"/>}
                            <BadgesList badges={this.state.data.reverse()} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
