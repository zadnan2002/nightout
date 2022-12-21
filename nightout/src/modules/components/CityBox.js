import { React } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Box } from '@mui/system';

export default function CityBox({ cities, value, changeCity }) {
    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                    value={value}
                    id="city-select"
                    labelId="city-label"
                    label="City"
                    onChange={changeCity}
                >
                    {cities.map((v) => {
                        return <MenuItem value={v}>{v}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>

    );
}