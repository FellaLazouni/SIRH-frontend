// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// // import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import {listeLeaves} from '../../api/api';
// import { useHistory } from "react-router-dom";
// // import { Router, browserHistory } from 'react-router';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import "../../css/ListeEmployes.css"
// import { supprimerleave } from '../../api/api';
// // import Button from '@material-ui/icons/Edit';
// // import { modifierleave} from '../../api/api';
// import moment from 'moment';

// const calculRelicat =(daterecrutement)=>{
//   return cumulDroitEnMois(daterecrutement) * 2.5
// } 

// const calculeAnciete =(daterecrutement)=>{
//   return daterecrutement ? (moment(new Date()).diff(daterecrutement, 'days')/365)*2 : 'pas de date'
// } 

// const cumulDroitEnMois = (daterecrutement) => {
//   return moment(daterecrutement).format('DD') < 15 ? (Math.round(calculeAnciete(daterecrutement))) : (Math.floor(calculeAnciete(daterecrutement)))
// }

// const columns = [
//   { id: 'nom', label:'Nom', minWidth: 100 },
//   { id: 'prenom', label: 'Prenom', minWidth: 100 },
//   { id: 'teamMember',label:'Team member', minWidth: 100},
//   { id: 'fonction',label:'Fonction', minWidth: 100},
//   { id: 'direction',label:'Direction', minWidth: 100},
//   { id: 'daterecrutement',label:'date recrutement', minWidth: 100},
//   // { id: 'dated"entree',label:'Date d"entree', minWidth: 100},
//   // { id: 'jourdumoisd"entree',label:'Jour du mois d"entree', minWidth: 100},
//   { id: 'anciente', label: 'Anciente', minWidth: 100 },
//   { id: 'droitenmois', label: 'Droit en mois', minWidth: 100 },
//   { id: 'datecongeDU', label: 'Date conge DU', minWidth: 100 },
//   { id: 'datecongeAU', label: 'Date conge AU', minWidth: 100 },
//   { id: 'datereprise', label: 'Date reprise', minWidth: 100 },
//   { id: 'dureedeconge', label: 'Duree de conge', minWidth: 100 },
//   { id: 'interim', label: 'Interim', minWidth: 100 },
//   { id: 'cumuldesdroitdepuisladated"entree', label: 'Cumul des droit depuis la date d"entree', minWidth: 100 },
//   { id: 'statut', label: 'staut', minWidth: 170 },
//   { id: 'observation', label: 'Observation', minWidth: 170 },
  


  
//   /*{
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },*/
// ];




// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     marginTop: '50px', 
     
//   },
//   container: {
//     maxHeight: 440,
    
//   },
// });


        
// export default function ListeLeaves() {

//   const history = useHistory()
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [leaves,setLeaves]= useState([]);
//   const [fetchComplete, setFetchComplete] = useState(false);
 
  
//    useEffect(async()=>
//    {
//      const res=await listeLeaves();  
//      console.log("resultat",res)
//      setLeaves(res);
//     },[]
//    )
//    const fetchLeaves = async () => {
//     const res = await listeLeaves();
//     console.log("les conges sont::: ", res);
//     setLeaves(res);
//     setFetchComplete(true)
//   };
//    const DeleteLeave = (id) => {
//     console.log("je vais supprimer cette ligne", id);
//     supprimerleave(id).then(() => {
//       fetchLeaves();
//     });
//   };


   
//   return (
//     <Paper className={classes.root}>
      
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
             
//                   style={{ minWidth: column.minWidth,color:'white',backgroundColor:'#5E6BB4' }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           { <TableBody>
//             {leaves.map(emp => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
//                       <TableCell>
//                         {emp.nom}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.prenom}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.teamMember}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.fonction}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.direction}

           
//                       </TableCell>
//                       <TableCell>
//                         {emp?.employe[0]?.daterecrutement || "pas de date de recrutement"}

           
//                       </TableCell>
//                       <TableCell>
              
//                         {emp?.employe[0]?.daterecrutement ? calculeAnciete(emp.employe[0].daterecrutement) : 'pas de date' }
//                         </TableCell>

//                         <TableCell>
//                         {emp?.employe[0]?.daterecrutement ? cumulDroitEnMois(emp.employe[0].daterecrutement) : 'pas de date' }
                                       
//                       </TableCell>
//                       <TableCell>
//                         {emp.dateDebutConge}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.dateFinConge}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.datereprise}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.duree}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.interim}
                                        
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp?.employe[0]?.daterecrutement ? calculRelicat(emp.employe[0].daterecrutement) : 'pas de date' }
                                        
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.statut}

                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.observation}
                                        
//                       </TableCell>
                      
//                       <TableCell>
//                       <DeleteIcon
//                         className="icone-delete"
//                         onClick={() => DeleteLeave(emp._id)}
//                       />
//                       <EditIcon className="icone-edit"
//                         onClick={() => history.push('/ModifierLeave/'+emp._id)}/>
//                        </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody> }
//         </Table>
//       </TableContainer>
     
//     </Paper>
  
            
//   );


// }
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
import { ajouterconge, listeLeaves, supprimerleave } from "../../api/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../css/ListeEmployes.css";
import { Button, Link, Menu , MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModifierLeave from "./ModifierLeave";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@material-ui/data-grid';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import useTable from "../../components/useTable";
import {InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import moment from 'moment';
import AjouterLeave from "./AjouterLeave";


export default function ListeLeaves() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [records, setRecords] = useState()
  
  
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.nom.toLowerCase().includes(target.value))
        }
    })
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const columns = [
    
        { id: 'nom', label:'Nom', minWidth: 100 },
        { id: 'prenom', label: 'Prenom', minWidth: 100 },
        { id: 'teamMember',label:'Team member', minWidth: 100},
        { id: 'fonction',label:'Fonction', minWidth: 100},
        { id: 'direction',label:'Direction', minWidth: 100},
        { id: 'daterecrutement',label:'date recrutement', minWidth: 100},
        // { id: 'dated"entree',label:'Date d"entree', minWidth: 100},
        // { id: 'jourdumoisd"entree',label:'Jour du mois d"entree', minWidth: 100},
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
        
      
      
  
    {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     <DeleteIcon   className="fella" onClick={()=>supprimerleave(params.row._id)} />
       
        <EditIcon   className="fella" onClick={()=> history.push('/ModifierLeave/'+params.row._id)} />

      

        
        </div>)
      }}
      
  ]
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, columns, filterFn);
  
    const useStyles = makeStyles(theme => ({
      pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      },
    root: {
      width: "100%",
      marginTop: "50px",
    },
    container: {
      maxHeight: 440,
    },
    newButton: {
      position: 'absolute',
      right: '20px'
    
  },
  searchInput: {
    width: '75%'
},

}));
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [leaves, setLeaves] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    const res = await listeLeaves();
    console.log("les congés sont::: ", res);
    setLeaves(res);
    console.log("les congés hhhh::: ", leaves); 
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteLeave = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerleave(id).then(() => {
      fetchLeaves();
    });
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const leavesRow= leaves.map(emp=>({...emp,id:i++, 
    //anciente:((moment(new Date()).diff(emp.daterecrutement, 'days'))/365)*2
  }))

const addConge=()=>{
  alert(' hello fella')
}
  return (
    <view>
      
      <PageHeader
                title="Liste des Congés"
                subTitle="personnels de l'entreprise"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> 
            <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />

<Controls.Button
                        text="Ajouter Leave"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/AjouterLeave')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={leavesRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       {fetchComplete && leaves.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
      
    </Paper>
    
   
  </view>
  
  );
}
