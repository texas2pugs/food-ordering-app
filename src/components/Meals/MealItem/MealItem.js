import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const mealData = props.meal;
  const price = `$${mealData.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: mealData.id,
      name: mealData.name,
      amount: mealData.amount,
      price: mealData.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{mealData.name}</h3>
      </div>
      <div className={styles.description}>{mealData.description}</div>
      <div className={styles.price}>{price}</div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
