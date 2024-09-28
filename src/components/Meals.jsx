import React from "react";
import useHttp from "../hooks/useHttp.js";
import Mealitem from "./Mealitem.jsx";
import Error from "./UI/Error.jsx";

const requestConfig = {};
const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Faild to fetch meals" message={error} />;
  }

  // if (!data) {
  //   return <p>Meals not found.</p>;
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
