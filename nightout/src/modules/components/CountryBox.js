import { React } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Box } from '@mui/system';

export default function CountryBox({ countries, value, changeCountry }) {
    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                    value={value}
                    id="country-select"
                    labelId="country-label"
                    label="Country"
                    onChange={changeCountry}
                >
                    {countries.map((v) => {
                        return <MenuItem value={v}>{v}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>

    );
}