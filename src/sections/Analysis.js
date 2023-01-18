import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Dialog,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material'

import AnalysisChart from '../components/AnalysisChart'

const Analysis = ({ products, categories }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const sm = useMediaQuery('(min-width:600px)')

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Box>
      <Button
        variant="contained"
        sx={{ position: 'fixed', bottom: 30, right: 50 }}
        onClick={() => setOpenDialog(true)}
      >
        Analyze
      </Button>
      <Dialog
        fullWidth
        maxWidth={sm ? 'md' : 'sm'}
        open={openDialog}
        onClose={handleClose}
      >
        <Box sx={{ padding: '1rem 2rem' }}>
          <Typography variant={sm ? 'h5' : 'h6'} align="center">
            Categories in Catalogue
          </Typography>
          <IconButton
            sx={{
              color: 'rgba(0, 0, 0, 1)',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onClick={handleClose}
          >
            &#10060;
          </IconButton>

          <Box sx={{ paddingX: sm ? '110px' : '0px' }}>
            <AnalysisChart products={products} categories={categories} />
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

Analysis.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.array,
}

export default Analysis
