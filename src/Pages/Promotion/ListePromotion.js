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
import {listePromotion} from '../../api/api';
import { supprimerpromotion } from '../../api/api';
import "../../css/ListeEmployes.css"
import DeleteIcon from '@material-ui/icons/Delete';



const columns = [
  { id: 'dateeffet', label: 'dateeffet', minWidth: 170 },
  { id: 'observation', label: 'observation', minWidth: 100 },
  { id: 'document', label: 'document', minWidth: 100 },
  { id: 'id_poste', label: 'id_poste', minWidth: 100 },
  { id: 'created_at', label: 'created_at', minWidth: 100 },
  { id: 'created_by', label: 'created_by', minWidth: 100 },
  
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


        
export default function ListePromotion() {

   
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [promotion,setPromotion]= useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  
   useEffect(async()=>
   {
     const res=await listePromotion();  
     console.log("resultat",res)
     setPromotion(res);
    },[]
   )
   const fetchPromotion = async () => {
    const res = await listePromotion();
    console.log("les conges sont::: ", res);
    setPromotion(res);
    setFetchComplete(true)
  };
   const DeletePromotion = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerpromotion(id).then(() => {
      fetchPromotion();
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
            {promotion.map(emp => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
                      <TableCell>
                        {emp.dateeffet}
                      </TableCell>
                      
                      <TableCell>
                        {emp.observation}
                      </TableCell>
                      
                      <TableCell>
                        {emp.document}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.id_poste}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.created_at}
                                        
                      </TableCell>
                      <TableCell>
                        {emp.created_by}
                                        
                      </TableCell>
                      <TableCell>
                      <DeleteIcon
                        className="icone-delete"
                        onClick={() => DeletePromotion(emp._id)}
                      />
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