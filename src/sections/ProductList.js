import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const displayProducts = (products) => {
    return products;
}

const ProductList = ({ products }) => {
  return (
    <Box sx={{ padding: "4rem" }}>
      <Grid container spacing={12}>
        {displayProducts(products).map((product) => (
          <Grid item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
