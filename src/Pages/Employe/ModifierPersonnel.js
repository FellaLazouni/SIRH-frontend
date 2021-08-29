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
import {ajouter, getEmploye, modifier} from '../../api/api';
import Menu from '@material-ui/icons/Menu';
import { List, MenuList } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import moment from 'moment'
import swal from 'sweetalert';
import { SettingsInputAntennaOutlined } from '@material-ui/icons';
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

const currencies = [
  {
    value: 'Homme',
    label: 'Homme',
  },
  {
    value: 'Femme',
    label: 'Femme',
  },
  
];

export default function ModifierPersonnel() {
  const classes = useStyles();
  let { id } = useParams();
  const [employe,setEmploye]=useState({});

  const [idemp,setIdemp] = useState(id);
  const [nom,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [email,setEmail] = useState('');
  const [Ntel,setNtel] = useState('');
  const [adresse,setAdresse] = useState('');
  const [sexe,setSexe] = useState('');
  const [datenaissance,setDatenaissance] = useState('');
  const [daterecrutement,setDaterecrutement] = useState('');
  const [currency, setCurrency] = useState('');

  useEffect(() => {
      console.log(' id coming for datatable',idemp)
    getEmploye(id).then( (employe) => {
        console.log('employe complet',id)
        setIdemp(id)
        setNom(employe.nom)
        setPrenom(employe.prenom)
        setEmail(employe.email)
        setNtel(employe.Ntel)
        setAdresse(employe.adresse)
        setSexe(employe.sexe)
        setDatenaissance(employe.datenaissance)
        setDaterecrutement(employe.daterecrutement)
    })
  }, []);

  

  const handleNomChange = (event)=>{ 
    setNom(event.target.value)
  }

  const handlePrenomChange = (event)=>{
    setPrenom(event.target.value)
  }

  const handleEmailChange = (event)=>{ 
    setEmail(event.target.value)
  }

  const handleNtelChange = (event)=>{ 
    setNtel(event.target.value)
  }

  const handleAdresseChange = (event)=>{ 
    setAdresse(event.target.value)
  }

  const handleDatenaissanceChange = (event)=>{ 
    setDatenaissance(event.target.value)
  }

  const handleDaterecrutementChange = (event)=>{ 
    setDaterecrutement(event.target.value)
  }

  const handleAjouter = (event) =>{
    event.preventDefault();
    ajouter(nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement);
    
  }

  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };

  const handleCChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleModifier = async (event) =>{
      console.log(' dqns hqndle id is :',idemp)
    event.preventDefault();
    let empolyeUpdated={idemp,nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement}
   
   const res =await modifier(empolyeUpdated,idemp);
   console.log("reponse du modif",res.status)
   
   switch(res.status){
       case 200: swal("Modification réussite !", "Modification effectué avec succés!", "success"); break;
       case 500: swal("Modification échoué !", "Modification effectué avec succés!", "error"); break;
       default: console.log(""); 
   }


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
          Update informations 
        </Typography>
        
    
        <form className={classes.form} noValidate onSubmit={handleModifier}>
       

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
                onChange={handleEmailChange}
                id="email"
                
                value={email}
                name="email"
                autoComplete="email"
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleNtelChange}
                name="number"
                
                value={Ntel}
                type="text"
                id="Ntel"
                autoComplete="Number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleAdresseChange}
                name="adresse"
                
                value={adresse}
                type="text"
                id="adresse"
                autoComplete="Adresse"
                
                
              />
            </Grid>

            { <Grid>
            <TextField
          id="standard-select-currency"
          select
         
          value={employe.sexe}
          value={sexe}
          onChange={handleSexeChange}
          helperText="Choisissez votre sexe"
        >
          {currencies.map((option) => (
            <MenuList key={option.value} value={option.value}>
              {option.label}
            </MenuList>
          ))}
        </TextField>
        </Grid> }

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDatenaissanceChange}
                name="Date de Naissance"
                
                value={moment(datenaissance).format('YYYY-MM-DD')}
                type="Date"
                id="DatedeNaissance"
                autoComplete="current-DatedeNaissance"
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDaterecrutementChange}
                name="Date de Recrutement"
                
                value={moment(daterecrutement).format('YYYY-MM-DD')}
                type="Date"
                id="DatedeRecrutement"
                autoComplete="current-DatedeNaissance"
                
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
              
              Modifier Employé
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}