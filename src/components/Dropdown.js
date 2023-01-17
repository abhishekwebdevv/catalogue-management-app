import React, { useState } from "react";
import { TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const Dropdown = ({ categories }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <CssTextField id="categories-select" select label="Select Category" sx={{}}>
      {categories.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

Dropdown.propTypes = {
  categories: PropTypes.array,
};

const CssTextField = styled(TextField)({
  minWidth: "20rem",
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    svg: {
      color: "white",
    },
  },
});

export default Dropdown;
