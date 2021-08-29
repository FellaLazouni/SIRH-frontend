import React from 'react'
import {useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterconge } from '../../api/api';
import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();

    const schema = yup.object().shape({
     nom: yup.string().required("full Name should be required please"),
     prenom:yup.string().required("full Name should be required please"),
      email: yup.string().required(),
      typedeconge: yup.string().required(),
      datedebutconge: yup.string().required(),
      datefindeconge: yup.string().required(),
      duree: yup.number().integer().required(),
      interim: yup.string().required(),
    });

      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
    console.log('errors',errors)
      const x = async (data) => {
        console.log(data);
        
        await ajouterconge({...data, id_employe})
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>ASK For a leave</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form ask for a leave</Typography>
                </Grid>
                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='nom' 
                    name='nom' 
                    placeholder="Enterez votre nom" 
                    {...register("nom")}>
</TextField>

                    <TextField 
                    fullWidth label='prenom' 
                    name='prenom' 
                    placeholder="Enterez votre prenom" 
                    {...register("prenom")}>
                    
                    </TextField>
                    <TextField fullWidth 
                    label='Email'
                    name='email'
                    placeholder="Enterez votre email" 

                    {...register("email")}/>
                  
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">type de congé</FormLabel>
                        <RadioGroup aria-label="typedeconge" 
                        name="typedeconge" style={{ display: 'initial' }} 
                        
                        {...register("typedeconge")}>
                            <FormControlLabel value="congeannuel" control={<Radio />} label="congeannuel" />
                            <FormControlLabel value="maternite" control={<Radio />} label="maternite" />
                            <FormControlLabel value="congesanssolde" control={<Radio />} label="congesanssolde" />
                            <FormControlLabel value="maladie" control={<Radio />} label="maladie" />
                            <FormControlLabel value="autres" control={<Radio />} label="autres" />
                            
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth 
                    label='datedebutconge'
                    name='datedebutconge' 
                    placeholder="entrez votre date debut conge"
                    {...register("datedebutconge")}
                     />
                    <TextField fullWidth 
                    label='datefindeconge' 
                    name='datefindeconge'
                     placeholder="entrez votre date de fin de conge" 
                     {...register("datefindeconge")}/>
                    <TextField fullWidth variant="standard" helperText=""
                
                label="duree" 
               //type="Date"
                placeholder="duree du congé"
                name='duree'
                
                {...register("duree")}
              />

                    <TextField fullWidth
                    label='interim'
                    placeholder="quel est l'interim que vous suggegérez"
                    name='interim' 
                    
                    {...register("interim")}/>
                    
                    
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                       
                    /> */}
                    <div>
                        <br>
                        </br>
                    </div>
                    <Button type='submit' variant='contained' color='primary'>Confirm your leave</Button>
                    <input type="submit" />
                </form>
       
              
            </Paper>
        </Grid>
    );
  }

export default Signup;