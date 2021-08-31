import React, { useEffect, useState } from 'react'
import {useParams}from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ajouterconge, getEmploye } from '../../api/api';
import * as yup from "yup";
import styled from "styled-components";


const Signup = () => {
    // Berrr
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id_employe} = useParams();
    const [employe, setEmploye] = useState();

    const schema = yup.object().shape({

      teamMember: yup.string().required(),
      fonction: yup.string().required(),
      direction: yup.string().required(),
      typeDeConge: yup.string().required(),
      dateDebutConge: yup.string().required(),
      dateFinConge: yup.string().required(),
      duree: yup.number().integer().required(),
      interim: yup.string().required(),
    });

    const Input= styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc
   `
   
   const Label = styled.label`
   color: rgba(0,0,0,0.54);
   font-size: 0.7rem;
   font-weight: 400;
   ` 

    const { reset, register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

    useEffect(() => {
        getEmploye(id_employe).then(employe =>{
            setEmploye(employe);
            console.log(employe)
            reset({
                nom: employe.nom,
                prenom: employe.prenom
            })
        });
    }, []);

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
                 {employe && 
                   <form onSubmit={handleSubmit(x)}>
                    <Label>Nom</Label>
                    <Input {...register('nom')}  disabled/>

                    <Label>Prenom</Label>
                    <Input {...register('prenom')} disabled/>
                    <TextField fullWidth 
                    label='teamMember'
                    name='teamMember'
                    placeholder="Enterez votre teamMember"
                    {...register("teamMember")}/>
                    
                    <TextField fullWidth 
                    label='fonction'
                    name='fonction'
                    placeholder="Enterez votre fonction" 

                    {...register("fonction")}/>
                    
                    <TextField fullWidth 
                    label='direction'
                    name='direction'
                    placeholder="Enterez votre direction" 

                    {...register("direction")}/>
                  
                  
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">type de congé</FormLabel>
                        <RadioGroup aria-label="type de conge" 
                        name="typeDeConge" style={{ display: 'initial' }} 
                        
                        {...register("typeDeConge")}>
                            <FormControlLabel value="congeannuel" control={<Radio />} label="congeannuel" />
                            <FormControlLabel value="maternite" control={<Radio />} label="maternite" />
                            <FormControlLabel value="congesanssolde" control={<Radio />} label="congesanssolde" />
                            <FormControlLabel value="maladie" control={<Radio />} label="maladie" />
                            <FormControlLabel value="autres" control={<Radio />} label="autres" />
                            
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth 
                    label='Date debut de conge'
                    name='dateDebutConge' 
                    placeholder="entrez votre date debut conge"
                    {...register("dateDebutConge")}
                     />
                    <TextField fullWidth 
                    label='Date fin de conge' 
                    name='dateFinConge'
                     placeholder="entrez votre date de fin de conge" 
                     {...register("dateFinConge")}/>
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
                }
              
            </Paper>
        </Grid>
    );
  }

export default Signup;