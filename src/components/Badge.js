import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <main>
                <br />
                <Card centered={true}>
                    <Image src={confLogo} alt="Logo de la conferecia" wrapped ui={true} />
                    <Card.Content textAlign={'center'}>
                        <div>
                            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" circular alt="Avatar" wrapped ui={true} />
                            <h1>Santiago <br />Restrepo</h1>
                        </div>
                        <Card.Description>
                            <p>Frontend Engineer in <strong>Taxia Life</strong></p>
                            <div>
                                <a href="https://twitter.com/santirv246">
                                    <Icon name="twitter" />
                                    @santirv246
                                </a>
                                <Icon name="flag" />
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra textAlign={'center'}>
                        <p>#PlatziConf</p>
                    </Card.Content>
                </Card>
            </main>
        );
    };
}

export default Badge;
