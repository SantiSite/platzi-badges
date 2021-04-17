import React from "react";
import {Button, Grid, Image} from "semantic-ui-react";
import hero from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import {Link} from "react-router-dom";

function BadgeDetails(props) {
    const badge = props.badge
    return(
        <React.Fragment>
            <div>
                <div className="BadgeDetails__hero">
                    <Grid textAlign="center" columns="2" verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center" verticalAlign="middle" style={{ margin: 'auto' }}>
                                <Image src={hero} size="medium" alt="Logo de la conferencia" style={{ margin: 'auto' }}/>
                            </Grid.Column>
                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <h1 style={{ fontSize: '3rem' }}>
                                    {badge.firstName} {badge.lastName}
                                </h1>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div>
                    <Grid textAlign="center" columns="2" verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <Badge
                                    name={badge.firstName}
                                    lastName={badge.lastName}
                                    twitter={badge.twitter}
                                    jobTitle={badge.jobTitle}
                                    email={badge.email}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <h2>Actions</h2>
                                <div>
                                    <div>
                                        <Link to={`/badges/${badge.id}/edit`}>
                                            <Button primary content="Edit" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Button negative>Delete</Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BadgeDetails;
