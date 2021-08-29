// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {ajouter} from '../../api/api';
// import Menu from '@material-ui/icons/Menu';
// import { List, MenuList } from '@material-ui/core';
// //import {BrowserRouter as Link} from 'react-router-dom';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         SIRH
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(2, 0, 2),
//   },
// }));

// const currencies = [
//   {
//     value: 'Homme',
//     label: 'Homme',
//   },
//   {
//     value: 'Femme',
//     label: 'Femme',
//   },
  
// ];

// export default function SignUp() {
//   const classes = useStyles();

//   const [nom,setNom] = React.useState('');
//   const [prenom,setPrenom] = React.useState('');
//   const [fonction,setFonction] = React.useState('');
//   const [departement,setDepartement] = React.useState('');
//   const [email,setEmail] = React.useState('');
//   const [ntel,setNtel] = React.useState('');
//   const [adresse,setAdresse] = React.useState('');
//   const [sexe,setSexe] = React.useState('');
//   const [datenaissance,setDatenaissance] = React.useState('');
//   const [lieudenaissance,setLieudenaissance] = React.useState('');
//   const [daterecrutement,setDaterecrutement] = React.useState('');
//   const [situationfamiliale,setSituationfamiliale] = React.useState('');
//   const [nbrenfant,setNbrenfant] = React.useState('');
//   const [Numeroactenaissance,setNumeroactenaissance] = React.useState('');
//   const [filsde,setFilsde] = React.useState('');
//   const [numerocarteidentite,setNumerocarteidentite] = React.useState('');
//   const [Numerosecuritesocial,setNumerosecuritesocial] = React.useState('');
//   const [riprib,setRiprib] = React.useState('');

 
//   const [currency, setCurrency] = React.useState('');

//   const handleNomChange = (event)=>{ 
//     setNom(event.target.value)
//   }

//   const handlePrenomChange = (event)=>{
//     setPrenom(event.target.value)
//   }
//   const handleFonctionChange = (event)=>{
//     setFonction(event.target.value)
//   }
//   const handleDepartementChange = (event)=>{
//     setDepartement(event.target.value)
//   }
//   const handleEmailChange = (event)=>{ 
//     setEmail(event.target.value)
//   }
//   const handleNtelChange = (event)=>{ 
//     setNtel(event.target.value)
//   }
//   const handleAdresseChange = (event)=>{ 
//     setAdresse(event.target.value)
//   }
//   const handleSexeChange = (event) => {
//     setSexe(event.target.value);
//   };
//   const handleDatenaissanceChange = (event)=>{ 
//     setDatenaissance(event.target.value)
//   }
//   const handleLieudenaissanceChange = (event)=>{ 
//     setLieudenaissance(event.target.value)
//   }
//   const handleDaterecrutementChange = (event)=>{ 
//     setDatenaissance(event.target.value)
//   }
//   const handleSituationfamilialeChange = (event)=>{
//     setSituationfamiliale(event.target.value)
//   }
//   const handleNbrenfantChange = (event)=>{
//     setNbrenfant(event.target.value)
//   }
//   const handleNumeroactenaissanceChange = (event)=>{
//     setNumeroactenaissance(event.target.value)
//   }
//   const handleFilsdeChange = (event)=>{
//     setFilsde(event.target.value)
//   }
//   const handleNumerocarteidentiteChange = (event)=>{
//     setNumerocarteidentite(event.target.value)
//   }
//   const handleNumerosecuritesocialChange = (event)=>{
//     setNumerosecuritesocial(event.target.value)
//   }
//   const handleRipribChange = (event)=>{
//     setRiprib(event.target.value)
//   }
  

  

  

  

  

//   const handleAjouter = (event) =>{
//     event.preventDefault();
//     ajouter(nom,prenom,fonction,departement,email,ntel,adresse,sexe,datenaissance,lieudenaissance,daterecrutement,situationfamiliale,nbrenfant,Numeroactenaissance,filsde,numerocarteidentite,Numerosecuritesocial,riprib);
    
//   }

  

//   const handleCChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Création d'un employé 
//         </Typography>
//         <form className={classes.form} noValidate onSubmit={handleAjouter}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="nom"
//                 variant="outlined"
//                 onChange={handleNomChange}
//                 required
//                 fullWidth
//                 id="nom"
//                 label="Nom"
//                 autoFocus
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handlePrenomChange}
//                 id="prenom"
//                 label="Prenom"
//                 name="prenom"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleFonctionChange}
//                 id="fonction"
//                 label="fonction"
//                 name="fonction"
//                 autoComplete="fonction"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleDepartementChange}
//                 id="departement"
//                 label="departement"
//                 name="departement"
//                 autoComplete="departement"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleEmailChange}
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
            
            

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNtelChange}
//                 name="number"
//                 label="Numéro de téléphone"
//                 type="text"
//                 id="Ntel"
//                 autoComplete="Number"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 //onChange={handleAdresseChange}
//                 name="adresse"
//                 label="Adresse"
//                 type="text"
//                 id="adresse"
                
                
//               />
//             </Grid>

