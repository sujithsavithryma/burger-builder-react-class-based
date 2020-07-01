import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';
import Nav from '../Nav/Nav';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component {
    
    state = {
        sideDrawerOpen: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    render() {
        return (
            <Auxillary>
                <Toolbar>
                    <div className={classes.DesktopOnly}>
                        <Nav />
                    </div>
                </Toolbar>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.sideDrawerOpen} />
                <main className={classes.Layout}> {this.props.children} </main>
            </Auxillary>
        );
    }
}

export default Layout;
