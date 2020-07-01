import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Backdrop from '../UI/Backdrop/Backdrop';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxillary>
            <Backdrop 
                show={props.open}
                backdropClick={props.closed} />
            <div 
                className={attachedClasses.join(' ')}>
                <h2>Burger Builder</h2>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Nav />
                </nav>
            </div>
       </Auxillary>
    );
}

export default sideDrawer;
