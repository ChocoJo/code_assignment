import React from 'react';
import tretton37_logga from '../../utils/images/logo/tretton37_logga.png';
import './Navigation.css';

export const Navigation = () => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/" tabIndex="0">
              <img className="logo" src={tretton37_logga} alt="Tretton 37 logo, redirect to home view when clicked"/>
            </a>
        </nav>
    )
}
