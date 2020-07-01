import React from 'react';
import buttonClasses from './Button.module.css';

const button = (props) => (
    <button 
        onClick={props.clicked}
        className={[buttonClasses.Button, buttonClasses[props.color]].join(' ')}>
        {props.children}
    </button>
);

export default button;
