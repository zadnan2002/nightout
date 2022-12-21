import { React } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Box } from '@mui/system';


export default function GenreBox({ genres, value, changeGenre }) {
    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="genre-label">Genre</InputLabel>
                <Select
                    value={value}
                    id="genre-select"
                    labelId="genre-label"
                    label="Genre"
                    onChange={changeGenre}
                >
                    {genres.map((v) => {
                        return <MenuItem value={v}>{v}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}