import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@mui/material";

const ProductCard = ({ product }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleChange = () => {
    setSeeMore((prev) => !prev);
  };

  return (
    <Box
      sx={{
        border: "2px solid black",
        borderRadius: "8px",
        padding: "1rem 1rem 0rem 1rem",
        height: "100%",
      }}
    >
      <img src={product.image} style={{ width: "100%", height: "15rem" }} />
      <Divider sx={{ bgcolor: "black" }} />
      <Box sx={{ paddingY: "1rem" }}>
        <Typography variant="body1">{product.title}</Typography>
        {product.description.length > 150 ? (
          <Typography variant="caption">
            {seeMore ? product.description : product.description.slice(0, 150)}
            <span
              style={{
                color: "blue",
                textDecorationLine: "underline",
                cursor: "pointer",
              }}
              onClick={handleChange}
            >
              {" "}
              {seeMore ? "See Less" : "See More"}
            </span>
          </Typography>
        ) : (
          <Typography variant="caption">{product.description}</Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>&#8377; {product.price}</Typography>
        <Typography>{product.rating.rate} &#9733;</Typography>
      </Box>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
