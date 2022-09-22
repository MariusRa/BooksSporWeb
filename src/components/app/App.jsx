import React, {useState, useEffect} from "react";
import Container from "@mui/material/Container";
import BooksTable from "../table/Table";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer"

function App () {
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState();
    const [booksList, setBooksList] = useState([]);

    useEffect(() =>{
        fetch(`https://localhost:7251/api/Users`, {
          method: 'get',
        })
            .then(response => response.json())
            .then(data => setUserList(data))
            .catch(error => console.log(error));
    },[]);

    useEffect(() =>{
        fetch(`https://localhost:7251/api/Books`, {
          method: 'get',
        })
            .then(response => response.json())
            .then(data => setBooksList(data))
            .catch(error => console.log(error));
            
    },[]);
    
    return(
        <Container fixed> 
            <Nav users={userList} setUserId={setUserId} setBooksList={setBooksList}/>
            <BooksTable userId={userId} booksList={booksList}/>
            <Footer/>
        </Container>

    )
}

export default App;