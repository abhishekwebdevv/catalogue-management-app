import React from "react";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Nav = ({ categories, category, setCategory }) => {
  return (
    <Box sx={{ backgroundColor: "#4a86e8", padding: "1rem 0rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0rem 5rem",
        }}
      >
        <Dropdown categories={categories} category={category} setCategory={setCategory} />
      </Box>
    </Box>
  );
};

Nav.propTypes = {
  categores: PropTypes.array,
  category: PropTypes.string,
  setCategory: PropTypes.func
};

export default Nav;