//             <Grid>
//             <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleSexeChange}
//           helperText="Choisissez votre sexe"
//         >
//           {currencies.map((option) => (
//             <MenuList key={option.value} value={option.value}>
//               {option.label}
//             </MenuList>
//           ))}
//         </TextField>
//         </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleDatenaissanceChange}
//                 name="Date de Naissance"
//                 label="Date de Naissance"
//                 type="Date"
//                 id="DatedeNaissance"
//                 autoComplete="current-DatedeNaissance"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleLieudenaissanceChange}
//                 name="lieu de Naissance"
//                 label="lieu de Naissance"
//                 type="Date"
//                 id="lieudeNaissance"
//                 autoComplete="current-DatedeNaissance"
                
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleDaterecrutementChange}
//                 name="Date de Recrutement"
//                 label="Date de Recrutement"
//                 type="Date"
//                 id="DatedeRecrutement"
//                 autoComplete="current-DatedeNaissance"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleSituationfamilialeChange}
//                 name="situation familiale"
//                 label="situation familiale"
//                 type="Date"
//                 id="situation familiale"
//                 autoComplete="current-situation familiale"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNbrenfantChange}
//                 name="Nbrenfant"
//                 label="Nbrenfant"
//                 type="text"
//                 id="Nbrenfant"
//                 autoComplete="current-Nbrenfant"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNumeroactenaissanceChange}
//                 name="Numeroactenaissance"
//                 label="Numeroactenaissance"
//                 type="text"
//                 id="Numeroactenaissance"
//                 autoComplete="current-Numeroactenaissance"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleFilsdeChange}
//                 name="Filsde"
//                 label="Filsde"
//                 type="text"
//                 id="Filsde"
//                 autoComplete="current-Filsde"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNumerocarteidentiteChange}
//                 name="Numerocarteidentite"
//                 label="Numerocarteidentite"
//                 type="text"
//                 id="Numerocarteidentite"
//                 autoComplete="current-Numerocarteidentite"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNumerosecuritesocialChange}
//                 name="Numerosecuritesocial"
//                 label="Numerosecuritesocial"
//                 type="text"
//                 id="Numerosecuritesocial"
//                 autoComplete="current-Numerosecuritesocial"
                
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleRipribChange}
//                 name="Riprib"
//                 label="Riprib"
//                 type="text"
//                 id="Riprib"
//                 autoComplete="current-Riprib"
                
//               />
//             </Grid>
            
            
//           </Grid>
//           <Button
          
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
              
//               Ajouter un employé
//           </Button>
          
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
// // import React from 'react'
// // import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// // import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// // import Radio from '@material-ui/core/Radio';
// // import RadioGroup from '@material-ui/core/RadioGroup';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormControl from '@material-ui/core/FormControl';
// // import FormLabel from '@material-ui/core/FormLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// // const Signup = () => {
// //     const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
// //     const headerStyle = { margin: 0 }
// //     const avatarStyle = { backgroundColor: '#1bbd7e' }
// //     const marginTop = { marginTop: 5 }

// //     const schema = yup.object().shape({
// //       Nom: yup.string().required("first name should be required please"),
// //       Prenom:yup.string().required("last name should be required please"),
// //       Fonction:yup.string().required(),
// //       Departement:yup.string().required(),
// //       Email: yup.string().email().required(),
// //       Ntel:yup.number().positive().integer().required(),
// //       Adresse:yup.string().required(),
// //       Sexe:yup.string().type().required(),
// //       Datedenaissance: yup.string().required(),
// //       Lieudenaissance: yup.string().required(),
// //       Situationfamiliale: yup.string().required(),
// //       Nombreenfant:yup.number().positive().integer().required(),
// //       Numeroactedenaissance:yup.number().positive().integer().required(),
// //       Filsde: yup.string().required(),
// //       Numerocarteidentite:yup.number().positive().integer().required(),
// //       Numerosecuritesocial:yup.number().positive().integer().required(),
// //       Riprib:yup.number().positive().integer().required(),
// //     });
// //     function Form() {
// //       const { register, handleSubmit, errors } = useForm({
// //         resolver: yupResolver(schema),
// //       });
    
