import React from 'react';

import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = (props) => {
  const mealData = props.meal;
  const price = `$${mealData.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{mealData.name}</h3>
      </div>
      <div className={styles.description}>{mealData.description}</div>
      <div className={styles.price}>{price}</div>
      <div>
        <MealItemForm id={mealData.id} />
      </div>
    </li>
  );
};

export default MealItem;
