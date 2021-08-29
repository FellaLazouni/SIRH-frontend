import React, { useEffect, useState} from 'react'
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
import { getLeave, modifierleave } from '../../api/api';
import * as yup from "yup";
import swal from 'sweetalert';

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    let {id} = useParams();

    
    const schema = yup.object().shape({
     nom: yup.string().required("full Name should be required please"),
     prenom:yup.string().required("full Name should be required please"),
      email: yup.string().required(),
      typedeconge: yup.string().required(),
      datedebutconge: yup.string().required(),
      datefinconge: yup.string().required(),
      duree: yup.number().integer().required(),
      interim: yup.string().required(),
    });
    
    const { register, handleSubmit, formState:{ errors }, setValue } = useForm({ mode: 'onBlur'});

    useEffect(() => {
        
      getLeave(id).then( (leave) => {
          console.log('  leave complet',id)
          console.log('leave',leave)
        setValue({...leave})
      })
    }, []);


      
    console.log('errors',errors)
      const submitForm = async (data) => {
        console.log(data);
        console.log('id_conges', id);
        
        const res = await modifierleave({...data}, id);

        switch(res.status){
            case 200: swal("Modification réussite !", "Modification effectué avec succés!", "success"); break;
            case 500: swal("Modification échoué !", "Modification effectué avec succés!", "error"); break;
            default: console.log(""); 
        }
           
     
        if(res.status==200){
         swal("Modification !", "Modification effectué avec succés!", "success");
        }
        
   console.log("reponse du modif",res.status)
      }
   
   


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>update your leave</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form ask for a leave</Typography>
                </Grid>
                   <form onSubmit={handleSubmit(submitForm)}>
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
                     {...register("datefinconge")}/>
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
                    <Button type='submit' variant='contained' color='primary'>update leave</Button>
                   
                </form>
       
              
            </Paper>
        </Grid>
    );
                }
export default Signup;