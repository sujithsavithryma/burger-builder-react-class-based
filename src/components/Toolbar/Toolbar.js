import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Toolbar.module.css';

const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <div>..</div>
        </header>
    );
}

export default toolbar;