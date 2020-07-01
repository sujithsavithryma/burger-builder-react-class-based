import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const style = {
        textTranform: 'capitalize'
    }
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>  <span style={style}>
                    {ingKey} :
                </span> 
                { props.ingredients[ingKey] }
            </li>
        });

    return (
        <Auxillary>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                clicked={props.orderCancel} 
                color="Danger">
                CANCEL
            </Button>
            <Button 
                clicked={props.orderContinue} 
                color="Success">
                CONTINUE
            </Button>
        </Auxillary>
    );
}

export default orderSummary;
