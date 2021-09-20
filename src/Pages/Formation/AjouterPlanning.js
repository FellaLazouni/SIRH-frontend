import React from 'react'
import {useHistory, useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterplanningformation } from '../../api/api';

import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();

    const schema = yup.object().shape({
     nomformation: yup.string().required("observation should be required please"),
     dateformation: yup.date().required("date effet should be required please"),
     lieuxformation: yup.string().required(),
     dureeformation: yup.string().required(),
     nomformateur: yup.string().required(),
     
    });
    const history = useHistory();
      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
      console.log('errors',errors)
      const x = async (data) => {
        console.log(data);
        
        await ajouterplanningformation({...data})
        history.push('/PlanningFormation')
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>Ajouter un planning</h2>
                    <Typography variant='caption' gutterBottom>inscrire un planning de formation</Typography>
                </Grid>

                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='nomformation' 
                    name='nomformation' 
                    placeholder="Enterez votre nomformation" 
                    {...register("nomformation")}>
                    </TextField>

                    <TextField 
                    fullWidth label='dateformation' 
                    name='dateformation' 
                    placeholder="Enterez votre dateformation" 
                    {...register("dateformation")}>
                    
                    </TextField>

                    <TextField fullWidth 
                    label='lieuxformation'
                    name='lieuxformation'
                    placeholder="lieuxformation" 

                    {...register("lieuxformation")}/>
                    
                  <TextField fullWidth 
                    label='dureeformation'
                    name='dureeformation' 
                    placeholder="entrez votre dureefromation"
                    {...register("dureeformation")}
                     />

                    <TextField fullWidth 
                    label='nomformateur' 
                    name='nomformateur'
                     placeholder="nomformateur" 
                     {...register("nomformateur")}/>
                    
                    
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