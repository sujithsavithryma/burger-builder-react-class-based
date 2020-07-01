import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    let ingredientsList = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
            .map((_, index) => {
                return <BurgerIngredient key={ingKey + index} type={ingKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (ingredientsList.length === 0) {
        ingredientsList = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { ingredientsList }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;