// //       const submitForm = (data) => {
// //         console.log(data);
// //       };
// //       await ajouteremployer({...data, id_employe})
// // const Signup = () => {
// //     const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
// //     const headerStyle = { margin: 0 }
// //     const avatarStyle = { backgroundColor: '#1bbd7e' }
// //     const marginTop = { marginTop: 5 }
// //     return (
// //         <Grid>
// //             <Paper elevation={20} style={paperStyle}>
// //                 <Grid align='center'>
// //                     <Avatar style={avatarStyle}>
// //                         <AddCircleOutlineOutlinedIcon />
// //                     </Avatar>
// //                     <h2 style={headerStyle}>ADD A STUFF</h2>
// //                     <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
// //                 </Grid>
// //                 <form>
// //                     <TextField fullWidth label='Nom' placeholder="Entrer votre nom" />
// //                     <TextField fullWidth label='Prenom' placeholder="Entrer votre prenom" />
// //                     <TextField fullWidth label='Fonction' placeholder="Enter votre fonction" />
// //                     <TextField fullWidth label='Departement' placeholder="Enter votre departement" />
// //                     <TextField fullWidth label='Email' placeholder="entrez votre email" />
// //                     <TextField fullWidth label='Ntel' placeholder="Enter votre numero de telephone" />
// //                     <TextField fullWidth label='Adresse' placeholder="Enter your Adress" />
// //                     <RadioGroup aria-label="gender" name="gender"  style={{ display: 'initial' }}>
// //                     <FormLabel component="legend">Sexe</FormLabel>
// //                             <FormControlLabel value="female" control={<Radio />} label="Female" />
// //                             <FormControlLabel value="male" control={<Radio />} label="Male" />
// //                         </RadioGroup>
// //                         <TextField fullWidth variant="standard" helperText="" label="Date de Naissance" placeholder="Entrez votre date de naissance"/>
// //                     <TextField fullWidth label='lieux de naissance' placeholder="Entrez votre lieux de naissance" />
// //                     <TextField fullWidth variant="standard" helperText="" label="Date de recrutement" placeholder="Entrez votre date de recrutement your birthday date"/>

// //                     <TextField fullWidth label='Situation familiale' placeholder="Entrez votre situation familiale" />
// //                     <TextField fullWidth label='Nombre d"enfants' placeholder="Enter le nombre d'enfants" />
// //                     <TextField fullWidth label='Numero acte de naissance' placeholder="Numero acte de naissance" />

// //                     <TextField fullWidth label='Fils de' placeholder="fils de" />
// //                     <TextField fullWidth label='Numero carte identité' placeholder="Numero carte identité" />
// //                     <TextField fullWidth label='Numero securité social' placeholder="Numero securité social" />
// //                     <TextField fullWidth label='RIPRIB' placeholder="RIPRIB" />
                   
// //                     <br/><br/>
// //                     <Button type='submit' variant='contained' color='primary'>Add a staff</Button>
// //                 </form>
// //             </Paper>
// //         </Grid>
// //     )
// // }

// export default Signup;
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
import {ajouter} from '../../api/api';
import Menu from '@material-ui/icons/Menu';
import { List, MenuList } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
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

export default function SignUp() {
  const classes = useStyles();

  const [nom,setNom] = React.useState('');
  const [prenom,setPrenom] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [Ntel,setNtel] = React.useState('');
  const [adresse,setAdresse] = React.useState('');
  const [sexe,setSexe] = React.useState('');
  const [datenaissance,setDatenaissance] = React.useState('');
  const [daterecrutement,setDaterecrutement] = React.useState('');
  const [currency, setCurrency] = React.useState('');

  const history = useHistory();

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
    ajouter(nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement).then(() => {
      history.push('/ListeEmployes')
    });
    
  }

  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };

  const handleCChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Création d'un employé 
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleAjouter}>
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
                onChange={handleEmailChange}
                id="email"
                label="Email Address"
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
                label="Numéro de téléphone"
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
                label="Adresse"
                type="text"
                id="adresse"
                
                
              />
            </Grid>

            <Grid>
            <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleSexeChange}
          helperText="Choisissez votre sexe"
        >
          {currencies.map((option) => (
            <MenuList key={option.value} value={option.value}>
              {option.label}
            </MenuList>
          ))}
        </TextField>
        </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleDatenaissanceChange}
                name="Date de Naissance"
                label="Date de Naissance"
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
                label="Date de Recrutement"
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
              
              Ajouter un employé
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}