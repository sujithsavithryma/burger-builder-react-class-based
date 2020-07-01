import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[type] += 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: ingredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[type] -= 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredients);
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({purchasing: false});
        alert('hooray, Your Order has been taken');
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Auxillary>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        orderCancel={this.purchaseCancelHandler}
                        orderContinue={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disableInfo={disableInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchase={this.purchaseHandler}/>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;
