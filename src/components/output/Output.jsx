import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import BorrowButton from "../buttons/BorrowButton";
import ReservationButton from "../buttons/ReservationButton";
import TableBody from '@mui/material/TableBody';

const Output = (props) =>{
  const booksList = props;
  const {userId} = props;
   
    return(
      <TableBody>
        {booksList["booksList"].map((book) => (
          <TableRow
          key={book.bookId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">{book.title}</TableCell>
          <TableCell align="right">{book.author}</TableCell>
          <TableCell align="right">{book.publisher}</TableCell>
          <TableCell align="right">{book.publishingDate}</TableCell>
          <TableCell align="right">{book.genre}</TableCell>
          <TableCell align="right">{book.isbN10}</TableCell>
          <TableCell align="right"><BorrowButton reader={book.bookBorrowed} book={book.bookId} user={userId}/></TableCell>
          <TableCell align="right"><ReservationButton reader={book.bookReserved} user={userId} book={book.bookId}/></TableCell>
        </TableRow>
        ))}
      </TableBody>
      
            
          )
}

export default Output;