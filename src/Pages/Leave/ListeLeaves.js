
import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { ajouterconge, listeLeaves, modifierleave, supprimerleave } from "../../api/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../css/ListeEmployes.css";
import { Button, Link, Menu , MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModifierLeave from "./ModifierLeave";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import "../../css/icon.css"
import { DataGrid } from '@material-ui/data-grid';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import useTable from "../../components/useTable";
import {InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import moment from 'moment';
import AjouterLeave from "./AjouterLeave";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {modifier} from '../../api/api'
export const calculRelicat =(daterecrutement, duree)=>{
  console.log(' duree  ', duree )
  console.log(' daterecrutement  ', new Date(daterecrutement) )
  console.log('cumulDroitEnMois(daterecrutement)',cumulDroitEnMois(daterecrutement))
    return cumulDroitEnMois(daterecrutement) * 2.5 - duree
  } 
  export const calculeAnciete =(daterecrutement)=>{
    console.log('moment dqtereeeee ef dgvsdf g', (moment(new Date()).diff(daterecrutement, 'days')))
    return daterecrutement ? ((moment(new Date()).diff(daterecrutement, 'days'))/365)*12 : 'pas de date'
  } 
  
  export const cumulDroitEnMois = (daterecrutement) => {
    return moment(daterecrutement).format('DD') < 15 ? (Math.round(calculeAnciete(daterecrutement))) : (Math.floor(calculeAnciete(daterecrutement)))
  }

export default function ListeLeaves() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [records, setRecords] = useState()
  const [relicat, setRelicat] = useState();

  
  
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
    
        { field: 'nom', headerName:'Nom', width: 150 },
        { field: 'prenom', headerName: 'Prenom', width: 150 },
        { field: 'teamMember',headerName:'Team member', width: 150},
        { field: 'fonction',headerName:'Fonction', width: 150},
        { field: 'direction',headerName:'Direction', width: 150},
        { field: 'daterecrutement',headerName:'date recrutement', width: 170},
        // { field: 'dated"entree',headerName:'Date d"entree', width: 150},
        // { field: 'jourdumoisd"entree',headerName:'Jour du mois d"entree', width: 150},
        { field: 'anciente', headerName: 'Anciente', width: 150 },
        { field: 'droitenmois', headerName: 'Droit en mois', width: 170 },
        { field: 'dateDebtCongeformat', headerName: 'Date conge DU', width: 180 },
        { field: 'dateFinCongeformat', headerName: 'Date conge AU', width:180 },
      
        { field: 'duree', headerName: 'Duree ', width: 150 },
        { field: 'interim', headerName: 'Interim', width: 150 },
        { field: 'relicat',headerName: 'Reliquat', width: 150 },
       // { field: 'status', headerName: 'Status', width: 150 },
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
        {field:'datedemandeformat',headerName: 'Date demande', width: 150 },
        { field: 'observation', headerName: 'Observation', width: 150 },
      
      
  
    {
      width: 150,
      field: "deletaction",
      headerName: "Actions",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
        <div>
     {/* <DeleteIcon   className="delete_icon" onClick={()=>supprimerleave(params.row._id)} /> */}
       
        {/* <EditIcon   className="fella" onClick={()=> history.push('/ModifierLeave/'+params.row._id)} /> */}
        <CheckCircleIcon className="validate_icon" onClick={(e)=>validate(params.row,params.row._id)} />
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
  const validate =(row,id) =>{
    console.log(row.relicat);

    modifier({relicat:row.relicat }, id) ;


    modifierleave({status: 'Accepté',relicat:row.relicat, dateacceptation: Date.now()},id).then(()=> {
      fetchLeaves();
    }
    
    )
  };
  const refuse =(id) =>{
    modifierleave({status: 'Refusé' },id).then(()=> {
      fetchLeaves();
    }
    
    )
  };
  const ListeAction = (event,id)=>
  {
    setAnchorEl(event.currentTarget);
  }
let i=0
  const leavesRow= leaves.map(emp=>{
    console.log('=======================> emp.daterecrutement',emp.daterecrutement)
    return {
      ...emp,
      dateDebtCongeformat:moment(emp.dateDebutConge).format("YYYY-MM-DD"),
      dateFinCongeformat:moment(emp.dateFinConge).format("YYYY-MM-DD"),
      datedemandeformat:moment(emp.datedemande).format("YYYY-MM-DD"),
      id:i++,
      nom:emp.employe[0].nom,
      prenom:emp.employe[0].prenom,
      daterecrutement:moment(emp.employe[0].daterecrutement).format("YYYY-MM-DD"), 
      anciente: emp?.employe[0]?.daterecrutement ? calculeAnciete(emp.employe[0].daterecrutement) : 'pas de date ',
      droitenmois: emp?.employe[0]?.daterecrutement ? cumulDroitEnMois(emp.employe[0].daterecrutement) : 'pas de date ',
      
      relicat:emp?.employe[0]?.daterecrutement ?calculRelicat(emp.employe[0].daterecrutement, emp.duree) : 'pas de date ',
      //anciente:((moment(new Date()).diff(emp.daterecrutement, 'days'))/365)*2
    }
  })

const addConge=()=>{
  alert(' hello fella')
}
  return (
    <view>
      
      <PageHeader
                title="Liste des Congés"
                subTitle="personnels de l'entreprise"
                icon={<BeachAccessIcon fontSize="large" />}
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
                        text="Ajouter un congé"
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
        pageSize={pageSize}/>
    </div>
       {fetchComplete && leaves.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
    </Paper>
  </view>
  );
}
