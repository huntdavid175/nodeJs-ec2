import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {} from "react";

const MenuToggler = ({ currentMenu, setCurrentMenu, categories }) => {
  const handleChange = (event, newAlignment) => {
    const selectedCategory = categories.find(
      (category) => category.name === newAlignment
    );
    if (selectedCategory) {
      console.log(selectedCategory);
      newAlignment && setCurrentMenu(selectedCategory);
    }
  };

  return (
    <Box textAlign={"center"}>
      <ToggleButtonGroup
        size="small"
        value={currentMenu ? currentMenu.name : ""}
        color="error"
        exclusive
        onChange={handleChange}
      >
        {categories.map((category) => (
          <ToggleButton
            key={category.id}
            sx={{ textTransform: "capitalize", border: "none", mx: 1.2 }}
            value={category.name}
          >
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default MenuToggler;
