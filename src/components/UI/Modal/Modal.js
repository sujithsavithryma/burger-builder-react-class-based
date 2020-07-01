import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <Auxillary>
            <Backdrop 
                show={props.show} 
                backdropClick={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxillary>
    );
}

export default modal;
