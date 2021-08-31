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
import EditIcon from '@material-ui/icons/Edit';
import {useTheme } from "@material-ui/core/styles";




import { Button, Link, Menu , MenuItem } from "@material-ui/core";
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


        
// export default function ListePromotion() {

   
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [promotion,setPromotion]= useState([]);
//   const [fetchComplete, setFetchComplete] = useState(false);
  
//    useEffect(async()=>
//    {
//      const res=await listePromotion();  
//      console.log("resultat",res)
//      setPromotion(res);
//     },[]
//    )
//    const fetchPromotion = async () => {
//     const res = await listePromotion();
//     console.log("les conges sont::: ", res);
//     setPromotion(res);
//     setFetchComplete(true)
//   };
//    const DeletePromotion = (id) => {
//     console.log("je vais supprimer cette ligne", id);
//     supprimerpromotion(id).then(() => {
//       fetchPromotion();
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
//             {promotion.map(emp => {
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
//                         onClick={() => DeletePromotion(emp._id)}
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
export default function ListePromotion() {
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
    
        { id: 'dateeffet', label: 'dateeffet', minWidth: 170 },
        { id: 'observation', label: 'observation', minWidth: 100 },
        { id: 'document', label: 'document', minWidth: 100 },
        { id: 'id_poste', label: 'id_poste', minWidth: 100 },
        { id: 'created_at', label: 'created_at', minWidth: 100 },
        { id: 'created_by', label: 'created_by', minWidth: 100 },
    {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     <DeleteIcon   className="fella" onClick={()=>DeletePromotion(params.row._id)} />
       
        <EditIcon   className="fella" onClick={()=> history.push('/ModifierPromotion/'+params.row._id)} />

        
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
  const [promotions, setPromotions] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    const res = await listePromotion();
    console.log("les promotion sont::: ", res);
    setPromotions(res);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeletePromotion = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerpromotion(id).then(() => {
      fetchPromotions();
    });
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const promotionsRow= promotions.map(emp=>({...emp,id:i++, 
   
  }))

  
  return (
    <view>
      
      <PageHeader
                title="Liste des Promotions"
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
                        text="Ajouter une promotion"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/AjouterPromotion')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={promotionsRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       {fetchComplete && promotions.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
      
    </Paper>
    
   
  </view>
  
  );
}
