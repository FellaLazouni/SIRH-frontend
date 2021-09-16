import React from 'react'
import {useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterformation } from '../../api/api';

import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();

    const schema = yup.object().shape({
     dateeffet: yup.date().required("date effet should be required please"),
     observation:yup.string().required("observation should be required please"),
     document: yup.string().required(),
     id_poste: yup.string().required(),
     created_at: yup.string().required(),
     created_by: yup.string().required(),
    });

      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
    console.log('errors',errors)
      const x = async (data) => {
        console.log(data);
        
        await ajouterformation({...data, id_employe})
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>AJouter une Formation</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form ask for a leave</Typography>
                </Grid>

                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='dateeffet' 
                    name='dateeffet' 
                    placeholder="Enterez votre date d'effet" 
                    {...register("dateeffet")}>
                    </TextField>

                    <TextField 
                    fullWidth label='observation' 
                    name='observation' 
                    placeholder="Enterez votre observation" 
                    {...register("observation")}>
                    
                    </TextField>

                    <TextField fullWidth 
                    label='document'
                    name='document'
                    placeholder="document" 

                    {...register("document")}/>
                    
                  <TextField fullWidth 
                    label='id_poste'
                    name='id_poste' 
                    placeholder="entrez votre id_poste"
                    {...register("id_poste")}
                     />

                    <TextField fullWidth 
                    label='created_at' 
                    name='created_at'
                     placeholder="created_at" 
                     {...register("created_at")}/>

                    <TextField fullWidth 
                    label='created_by'
                    name='created_by' 
                    placeholder="created_by"
                    {...register("created_by")}
                     />
                    
                    
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