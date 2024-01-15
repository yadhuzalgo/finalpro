import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movieedit from './Movieedit';
import EditIcon from '@mui/icons-material/Edit';

const Moviedetails = () => {
    var[selected,setSelected]=useState([]);
    var[update,setUpdate]=useState(false);
    var[movie,setMovie]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response => {
            setMovie(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err))
    },[])
 const updateValues=(row)=>{
    setSelected(row)
    setUpdate(true)
 }  
 var result=
      <div>
          <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>MovieId</TableCell>
                            <TableCell >MovieName</TableCell>
                            <TableCell >Discription</TableCell>
                            <TableCell >Language</TableCell>
                            <TableCell >Genre</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movie.map((row, pos) => {
                            return (
                                <TableRow key={pos}
                                >

                                    <TableCell >{row.MovieId}</TableCell>
                                    <TableCell>{row.MovieName}</TableCell>
                                    <TableCell>{row.Discription}</TableCell>
                                    <TableCell >{row.Language}</TableCell>
                                    <TableCell >{row.Genre}</TableCell>
                                    <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell>
                                    
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer> 
      </div>
      if(result)
      result=<Movieedit data={selected}method='put'/>
  return (result)
}

export default Moviedetails
