import { React } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Box } from '@mui/system';

export default function VenueBox({ venues, value, changeVenue }) {
    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                    value={value}
                    id="venue-select"
                    labelId="venue-label"
                    label="Venue"
                    onChange={changeVenue}
                >
                    {venues.map((v) => {
                        return <MenuItem value={v}>{v}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}