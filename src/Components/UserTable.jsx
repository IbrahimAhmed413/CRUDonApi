import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

export function UserTable() {
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     response.json().then((result) => {
  //       setPost(result);
  //     });
  //   });
  // });
  const [mydata, setMydata] = useState([]);
  let Url = "https://jsonplaceholder.typicode.com/posts";
  function fetchdata() {
    Axios.get(Url).then((response) => {
      setMydata(response.data);
    });
  }
  useEffect(() => {
    fetchdata();
  }, []);

  function handledelete(id){
    axios.delete('https://jsonplaceholder.typicode.com/posts/${id}').then(()=>{
      fetchdata();
    })
  }
  return (
    <>
      <Link to='/Post'>
        <Button variant="contained">Add User</Button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "lightgrey" }}>
              <TableCell>ID</TableCell>
              <TableCell align="centre">Title</TableCell>
              <TableCell align="centre">Body</TableCell>
              <TableCell align="centre"> Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mydata.map((row) => (
              <TableRow
                key={row.Id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.body}</TableCell>
                <TableCell>
                  <button>Edit</button>
                  <button onClick={()=>handledelete(row.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
