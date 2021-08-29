import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { listeEmployes } from "../../api/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../css/ListeEmployes.css";
import { supprimee } from "../../api/api";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModifierPersonnel from "./ModifierPersonnel";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@material-ui/data-grid';

  
    
const RenderEmployeRow = ({emp}) => {

    const [onShow, setOnShow] = useState(false);
    
    const history = useHistory();
    const [employees, setEmployees] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
    const fetchEmployes = async () => {
        const res = await listeEmployes();
        console.log("les employes sont::: ", res);
        setEmployees(res);
        setFetchComplete(true)
      };
    const DeleteEmploye = (id) => {
        console.log("je vais supprimer cette ligne", id);
        supprimee(id).then(() => {
          fetchEmployes();

        });
      };
    return (
    <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}  onClick={()=>{ setOnShow(!onShow)}}>
    { 
    !onShow ? <>
     <TableCell>{emp.nom}</TableCell>
     <TableCell>{emp.prenom}</TableCell>
     {/* <tableCell>{emp.fonction}</tableCell> */}
     {/* <tableCell>{emp.departement}</tableCell> */}
     <TableCell>{emp.email}</TableCell>
     {/* <tableCell>{emp.departement}</tableCell> */}
      <TableCell>{emp.Ntel}</TableCell>
     <TableCell>{emp.adresse}</TableCell>
     <TableCell>{emp.sexe}</TableCell>
     <TableCell>{emp.datenaissance}</TableCell>
     <TableCell>{emp.daterecrutement}</TableCell>  

     <TableCell>
       <DeleteIcon
         className="icone-delete"
         onClick={() => DeleteEmploye(emp._id)}
       />
     
     <EditIcon className="icone-edit"
         onClick={() => history.push('/ModifierPersonnel/'+emp._id)}/>
       <AddIcon className="icone-add"
         onClick={() => history.push('/Ajouterleave/'+emp._id)}/>
         <AddIcon className="icone-add"
         onClick={() => history.push('/AjouterPromotion/'+emp._id)}/>
         <AddIcon className="icone-add"
         onClick={() => history.push('/AjouterFormation/'+emp._id)}/>
      
    
     </TableCell>
     </> : <div>
         <h1>fella falafil</h1>
         <h1>fella falafil</h1>
         <h1>fella falafil</h1></div>}
   </TableRow>  )
}
export default RenderEmployeRow;