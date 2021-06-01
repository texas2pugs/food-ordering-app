import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAvailableMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://react-test-152b7-default-rtdb.firebaseio.com/meals-available.json'
      );
      const data = await response.json();
      console.log(data);

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchAvailableMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <ul>{mealsList}</ul>}
        {isLoading && <p>Loading available meals ...</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
