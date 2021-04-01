import React from 'react';

import logo from '../images/logo.svg';

import './styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo de Platzi Badge" />
                    <span style={{fontWeight: '100'}}>Platzi</span>
                    <span>Conf</span>
                </a>
            </div>
        );
    }
}

export default Navbar;
