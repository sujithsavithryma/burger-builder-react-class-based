import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const navigation = (props) => {
    return (
        <ul className={classes.Nav}>
            <NavItem  link="/" active> Burger Builder </NavItem>
            <NavItem link="/" > Checkout </NavItem>
        </ul>
    );
}

export default navigation;
