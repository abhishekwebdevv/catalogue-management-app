import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <CircularProgress />
      <Typography mt={2} variant="h6">Loading Products...</Typography>
    </Box>
  )
}

export default Loader
