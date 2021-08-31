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

import {useTheme } from "@material-ui/core/styles";


import { useHistory } from "react-router-dom";

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


        
// export default function ListeRecrutement() {

   
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [recrutement,setRecrutement]= useState([]);
  
//    useEffect(async()=>
//    {
//      const res=await listeRecrutement();  
//      console.log("resultat",res)
//      setRecrutement(res);
//     },[]
//    )
  

   
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
//             {recrutement.map(emp => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
//                       <TableCell>
//                         {emp.nom}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.prenom}
//                       </TableCell>
                      
//                       <TableCell>
//                         {emp.profil}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.datederecrutement}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.observationteamRH}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.observationteamDEV}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.niveau}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.disponibilité}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.decision}
                                        
//                       </TableCell>
//                       <TableCell>
//                         {emp.dateintegration}
                                        
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
export default function ListeRecrutement() {
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

      { id: 'Nom', label: 'Nom', minWidth: 170 },
      { id: 'Prenom', label: 'Prenom', minWidth: 100 },
      { id: 'Profil', label: 'Profil', minWidth: 100 },
      { id: 'datederecrutement', label: 'datederecrutement', minWidth: 100 },
      { id: 'ObservationteamRH', label: 'ObservationteamRH', minWidth: 100 },
      { id: 'ObservationteamDEV', label: 'ObservationteamDEV', minWidth: 100 },
      { id: 'Niveau', label: 'Niveau', minWidth: 100 },
      { id: 'Disponibilité', label: 'Disponibilité', minWidth: 100 },
      { id: 'Décision', label: 'Décision', minWidth: 100 },
      { id: 'Dateintegration', label: 'Dateintegration', minWidth: 100 },,
      {
        width: 150,
        field: "deletaction",
        headerName: "Actions",
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
          <div>
      
          <EditIcon   className="fella" onClick={()=> history.push('/ModifierRecrutement/')} />
  
          
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
    const [recrutements, setRecrutements] = useState([]);
    const [fetchComplete, setFetchComplete] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const pageSize = 8
    useEffect(() => {
      fetchRecrutements();
    }, []);
  
    const fetchRecrutements = async () => {
      const res = await listeRecrutement();
      console.log("les recrutements sont::: ", res);
      setRecrutements(res);
      setFetchComplete(true)
    };
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    
    const ListeAction = (event,id)=>
    {
      setAnchorEl(event.currentTarget);
    }
  let i=0
    const recrutementsRow= recrutements.map(emp=>({...emp,id:i++, 
     
    }))
  
    
    return (
      <view>
        
        <PageHeader
                  title="Suivi des Recrutements"
                  subTitle="historique des entretiens"
                  icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
              /> 
              <Controls.Input
                          label="Search "
                          className={classes.searchInput}
                          InputProps={{
                              startAdornment: (<InputAdornment position="start">
                                  <Search />
                              </InputAdornment>)
                          }}
                          onChange={handleSearch}
                      />
  
  <Controls.Button
                          text="Ajouter un suivi"
                          variant="outlined"
                          startIcon={<AddIcon />}
                          className={classes.newButton}
                          onClick={() => {history.push('/AjouterRecrutement')}}
                          // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                      />
                    <br>
                    </br>
      <Paper className={classes.root}>
      <div style={{ height: 130+pageSize*53, width: '100%' }}>
        <DataGrid
          rows={recrutementsRow}
          columns={columns}
          pageSize={pageSize}
        />
      </div>
         {fetchComplete && recrutements.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
        
      </Paper>
      
     
    </view>
    
    );
  }
  