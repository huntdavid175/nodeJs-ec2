import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState, useEffect } from "react";

const SizeSelector = ({ mealSizes }) => {
  const [currentSize, setCurrentSize] = useState(null);

  useEffect(() => {
    mealSizes && setCurrentSize(mealSizes[0]);
  }, [mealSizes]);

  const handleChange = (event, newAlignment) => {
    const selectedSize = mealSizes.find((size) => size.name === newAlignment);
    if (selectedSize) {
      console.log(selectedSize);
      newAlignment && setCurrentSize(selectedSize);
    }
  };
  // console.log(currentSize);
  return (
    <Box textAlign={"left"}>
      <ToggleButtonGroup
        size="small"
        value={currentSize ? currentSize.name : ""}
        color="error"
        exclusive
        onChange={handleChange}
      >
        {mealSizes &&
          mealSizes.map((size) => (
            <ToggleButton
              key={size.id}
              sx={{ textTransform: "capitalize", border: "none" }}
              value={size.name}
            >
              {size.name}
            </ToggleButton>
          ))}
        {/* {mealSizes && mealSizes.map((size) => <div>{size.name}</div>)} */}
      </ToggleButtonGroup>
    </Box>
  );
};

export default SizeSelector;
