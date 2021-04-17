import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

import Gravatar from "./Gravatar";

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        const {
            name,
            lastName,
            email,
            twitter,
            jobTitle,
        } = this.props;
        return (
            <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Card centered={true}>
                    <div className="image-header">
                        <Image src={confLogo} alt="Logo de la conferecia" centered ui={true} />
                    </div>
                    <Card.Content textAlign={'center'} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <div className="Badge__section-name">
                                <Gravatar email={email} />
                            <h1 style={{margin: '0 10px'}}>{name} <br />{lastName}</h1>
                        </div>
                        <Card.Description>
                            <p>{jobTitle}</p>
                            <div>
                                <a href="https://twitter.com/santirv246">
                                    <Icon name="twitter" />
                                    {twitter}
                                </a>
                                <Icon name="flag" style={{marginLeft: '5px'}} />
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra textAlign={'center'}>
                        <p className="Badge__footer">#PlatziConf</p>
                    </Card.Content>
                </Card>
            </div>
        );
    };
}

export default Badge;
