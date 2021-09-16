import React from 'react'
import {useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterdemanderecrutement } from '../../api/api';
import WorkIcon from '@material-ui/icons/Work';
import { useHistory } from 'react-router-dom';
                    
import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#5E6BB4 ' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();
    const history = useHistory();
    const schema = yup.object().shape({
     profilrecherche: yup.string().required(),
     direction: yup.string().required(),
     grade:yup.string().required(),
     contrat: yup.string().required(),
     competence: yup.string().required(),
     poste: yup.string().required(),
     projet: yup.string().required(),
    });

      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
    console.log('errors',errors)
      const x = async (data) => {
        console.log(data);
        
        await ajouterdemanderecrutement({...data})
        history.push('/ListeDemandes')
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        < WorkIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Demande De Recrutement</h2>
                    <Typography variant='caption' gutterBottom>Veuillez remplir le formulaire pour chercher le condidat </Typography>
                </Grid>

                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='Profil recherché' 
                    name='profilrecherche' 
                    placeholder="Enterez le profil que vous souhaitez recruté" 
                    {...register("profilrecherche")}>
                    </TextField>

                    <TextField 
                    fullWidth label='Direction' 
                    name='direction' 
                    placeholder="Enterez La direction d'acceuil" 
                    {...register("direction")}>
                    
                    </TextField>

                    <TextField fullWidth 
                    label='Grad'
                    name='grade'
                    placeholder="Grad" 

                    {...register("grade")}/>
                    
                  <TextField fullWidth 
                    label='Contrat'
                    name='contrat' 
                    placeholder="entrez votre Contrat"
                    {...register("contrat")}
                     />

                    <TextField fullWidth 
                    label='Competances' 
                    name='competence'
                     placeholder="Competances" 
                     {...register("competence")}/>

                    <TextField fullWidth 
                    label='Poste'
                    name='poste' 
                    placeholder="poste"
                    {...register("poste")}
                     />
                      <TextField fullWidth 
                    label='Projet'
                    name='projet' 
                    placeholder="Projet"
                    {...register("projet")}
                     />
                    <div>
                        <br>
                        </br>
                    </div>
                    <Button type='submit' variant='contained' color='primary'>Confirmer votre demande</Button>
                    
                </form>
       
              
            </Paper>
        </Grid>
    );
  }

export default Signup;