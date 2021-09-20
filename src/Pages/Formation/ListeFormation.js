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
import {listeformation} from '../../api/api';
import { supprimerformation, modifierformation } from '../../api/api';
import "../../css/ListeEmployes.css";
import "../../css/icon.css"
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';

import "../../css/ListeEmployes.css"

import EditIcon from '@material-ui/icons/Edit';
import {useTheme } from "@material-ui/core/styles";




import { Button, Link, Menu , MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

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




// const columns = [
//   { id: 'dateeffet', label: 'dateeffet', minWidth: 170 },
//   { id: 'observation', label: 'observation', minWidth: 100 },
//   { id: 'document', label: 'document', minWidth: 100 },
//   { id: 'id_poste', label: 'id_poste', minWidth: 100 },
//   { id: 'created_at', label: 'created_at', minWidth: 100 },
//   { id: 'created_by', label: 'created_by', minWidth: 100 },
  
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


        
// export default function ListeFormation() {

   
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [formation,setFormation]= useState([]);
//   const [fetchComplete, setFetchComplete] = useState(false);
 
  
//    useEffect(async()=>
//    {
//      const res=await listeformation();  
//      console.log("resultat",res)
//      setFormation(res);
//     },[]
//    )
//    const fetchFormation = async () => {
//     const res = await listeformation();
//     console.log("les formations sont::: ", res);
//     setFormation(res);
//     setFetchComplete(true)
//   };
//    const DeleteFormation = (id) => {
//     console.log("je vais supprimer cette ligne", id);
//     supprimerformation(id).then(() => {
//       fetchFormation();
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
//             {formation.map(emp => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
//                       <TableCell>
//                         {emp.dateeffet}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.observation}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.document}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.id_poste}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.created_at}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.created_by}
                                        
//                       </TableCell>
//                       <TableCell>
//                       <DeleteIcon
//                         className="icone-delete"
//                         onClick={() => DeleteFormation(emp._id)}
//                       />
//                       </TableCell>
                      
//                 </TableRow>
//               );
//             })}
//           </TableBody> }
//         </Table>
//       </TableContainer>
     
//     </Paper>
  
            
//   );


// }
export default function ListeFormation() {
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
    
        { field: 'dateeffetformat',headerName: 'Date effet', width: 170 },
        { field: 'observation',headerName: 'observation', width: 170 },
        { field: 'document',headerName: 'Nom formation', width: 170 },
        { field: 'id_poste',headerName: 'Document', width: 170 },
        { field: 'created_at',headerName: 'Etablissement', width: 170 },
        { field: 'created_by',headerName: 'Disponibilité', width: 170 },
        {
          field: 'status',
         
          width: 150,
          cellClassName: (params) =>
          
            clsx('super-app', {
              yellow: params.value ==='En cours',
              red: params.value ==="Accepté",
              green: params.value ==="Refusé"
            }),
        },
    {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     {/* <DeleteIcon  className="delete_icon" onClick={()=>DeleteFormation(params.row._id)} />
        */}
        {/* <EditIcon   className="fella" onClick={()=> history.push('/ModifierFormation/'+params.row._id)} /> */}
        <CheckCircleIcon className="validate_icon" onClick={()=>validate(params.row._id)} />
       <CancelIcon className="refuse_icon" onClick={()=>refuse(params.row._id)}/>
        
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
      '& .super-app.yellow': {
        
        color: '#ff8e05',
        fontWeight: '600',
      },
      '& .super-app.red': {
        
        color: '#0CF916',
        fontWeight: '600',
      },
      '& .super-app.green': {
        
        color: '#FE0325',
        fontWeight: '600',
      },
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
  const [formations, setFormations] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    const res = await listeformation();
    console.log("les promotion sont::: ", res);
    setFormations(res);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteFormation= (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerformation(id).then(() => {
      fetchFormations();
    });
  };
  const validate =(id) =>{
  
    modifierformation({status: 'Accepté'},id).then(()=> {

      fetchFormations();
    }
    
    )
  };
  const refuse =(id) =>{
    modifierformation({status: 'Refusé' },id).then(()=> {
      fetchFormations();
    }
    
    )
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const formationsRow= formations.map(emp=>({...emp,id:i++, 
   dateeffetformat:moment(emp.dateeffet).format("YYYY-MM-DD"),
  }))

  
  return (
    <view>
      
      <PageHeader
                title="Liste des Formations"
                subTitle="personnels de l'entreprise"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> 
            <Controls.Input
                        label="Search employe"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />

<Controls.Button
                        text="Ajouter une Formation"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/AjouterFormation')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={formationsRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       {fetchComplete && formations.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
      
    </Paper>
    
   
  </view>
  
  );
}
