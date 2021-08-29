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
import {listeLeaves} from '../../api/api';
import { useHistory } from "react-router-dom";
import { Router, browserHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../../css/ListeEmployes.css"
import { supprimerleave } from '../../api/api';
import Button from '@material-ui/icons/Edit';
import { modifierleave} from '../../api/api';


const columns = [
  { id: 'nom', label: 'Nom', minWidth: 170 },
  { id: 'prenom', label: 'Prenom', minWidth: 100 },
  { id: 'team member',label:'team member', minWidth: 100},
  { id: 'fonction',label:'fonction', minWidth: 100},
  { id: 'direction',label:'direction', minWidth: 100},
  { id: 'date d"entree',label:'date d"entree', minWidth: 100},
  { id: 'jour du mois d"entree',label:'jour du mois d"entree', minWidth: 100},

  { id: 'anciente', label: 'Anciente', minWidth: 100 },
  { id: 'droit en mois', label: 'droit en moi', minWidth: 100 },
  { id: 'date conge DU', label: 'date conge AU', minWidth: 100 },
  { id: 'Date reprise', label: 'Date reprise', minWidth: 100 },
  { id: 'duree de conge', label: 'duree de conge', minWidth: 100 },
  { id: 'cumul des droit depuis la date d"entree', label: 'cumul des droit depuis la date d"entree', minWidth: 100 },
  { id: 'statut', label: 'staut', minWidth: 170 },
  { id: 'obser', label: 'Nom', minWidth: 170 },

  
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


        
export default function SuiviLeave() {

  const history = useHistory()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [leaves,setLeaves]= useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
 
  
   useEffect(async()=>
   {
     const res=await listeLeaves();  
     console.log("resultat",res)
     setLeaves(res);
    },[]
   )
   const fetchLeaves = async () => {
    const res = await listeLeaves();
    console.log("les conges sont::: ", res);
    setLeaves(res);
    setFetchComplete(true)
  };
   const DeleteLeave = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerleave(id).then(() => {
      fetchLeaves();
    });
  };


   
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
            {leaves.map(emp => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
                      <TableCell>
                        {emp.nom}
                      </TableCell>
                      
                      <TableCell>
                        {emp.prenom}
                      </TableCell>
                      
                      <TableCell>
                        {emp.email}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.typedeconge}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datedebutconge}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datefinconge}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.duree}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.interim}
                                        
                      </TableCell>
                      <TableCell>
                      <DeleteIcon
                        className="icone-delete"
                        onClick={() => DeleteLeave(emp._id)}
                      />
                      <EditIcon className="icone-edit"
                        onClick={() => history.push('/ModifierLeave/'+emp._id)}/>
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