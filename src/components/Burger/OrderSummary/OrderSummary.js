import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return(
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        ); 
    })
    

    return(
        <Aux>
            <h3 style={{color: '#7AC5CD'}}>Your Order</h3>
            <p>A delicious Black Burger with the following ingredients:</p>
            <ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );

};


export default orderSummary;