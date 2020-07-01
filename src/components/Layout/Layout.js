import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <Auxillary>
            <Toolbar />
            <main className={classes.Layout}> {props.children} </main>
        </Auxillary>
    );
}

export default layout;
