import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../../assets/imgs/burger-logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logoImg} alt="Burger Icon" />
        </div>
    )
}

export default logo;