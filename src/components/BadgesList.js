import React from "react";
import {Card, Feed, Icon} from "semantic-ui-react";

class BadgesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return(
            <ul>
                {this.props.badges.map((element) => {
                    return(
                        <Card fluid centered key={element.id}>
                            <Card.Content style={{padding: '6px'}}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label image={element.avatarUrl} style={{display: 'flex', alignItems: 'center', width: '60px'}}/>
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
                    )
                })}
            </ul>
        );
    };
}

export default BadgesList;
