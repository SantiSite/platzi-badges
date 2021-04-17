import React from "react";
import {Message} from "semantic-ui-react";

function PageError(props) {
    return(
        <div>
            <Message
                error
                header='Error'
                content={props.error.message}
                size="massive"
                icon="x"
            />
        </div>
    )
}

export default PageError;
