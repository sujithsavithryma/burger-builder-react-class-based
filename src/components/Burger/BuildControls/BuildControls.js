import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControl = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> Current Price: <strong> {props.totalPrice.toFixed(2)} </strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    disabled={props.disableInfo[ctrl.type]} 
                    moreClick={() => props.ingredientAdded(ctrl.type)}
                    lessClick={() => props.ingredientRemoved(ctrl.type)} />
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
}

export default buildControl;
