import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Search from '../search/Search';

const Nav = (props) => {
    const users = props;
    const {setUserId, setBooksList} = props;
        
    const staticUser = users["users"].map((user) => {return (<MenuItem key={user.userId} value={user.userId}>{user.name}</MenuItem>)})
        
    const handleChange = (e) => {
        setUserId(e.target.value)
    }
        
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Books spot
          </Typography>
          <Box sx={{ minWidth: 120, pr:8, py:2 }}>
            <FormControl fullWidth>
              <Search setBooksList={setBooksList}/>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                 label="User"
                 onChange={handleChange}
                >
                {staticUser}
                </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;