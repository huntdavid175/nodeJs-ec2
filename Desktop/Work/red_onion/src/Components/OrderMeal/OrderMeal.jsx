import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { allMeals, localStorageHandler } from "../../assets/FakeData/FakeData";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoBackButton from "../GoBackButton/GoBackButton";
import QuantityController from "../QuantityController/QuantityController";
import { Button, Fade, useMediaQuery } from "@mui/material";
import { cartContext, updateCartContext } from "../../App";
import MassagePopup from "../MassagePopup/MassagePopup";
import SizeSelector from "../Meals/MenuToggler/SizeSelector";

const OrderMeal = () => {
  // Get clicked Meal by its Id
  const { mealId } = useParams();
  const meal = allMeals.find((meal) => meal.id === Number.parseInt(mealId));
  const { id, name, description, img, price } = meal;

  const [meals, setMeals] = useState(null);
  const [mealQuantity, setMealQuantity] = useState(1);

  const [cart, setCart] = useContext(cartContext);
  const [updatedCart, setUpdatedCart] = useContext(updateCartContext);
  const [isAddedToCartSuccessful, setIsAddedToCartSuccessful] = useState(false);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    fetchMeals(mealId);
  }, []);

  const fetchMeals = async (menuId) => {
    console.log(menuId);
    try {
      const response = await axios.get(`http://localhost:3000/menu/${menuId}`);
      console.log(response.data.data);
      setMeals(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meals);

  // Add To Cart Handler
  const handleAddToCart = () => {
    const orderedMeal = {
      ...meal,
      total: price * mealQuantity,
      quantity: mealQuantity,
    };
    const newCart = cart.filter((cartItem) => cartItem.id !== orderedMeal.id);
    setCart([orderedMeal, ...newCart]);
    localStorageHandler("set", "cart", [orderedMeal, ...newCart]);

    setIsAddedToCartSuccessful(!isAddedToCartSuccessful);
  };

  // Pop-up massage dialog handler
  const handlePopup = () => {
    setIsAddedToCartSuccessful(!isAddedToCartSuccessful);
  };
  return (
    <Fade in={true} onDurationChange={() => 1500}>
      <main className="min-h-screen container lg:space-y-6 md:space-y-20 sm:space-y-20 space-y-5 px-4 mb-10 md:mb-0 mx-auto">
        {/* If meal added successfully
                  this pop-up will be visible */}
        <MassagePopup
          message={"Added Successfully"}
          open={isAddedToCartSuccessful}
          handleClose={handlePopup}
        />

        {/* GoBack Button */}
        <GoBackButton navigate={"/home"} />

        <div className=" container flex align-middle mx-auto">
          <section className="flex sm:flex-row flex-col-reverse my-auto mx-auto sm:max-w-none max-w-[30em]">
            <div className="md:w-6/12 sm:w-7/12 flex align-middle px-8">
              <div className="xl:space-y-8 lg:space-y-6 sm:space-y-3 space-y-3.5 my-auto">
                {/* Meal Details */}
                <div className="xl:space-y-8 lg:space-y-5 md:space-y-4 space-y-2">
                  <h1 className="font-semibold lg:text-4xl md:text-2xl text-xl">
                    {meals && meals.food_name}
                  </h1>
                  <p className="text-gray-700 text-justify lg:text-base text-sm">
                    {meals && meals.description}
                  </p>
                </div>

                <div className="flex align-middle sm:space-x-12 space-x-16">
                  {/* Price  */}
                  <h1 className="my-auto xl:text-4xl lg:text-3xl text-2xl font-sans">
                    ${price}
                  </h1>

                  {/* Quantity Count */}
                  <QuantityController
                    cartItemCard={false}
                    mealQuantity={mealQuantity}
                    setMealQuantity={setMealQuantity}
                  />
                </div>
                <div className="py-6">
                  <h1>Sizes</h1>
                  <SizeSelector mealSizes={meals?.sizes || []} />
                </div>
                {/* Add To Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  sx={{ borderRadius: 20, textTransform: "capitalize" }}
                  size={`${isLargeScreen ? "large" : "medium"}`}
                  color="error"
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                >
                  Add
                </Button>
              </div>
            </div>

            {/* Meal Image */}
            <div className="md:w-6/12 sm:w-5/12 sm:mb-0 mb-6">
              <img
                className="h-52 sm:h-64 md:h-66 lg:h-96 xl:h-96 mx-auto my-auto cursor-pointer"
                src={meals ? meals.image_url : ""}
                alt={name}
              />
            </div>
          </section>
        </div>
      </main>
    </Fade>
  );
};

export default OrderMeal;
