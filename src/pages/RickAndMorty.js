import React from "react";
import CharacterCard from "../components/CharacterCard";
import {Image} from "semantic-ui-react";

import rickAndMortyImg from '../images/rick-and-morty.jpg';

class RickAndMorty extends React.Component {

    render() {
        return(
            <div style={{backgroundColor : 'black', height: '100%', color: 'white'}}>
                <Image src={rickAndMortyImg} alt="Rick And Morty logo" size="big" centered/>
                    <CharacterCard />
            </div>
        );
    };
}

export default RickAndMorty;
