import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = ingr => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingr
  };
};
export const removeIngredient = ingr => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingr
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};
export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get(
        "https://my-react-burger-project-1762b.firebaseio.com/ingredients.json"
      )
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
