import React from "react";
import md5 from 'md5';
import {Image} from "semantic-ui-react";

function Gravatar(props) {
    const email = props.email;
    const hash = md5(email);

    return (
        <Image src={`https://www.gravatar.com/avatar/${hash}?s=70&d=identicon`} style={{marginRight: '20px'}} circular alt="Avatar" wrapped ui={true} />
    )
}

export default Gravatar;
