import React from 'react';
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
import {ajoutersuivirecrutement} from '../../api/api';
import Menu from '@material-ui/icons/Menu';
import { List, MenuList } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

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
  const history = useHistory();
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

  const handleAjoutersuivirecrutement = (event) =>{
    event.preventDefault();
    ajoutersuivirecrutement(nom,prenom,profil,datederecrutement,observationteamRH,observationteamDEV,niveau,disponibilité,decision,dateintegration);
    history.push('/ListeRecrutement')
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MeetingRoomIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Suivi des recrutements
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleAjoutersuivirecrutement}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nom"
                variant="outlined"
                onChange={handleNomChange}
                required
                fullWidth
                id="nom"
                label="Nom"
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
                name="prenom"
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
                label="Profil"
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
                id="datederecrutement"
                label="Date Entretien"
                name="datederecrutement"
                type="date"
                autoComplete="datederecrutement"
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleObservationteamRHChange}
                name="observationteamRH"
                label="observationteamRH"
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
                label="observationteamDEV"
                type="text"
                id="observationteamDEV"
                
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleNiveauChange}
                name="niveau"
                label="niveau"
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
                name="Disponibilité"
                label="Disponibilité"
                type="text"
                id="Disponibilité"
                autoComplete="Disponibilité"
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDecisionChange}
                name="decision"
                label="decision"
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
                name="dateintegration"
                label="dateintegration"
                type="date"
                id="dateintegration"
                autoComplete="dateintegration"
                
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
              
              Ajouter un suivi de Recrutement
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}