import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const Dropdown = ({ categories, category, setCategory }) => {
    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    return (
        <CssTextField
            id="categories-select"
            select
            label="Select Category"
            defaultValue=""
            onChange={handleChange}
        >
            {categories.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </CssTextField>
    )
}

Dropdown.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.string,
    setCategory: PropTypes.func,
}

const CssTextField = styled(TextField)({
    maxWidth: '20rem',
    width: '100%',
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'white',
    },
    '& .MuiInputBase-input': {
        color: 'white',
    },
    '& .MuiInputBase-root': {
        svg: {
            color: 'white',
        },
    },
})

export default Dropdown
