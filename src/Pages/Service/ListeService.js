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
import {listeService} from '../../api/api';
import { supprimerservice } from '../../api/api';
import "../../css/ListeEmployes.css";
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


export default function ListeService() {
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
    
        { field: 'nomService', headerName: 'Nom du Service', width: 200 },
        { field: 'chefService', headerName: 'Chef de Service', width: 200 },
       
       {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     <DeleteIcon   className="fella" onClick={()=>DeleteService(params.row._id)} />
       
        {/* <EditIcon   className="fella" onClick={()=> history.push('/ModifierService/'+params.row._id)} /> */}

        
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
  const [service, setService] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchGrad();
  }, []);

  const fetchGrad = async () => {
    const res = await listeService();
    console.log("les services sont::: ", res);
    setService(res);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteService = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimerservice(id).then(() => {
      fetchGrad();
    });
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const gradRow= service.map(emp=>({...emp,id:i++, 
   
  }))

  
  return (
    <view>
      
      <PageHeader
                title="Liste des services"
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
                        text="Ajouter un service"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/AjouterService')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={gradRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       {fetchComplete && service.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
      
    </Paper>
    
   
  </view>
  
  );
}
