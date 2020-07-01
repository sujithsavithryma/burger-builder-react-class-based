import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';
import Nav from '../Nav/Nav';

const layout = (props) => {
    return (
        <Auxillary>
            <Toolbar>
                <Nav></Nav>
            </Toolbar>
            <main className={classes.Layout}> {props.children} </main>
        </Auxillary>
    );
}

export default layout;
