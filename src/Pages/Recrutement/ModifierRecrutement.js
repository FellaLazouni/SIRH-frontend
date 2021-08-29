import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ajoutersuivirecrutement, getRecrutement, modifiersuivirecrutement} from '../../api/api';
import Menu from '@material-ui/icons/Menu';
import { List, MenuList } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import moment from 'moment'
import swal from 'sweetalert';
//import {BrowserRouter as Link} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SIRH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));


export default function ModifierRecrutement() {
  const classes = useStyles();
  let { id } = useParams();
  const [recrutement,setRecrutement]=useState({});

  const [idrecrutement,setIdrecrutement] = React.useState(id);
  const [nom,setNom] = React.useState('');
  const [prenom,setPrenom] = React.useState('');
  const [profil,setProfil] = React.useState('');
  const [datederecrutement,setDatederecrutement] = React.useState('');
  const [observationteamRH,setObservationteamRH] = React.useState('');
  const [observationteamDEV,setObservationteamDEV] = React.useState('');
  const [niveau,setNiveau] = React.useState('');
  const [disponibilité,setDisponibilité] = React.useState('');
  const [decision, setDecision] = React.useState('');
  const [dateintegration, setdateintegration] = React.useState('');

  useEffect(() => {
      console.log(' id coming for datatable',idrecrutement)
    getRecrutement(id).then( (recrutement) => {
        console.log('  recrutement complet',id)
        setIdrecrutement(id)
        setNom(recrutement.nom)
        setPrenom(recrutement.prenom)
        setProfil(recrutement.Profil)
        setDatederecrutement(recrutement.datederecrutement)
        setObservationteamRH(recrutement.observationteamRH)
        setObservationteamDEV(recrutement.observationteamDEV)
        setNiveau(recrutement.niveau)
        setDisponibilité(recrutement.disponibilité)
        setDecision(recrutement.decision)
        setdateintegration(recrutement.dateintegration)
    })
  }, []);

  

  const handleNomChange = (event)=>{ 
    setNom(event.target.value)
  }

  const handlePrenomChange = (event)=>{
    setPrenom(event.target.value)
  }

  const handleProfilChange = (event)=>{ 
    setProfil(event.target.value)
  }

  const handleDatederecrutementChange = (event)=>{ 
    setDatederecrutement(event.target.value)
  }

  const handleObservationteamRHChange = (event)=>{ 
    setObservationteamRH(event.target.value)
  }

  const handleObservationteamDEVChange = (event)=>{ 
    setObservationteamDEV(event.target.value)
  }

  const handleNiveauChange = (event)=>{ 
    setNiveau(event.target.value)
  }
  const handleDisponibilitéChange = (event)=>{ 
    setDisponibilité(event.target.value)
  }
  const handleDecisionChange = (event)=>{ 
    setDecision(event.target.value)
  }
  const handleDateintegrationChange = (event)=>{ 
    setdateintegration(event.target.value)
  }

  const handleModifiersuivirecrutement = async (event) =>{
      console.log(' dqns hqndle id is :',idrecrutement)
    event.preventDefault();
    let suivirecrutementUpdated={idrecrutement,nom,prenom,profil,datederecrutement,observationteamRH,observationteamDEV,niveau,disponibilité,decision,dateintegration}
   
   const res =await modifiersuivirecrutement(suivirecrutementUpdated,idrecrutement);
   console.log("reponse du modif",res)
   
//    switch(res.status){
//        case 200: swal("Modification réussite !", "Modification effectué avec succés!", "success"); break;
//        case 500: swal("Modification échoué !", "Modification effectué avec succés!", "error"); break;
//        default: console.log(""); 
//    }


   if(res.status==200){
    swal("Modification !", "Modification effectué avec succés!", "success");
   }

    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update suivi recrutement 
        </Typography>
        
    
        <form className={classes.form} noValidate onSubmit={handleModifiersuivirecrutement}>
       

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nom"
                variant="outlined"
                label="Nom"
                onChange={(event) => setNom(event.target.value)}
                required
                fullWidth
                id="nom"
               // InputLabelProps={{ shrink: true }}
                value={nom}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handlePrenomChange}
                id="prenom"
                label="Prenom"
                value={prenom}
                name="prenom"
                InputLabelProps={{ shrink: true }}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleProfilChange}
                id="profil"
                
                value={profil}
                name="profil"
                autoComplete="profil"
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDatederecrutementChange}
                name="Date de recrutement"
                
                value={moment(datederecrutement).format('YYYY-MM-DD')}
                type="Date"
                id="Datederecrutement"
                autoComplete="current-datederecrutement"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleObservationteamRHChange}
                name="observationteamRH"
                
                value={observationteamRH}
                type="text"
                id="observationteamRH"
                autoComplete="observationteamRH"
                
                
              />
            </Grid>

       
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleObservationteamDEVChange}
                name="observationteamDEV"
                
                value={observationteamDEV}
                type="text"
                id="observationteamDEV"
                autoComplete="observationteamDEV"
                
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleNiveauChange}
                name="niveau"
                
                value={niveau}
                type="text"
                id="niveau"
                autoComplete="niveau"
                
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDisponibilitéChange}
                name="disponibilité"
                
                value={disponibilité}
                type="text"
                id="disponibilité"
                autoComplete="disponibilité"
                
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDecisionChange}
                name="decision"
                
                value={decision}
                type="text"
                id="decision"
                autoComplete="decision"
                
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDateintegrationChange}
                name="Date integration"
                
                value={moment(dateintegration).format('YYYY-MM-DD')}
                type="Date"
                id="Dateintegration"
                autoComplete="current-Dateintegration"
                
              />
            </Grid>

            
            
          </Grid>
          <Button
          
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              
              Modifier suivi de recrutement
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}