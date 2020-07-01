import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

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

            <p>Continue to checkout?</p>
        </Auxillary>
    );
}

export default orderSummary;
