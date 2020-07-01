import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 4
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
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disableInfo={disableInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} />
            </Auxillary>
        );
    }
}

export default BurgerBuilder;
