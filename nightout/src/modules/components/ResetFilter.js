import { React } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

export default function ResetFilter({ resetFilter }) {
    return (
        <Box sx={{ '& > button': { m: 1 } }}>
            <Button variant="contained" color="info" endIcon={<RotateLeftIcon />} onClick={resetFilter}>
                Reset Filter
            </Button>
        </Box>
    );
}
