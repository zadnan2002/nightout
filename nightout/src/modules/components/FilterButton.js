import { React } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function FilterButton({ handleFilter }) {
    return (
        <Box sx={{ '& > button': { m: 1 } }}>
            <Button variant="contained" color="secondary" endIcon={<AutoAwesomeIcon />} onClick={handleFilter}>
                Filter
            </Button>
        </Box>
    );
}
