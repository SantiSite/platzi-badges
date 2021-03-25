import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

import './styles/Badge.css';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <main style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Card centered={true}>
                    <div className="image-header">
                        <Image src={confLogo} alt="Logo de la conferecia" centered ui={true} />
                    </div>
                    <Card.Content textAlign={'center'}>
                        <div className="Badge__section-name">
                            <Image src="https://avatars.githubusercontent.com/u/67675749?s=400&u=6dc5ecd2fce17da3760f8c6694d5b15a25770d48&v=4" size={"small"} circular alt="Avatar" wrapped ui={true} />
                            <h1 style={{margin: '0 10px'}}>Santiago <br />Restrepo</h1>
                        </div>
                        <Card.Description>
                            <p>Frontend Engineer in <strong>Taxia Life</strong></p>
                            <div>
                                <a href="https://twitter.com/santirv246">
                                    <Icon name="twitter" />
                                    @santirv246
                                </a>
                                <Icon name="flag" style={{marginLeft: '5px'}} />
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra textAlign={'center'}>
                        <p className="Badge__footer">#PlatziConf</p>
                    </Card.Content>
                </Card>
            </main>
        );
    };
}

export default Badge;
