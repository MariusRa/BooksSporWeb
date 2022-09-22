import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'


const Search = (props) => {
    const [postInfo, setPostInfo] = useState(null);
    const {setBooksList} = props;
    const [search, setSearch] = useState();
    
    const searchHandler = async () => {
        if (search !== ""){
            await fetch(`https://localhost:7251/api/Books/search`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search})
        })
                .then(response => response.json())
                .then(data=>setBooksList(data))
                .then(data=>setPostInfo(data))
                .catch(error => console.log(error))
        } else {
            await fetch(`https://localhost:7251/api/Books`, {
                method: 'get',
            })
                .then(response => response.json())
                .then(data => setBooksList(data))
                .catch(error => console.log(error));
        }
    }
   
    return (
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Book"
            onChange={e=>setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchHandler}>
            <SearchIcon />
        </IconButton>
        
        </Paper>
    );
}

export default Search;