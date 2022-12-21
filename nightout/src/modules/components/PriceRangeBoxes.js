import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PriceRangeBoxes({ changeMinPrice, changeMaxPrice, minValue, maxValue}) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Min. Price" value={minValue} onChange={changeMinPrice} variant="outlined" type="number" />
            <TextField id="outlined-basic" label="Max. Price" value={maxValue} onChange={changeMaxPrice} variant="outlined" type="number" />
        </Box>
    );
}