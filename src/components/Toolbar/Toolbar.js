import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            {props.children}
        </header>
    );
}

export default toolbar;