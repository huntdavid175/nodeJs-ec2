import { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import MenuToggler from "./MenuToggler/MenuToggler";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../App";
import axios from "axios";
import MealList from "./MealList";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [cart, setCart] = useContext(cartContext);

  const navigate = useNavigate();

  // Setting the Default Meal
  // useEffect(() => setCurrentMenu(getDefaultMeal), []);

  // Get selected Menu meals from FakeMeals
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/menu/categories"
        );

        setCategories(response.data.data);
        setCurrentMenu(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // console.log(meals);

  return (
    <section className="space-y-9">
      {/* Toggle Menu */}
      <MenuToggler
        categories={categories}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />

      {/* Meals */}

      <MealList currentMenu={currentMenu} meals={meals} setMeals={setMeals} />

      {/* Check Out Cart Button */}
      <Box textAlign={"center"}>
        <Button
          disabled={cart.length < 1}
          onClick={() => navigate("/cart")}
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="error"
        >
          Check out your meal
        </Button>
      </Box>
    </section>
  );
};

export default Meals;
