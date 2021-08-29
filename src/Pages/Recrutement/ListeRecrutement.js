import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {listeRecrutement} from '../../api/api';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../../css/ListeEmployes.css"
import { supprimee } from '../../api/api';
import Button from '@material-ui/icons/Edit';

const columns = [
  { id: 'Nom', label: 'Nom', minWidth: 170 },
  { id: 'Prenom', label: 'Prenom', minWidth: 100 },
  { id: 'Profil', label: 'Profil', minWidth: 100 },
  { id: 'datederecrutement', label: 'datederecrutement', minWidth: 100 },
  { id: 'ObservationteamRH', label: 'ObservationteamRH', minWidth: 100 },
  { id: 'ObservationteamDEV', label: 'ObservationteamDEV', minWidth: 100 },
  { id: 'Niveau', label: 'Niveau', minWidth: 100 },
  { id: 'Disponibilité', label: 'Disponibilité', minWidth: 100 },
  { id: 'Décision', label: 'Décision', minWidth: 100 },
  { id: 'Dateintegration', label: 'Dateintegration', minWidth: 100 },

  
  /*{
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },*/
];




const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '50px', 
     
  },
  container: {
    maxHeight: 440,
    
  },
});


        
export default function ListeRecrutement() {

   
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [recrutement,setRecrutement]= useState([]);
  
   useEffect(async()=>
   {
     const res=await listeRecrutement();  
     console.log("resultat",res)
     setRecrutement(res);
    },[]
   )
  

   
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,color:'white',backgroundColor:'#5E6BB4' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          { <TableBody>
            {recrutement.map(emp => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
                      <TableCell>
                        {emp.nom}
                      </TableCell>
                      
                      <TableCell>
                        {emp.prenom}
                      </TableCell>
                      
                      <TableCell>
                        {emp.profil}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datederecrutement}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.observationteamRH}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.observationteamDEV}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.niveau}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.disponibilité}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.decision}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.dateintegration}
                                        
                      </TableCell>
                      
                </TableRow>
              );
            })}
          </TableBody> }
        </Table>
      </TableContainer>
     
    </Paper>
  
            
  );


}