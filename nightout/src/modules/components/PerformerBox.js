import { React } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Box } from '@mui/system';


export default function PerformerBox({ performers, value, changePerformer }) {
    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="performer-label">Performer</InputLabel>
                <Select
                    value={value}
                    id="performer-select"
                    labelId="performer-label"
                    label="Performer"
                    onChange={changePerformer}
                >
                    {performers.map((v) => {
                        return <MenuItem value={v}>{v}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}