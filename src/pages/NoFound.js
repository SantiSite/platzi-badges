import React from "react";
import {Image} from "semantic-ui-react";

import NoFoundImg from '../images/3804935.jpg';

class NoFound extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: 'white', height: 'calc(100% - 58px)'}}>
                <figure style={{display: 'flex', justifyContent: 'center', height: '100%', margin: '0'}}>
                    <Image src={NoFoundImg} style={{width: '50%'}}/>
                </figure>
            </div>
        );
    };
}

export default NoFound;
