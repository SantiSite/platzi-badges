import React from "react";
import {Button, Card, Container, Image, Loader} from "semantic-ui-react";
import alertify from 'alertifyjs';

import './styles/CharacterCard.css';

class CharacterCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextPage: 1,
            loader: true,
            error: null,
            data: {
                results: [],
            },
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters =  async () => {
        this.setState({loader: true, error: null});
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json();
            this.setState({
                nextPage: this.state.nextPage + 1,
                loader: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results),
                },
            })
        } catch (error) {
            this.setState({
                loader: false,
                error: error,
            })
        }
    }

    render() {
        if (this.state.error) {
            alertify.error(`Error: ${this.state.error.messege}`);
        }
        return(
            <React.Fragment>
                <Container className="characters-container">
                    {
                        this.state.data.results.map(element => (
                            <Card key={element.id} style={{height: '100%'}}>
                                <Image size="medium" src={element.image} alt="Character image"/>
                                <Card.Content>
                                    <Card.Header textAlign="left" style={{fontSize: '18px'}}>
                                        {element.name}
                                    </Card.Header>
                                    <Card.Description>
                                        {element.origin.name}
                                    </Card.Description>
                                    <Card.Meta>
                                        {element.species}
                                    </Card.Meta>
                                </Card.Content>
                                <Card.Content extra>
                                    {element.gender}
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Container>
                <div>
                    {
                        this.state.loader && (
                            <Loader active inline="centered" size="massive" />
                        )
                    }
                    {
                        !this.state.loader && (
                            <Button onClick={() => this.fetchCharacters()} content="Load more" fluid size="big" primary/>
                        )
                    }
                </div>
            </React.Fragment>
        );
    };
}

export default CharacterCard;
