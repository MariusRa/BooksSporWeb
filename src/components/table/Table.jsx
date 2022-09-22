import React from 'react';
import Output from "../output/Output";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BooksTable = (props) => {
  const {userId, booksList} = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">ISBN</TableCell>
            <TableCell align="right">Borrow</TableCell>
            <TableCell align="right">Reserve</TableCell>
          </TableRow>
        </TableHead>
        <Output booksList={booksList} userId={userId}/>
      </Table>
    </TableContainer>
  );
}

export default BooksTable;