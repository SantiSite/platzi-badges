import React from 'react';

import logo from '../images/logo.svg';

import './styles/Navbar.css';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo de Platzi Badge" />
                    <span style={{fontWeight: '100'}}>Platzi</span>
                    <span>Conf</span>
                </Link>
            </div>
        );
    }
}

export default Navbar;
