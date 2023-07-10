import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BackButton(props) {
  return (
    <Stack direction="row" spacing={2} style={{display: "inline"}}>
        <Button 
            variant="outlined" 
            startIcon={<ArrowBackIosIcon />}
            onClick={props.onClick}
        >
            Back
        </Button>
    </Stack>
  );
}