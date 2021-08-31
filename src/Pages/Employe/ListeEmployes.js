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
import { ajouterconge, listeEmployes } from "../../api/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../css/ListeEmployes.css";
import { supprimee } from "../../api/api";
import { Button, Link, Menu , MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModifierPersonnel from "./ModifierPersonnel";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import RenderEmployeRow from "./RenderEmployeRow";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteEmploye}from "../../api/api";
import MenuIcon from  '@material-ui/icons/Menu';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import useTable from "../../components/useTable";
import {InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import moment from 'moment';


export default function ListeEmployes() {
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
    { field: "nom", headerName: "Nom", width: 150 },
    { field: "prenom", headerName: "Prenom", width: 150 },
    // { field: "Fonction", headerName: "Fonction", width: 150 },
    
    { field: "email", headerName: "Email", width: 150 },
    // { field: "Departement", headerName: "Departement", width: 150 },
    { field: "Ntel", headerName: "Ntel",  width: 150  },
    { field: "adresse", headerName: "adresse", width: 150  },
    //{ field: "sexe", headerName: "sexe", width: 100  },
   // { field: "datenaissance", headerName: "datenaissance", width: 150  },
    { field: "daterecrutement", headerName: "daterecrutement", width: 150  },
    { field: "anciente", headerName: "anciente", width: 150  },

  
    {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     <DeleteIcon   className="fella" onClick={()=>DeleteEmploye(params.row._id)} />
       
        <EditIcon   className="fella" onClick={()=> history.push('/ModifierPersonnel/'+params.row._id)} />

        <ActionMenu  params={params} history={history} />

        
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
  const [employees, setEmployees] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const pageSize = 8
  useEffect(() => {
    fetchEmployes();
  }, []);

  const fetchEmployes = async () => {
    const res = await listeEmployes();
    console.log("les employes sont::: ", res);
    setEmployees(res);
    console.log("les employes sont::::::: ", employees);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteEmploye = (id) => {
    console.log("je vais supprimer cette ligne", id);
    supprimee(id).then(() => {
      fetchEmployes();
    });
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const employeesRow= employees.map(emp=>({...emp,id:i++, 
    anciente:((moment(new Date()).diff(emp.daterecrutement, 'days'))/365)*2
  }))

const addConge=()=>{
  alert(' hello fella')
}
  return (
    <view>
      
      <PageHeader
                title="Liste des employés"
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
                        text="Ajouter un employé"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {history.push('/AjouterEmployer')}}
                        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                  <br>
                  </br>
    <Paper className={classes.root}>
    <div style={{ height: 130+pageSize*53, width: '100%' }}>
      <DataGrid
        rows={employeesRow}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
       {fetchComplete && employees.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
      
    </Paper>
    
   
  </view>
  
  );
}
function ActionMenu({history,params}) { 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      </Button> */}
      <MenuIcon  onClick={handleClick} />


      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => history.push('/Ajouterleave/'+params.row._id)}>Leave</MenuItem>
        <MenuItem onClick={()=> history.push('/AjouterPromotion/'+params.row._id)}>Promotion</MenuItem>
        <MenuItem onClick={()=>history.push('/AjouterFormation/'+params.row._id)}> Formation</MenuItem>
      </Menu>
    </>
  );

}
