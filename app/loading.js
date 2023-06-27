"use client";
import { Box, LinearProgress } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ width: '100%' }}>
            <h1>Loading...</h1>
            <LinearProgress />
        </Box>
    )
}