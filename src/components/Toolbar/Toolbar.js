import React from 'react';
import Logo from '../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle toggle={props.toggle} />
            <Logo />
            <div>
                {props.children}
            </div>
        </header>
    );
}

export default toolbar;