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
  { id: 'nom', label:'Nom', minWidth: 100 },
  { id: 'prenom', label: 'Prenom', minWidth: 100 },
  {id:  'email',label:'Email',minWidth:100},
  { id: 'teammember',label:'Team member', minWidth: 100},
  { id: 'fonction',label:'Fonction', minWidth: 100},
  { id: 'direction',label:'Direction', minWidth: 100},
  { id: 'dated"entree',label:'Date d"entree', minWidth: 100},
  { id: 'jourdumoisd"entree',label:'Jour du mois d"entree', minWidth: 100},
  { id: 'anciente', label: 'Anciente', minWidth: 100 },
  { id: 'droitenmois', label: 'Droit en mois', minWidth: 100 },
  { id: 'datecongeDU', label: 'Date conge DU', minWidth: 100 },
  { id: 'datecongeAU', label: 'Date conge AU', minWidth: 100 },
  { id: 'datereprise', label: 'Date reprise', minWidth: 100 },
  { id: 'dureedeconge', label: 'Duree de conge', minWidth: 100 },
  { id: 'interim', label: 'Interim', minWidth: 100 },
  { id: 'cumuldesdroitdepuisladated"entree', label: 'Cumul des droit depuis la date d"entree', minWidth: 100 },
  { id: 'statut', label: 'staut', minWidth: 170 },
  { id: 'observation', label: 'Observation', minWidth: 170 },
  


  
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


        
export default function ListeLeaves() {

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
                        {emp.teammember}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.fonction}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.direction}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.dateentree}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.jourdumoisdentree}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.ancientee}
                        </TableCell>
                        <TableCell>
                        {emp.cumuldroitenmois}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datecongedu}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datecongeau}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.datereprise}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.duree}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.interim}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.cumuldesdroitsdepuisdateentree}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.statut}

                                        
                      </TableCell>
                      <TableCell>
                        {emp.observation}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.commentaire}
                                        
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