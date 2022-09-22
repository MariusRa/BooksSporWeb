import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Footer = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
            <AddCircleOutlineIcon sx={{ pr:2 }} color="primary"/>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Book is free
            </Typography>
            <RemoveCircleOutlineIcon sx={{ pr:2 }} color="success"/>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Book is borrowed or rezerved by you
            </Typography>
            <RemoveCircleOutlineIcon sx={{ pr:2 }} color="disabled"/>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Book is borrowed or rezerved by other reader
            </Typography>
        </Toolbar>
    </Box>
  );
}

export default Footer;