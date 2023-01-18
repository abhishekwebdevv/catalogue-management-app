import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import ProductCard from '../components/ProductCard'

const displayProducts = (products, category) => {
  if (category === 'All' || category === '') return products

  return products.filter((item) => item.category === category)
}

const ProductList = ({ products, category }) => {
  return (
    <Box sx={{ padding: '4rem' }}>
      <Grid container spacing={12}>
        {displayProducts(products, category).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
}

export default ProductList
