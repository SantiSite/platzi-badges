import React from "react";
import { Loader } from "semantic-ui-react";
import api from "../api";
import PageError from "../components/PageError";
import './styles/BadgeDetails.css';
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {

    constructor(props) {
        console.log('1')
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        console.log('3')
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5')
        console.log('prevState:', prevState);
        console.log('state:', this.state);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        console.log('2/4')
        if (this.state.loading) {
            return (
                <React.Fragment>
                    <Loader active inline="centered" size='massive' style={{marginTop: '50px'}}/>
                </React.Fragment>
            )
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }

        return(
            <BadgeDetails badge={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer;
