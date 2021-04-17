import React from "react";
import {Card, Feed, Icon, Message} from "semantic-ui-react";

import Gravatar from "./Gravatar";
import {Link} from "react-router-dom";

class BadgesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return(
            <React.Fragment>
                {
                    this.props.badges.length >= 1 ? (
                        <React.Fragment>
                            {this.props.badges.map((element) => {
                                return(
                                    <ul key={element.id}>
                                        <Link to={`/badges/${element.id}`} title="Choose Attendant">
                                            <Card fluid centered>
                                                <Card.Content style={{padding: '6px'}}>
                                                    <Feed>
                                                        <Feed.Event>
                                                            <Gravatar email={element.email}/>
                                                            <Feed.Content>
                                                                <Feed.Summary>
                                                                    <Card.Header>
                                                                        {element.firstName} {element.lastName}
                                                                    </Card.Header>
                                                                    <a href="#">
                                                                        <Icon name="twitter"/>
                                                                        {element.twitter}
                                                                    </a>
                                                                </Feed.Summary>
                                                                <Feed.Extra text style={{margin: '0'}}>
                                                                    {element.jobTitle}
                                                                </Feed.Extra>
                                                            </Feed.Content>
                                                        </Feed.Event>
                                                    </Feed>
                                                </Card.Content>
                                            </Card>
                                        </Link>
                                    </ul>
                                )
                            })
                            }
                        </React.Fragment>
                    ) : (
                        <Message
                            info
                            header='No encontramos ningun badge'
                            content='Te invitamos a darle al boton de New Badge para crear el primer badge'
                        />
                    )
                }
            </React.Fragment>
        );
    };
}

export default BadgesList;
