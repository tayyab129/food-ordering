import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
