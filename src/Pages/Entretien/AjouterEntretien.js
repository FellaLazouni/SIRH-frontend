import React from 'react'
import {useHistory, useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterplanningentretien } from '../../api/api';

import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();

    const schema = yup.object().shape({
    //  nomcandidat: yup.string().required("observation should be required please"),
    //  prenomcandidat:  yup.string().required("observation should be required please"),
    //  dateentretien: yup.date().required("date effet should be required please"),
    //  salleentretien: yup.string().required(),
    //  nommembrerh: yup.string().required(),
    //  nommembremetier: yup.string().required(),
     
    });
    const history = useHistory();

      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
    console.log('errors',errors)
      const x = async (data) => {
        console.log(data);
       
          history.push('/PlanningEntretien')
        await ajouterplanningentretien({...data})
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>Ajouter un planning</h2>
                    <Typography variant='caption' gutterBottom>inscrire un planning pour les entretiens</Typography>
                </Grid>

                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='nomcandidat' 
                    name='nomcandidat' 
                    placeholder="Enterez votre nomcandidat" 
                    {...register("nomcandidat")}>
                    </TextField>
                    <TextField 
                    fullWidth 
                    label='prenomcandidat' 
                    name='prenomcandidat' 
                    placeholder="Enterez votre prenomcandidat" 
                    {...register("prenomcandidat")}>
                    </TextField>

                    <TextField 
                    fullWidth label='dateentretien' 
                    name='dateentretien' 
                    placeholder="Enterez votre dateentretien" 
                    {...register("dateentretien")}>
                    
                    </TextField>

                    <TextField fullWidth 
                    label='salleentretien'
                    name='salleentretien'
                    placeholder="salleentretien" 

                    {...register("salleentretien")}/>
                    
                  <TextField fullWidth 
                    label='nommemebrerh'
                    name='nommemebrerh' 
                    placeholder="entrez votre nommemebrerh"
                    {...register("nommemebrerh")}
                     />

                    <TextField fullWidth 
                    label='nommemebremetier' 
                    name='nommemebremetier'
                     placeholder="nommemebremetier" 
                     {...register("nommemebremetier")}/>
                    
                    
                    <div>
                        <br>
                        </br>
                    </div>
                    <Button type='submit' variant='contained' color='primary'>Confirmer</Button>
                  
                </form>
       
              
            </Paper>
        </Grid>
    );
  }

export default Signup;