import React, {useState} from "react";
import Button from "@mui/material/Button"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useEffect } from "react";

const BorrowButton = (props) =>{
    const [postInfo, setPostInfo] = useState(null);
    const {reader, book, user} = props;
    const [isBorrowed, setIsBorrowed] = useState(reader);
    const [bookId, setBookId] = useState(book);
    const [userId, setUserId] = useState(user);

    useEffect(() => {
      setUserId(user)
    });

    let icon;
    if(isBorrowed === ""){
      icon = (<AddCircleOutlineIcon/>)
    } else if(isBorrowed === userId){
      icon = (<RemoveCircleOutlineIcon color="success"/>)
    }else{
      icon = (<RemoveCircleOutlineIcon color="disabled"/>)
    }

    const borrowingHandler = async (e) => {
      if (isBorrowed === "") {
        setIsBorrowed(userId);
      }else{
        setIsBorrowed("");
      }
      await fetch(`https://localhost:7251/api/Books/borrow`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookId,
          userId
        })
    })
            .then(response => response.json())
            .then(data=>setPostInfo(data))
            .catch(error => console.log(error))
    }
    
    return(
        <Button onClick={borrowingHandler}>{icon}</Button>  
        )
    
}

export default BorrowButton;