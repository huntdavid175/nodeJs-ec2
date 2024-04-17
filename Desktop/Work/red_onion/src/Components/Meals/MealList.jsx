import React, { useEffect, useMemo } from "react";
import axios from "axios";
import Card from "../Card/Card";

const MealList = React.memo(({ currentMenu, meals, setMeals }) => {
  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/menu/categories/${currentMenu.id}`
      );

      setMeals(response.data.data.menus);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentMenu !== null) {
      fetchMeals();
    }
  }, [currentMenu]);

  return (
    <div>
      {/* Meals */}
      <h3 className="text-red-700 text-xl text-center">Classic</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 lg:gap-8 gap-8">
        {meals.length > 0 &&
          meals.map((meal) => <Card key={meal.id} meal={meal} />)}
      </div>
    </div>
  );
});

export default MealList;
