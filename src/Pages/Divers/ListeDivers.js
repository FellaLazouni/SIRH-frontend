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
import {listeDemandes, listeformation} from '../../api/api';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import "../../css/icon.css"
import "../../css/ListeEmployes.css";
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import "../../css/ListeEmployes.css"

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
import {modifierlistedivers,supprimerdivers, listeDivers}from'../../api/api';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


export default function ListeDivers() {
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
    
        { field: 'contenu',headerName: 'Contenu', width: 150 },
       
        { field: 'idType',headerName: 'Type', width: 150 },
        { field: 'datedemandeformat',headerName: 'Date de demande', width: 200 },
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
     
     {/* <DeleteIcon   className="delete_icon" onClick={()=>supprimerdivers(params.row._id)} /> */}
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
  const [divers,setDivers] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchListeDivers();
  }, []);

  const fetchListeDivers= async () => {
    const res = await listeDivers();
    console.log("les divers sont::: ", res);
    setDivers(res);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const validate =async (id) =>{
  
   await modifierlistedivers({status: 'Accepté'},id).then(async ()=> {

    await  fetchListeDivers();
    }
    
    )
  };
  const refuse =(id) =>{
    modifierlistedivers({status: 'Refusé' },id).then(()=> {
      fetchListeDivers();
    }
    
    )
  };
  
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const listeDiversRow= divers.map(emp=>({...emp,id:i++, 
datedemandeformat:moment(emp.datedemande).format("YYYY-MM-DD")
   
  }))

  
  return (
    <view>
      
      <PageHeader
                title="Liste des divers demande"
                subTitle="Demission, retraite et autres"
                icon={<BusinessCenterIcon fontSize="large" />}
            /> 
            <Controls.Input
                        label="Chercher demande"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />

<Controls.Button
                        text="Ajouter une demande"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/DemandeRecrutement')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={listeDiversRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       
      
    </Paper>
    
   
  </view>
  
  );
}