import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const schema = yup.object().shape({
      fullName: yup.string().required("full Name should be required please"),
      email: yup.string().email().required(),
      type:yup.string().type().required(),
      departure: yup.string().departure().required(),
      backtowork:yup.string().backtowork().required(),
      numberofdays:yup.number().positive().integer().required(),
      interim:yup.string().interim().required(),
    });
    function Form() {
      const { ajouter, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
      });
    
      const submitForm = (data) => {
        console.log(data);
      };
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
                   <form onSubmit={handleSubmit(submitForm)}>
                    <TextField 
                    fullWidth label='Full Name' 
                    name='fullname' 
                    placeholder="Enter your full name" 
                    ref={ajouter}>
                    
                    </TextField>
                    <TextField fullWidth 
                    label='Email'
                    name='email'
                    placeholder="Enter your email" 

                    ref={ajouter}/>
                    <p> {errors.email?.message} </p>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">type of leave</FormLabel>
                        <RadioGroup aria-label="type of leave" 
                        name="type" style={{ display: 'initial' }} 
                        
                        ref={ajouter}>
                            <FormControlLabel value="annual leave" control={<Radio />} label="annual leave" />
                            <FormControlLabel value="maternity" control={<Radio />} label="maternity" />
                            <FormControlLabel value="leave without pay" control={<Radio />} label="leave without pay" />
                            <FormControlLabel value="sick days" control={<Radio />} label="sick days" />
                            <FormControlLabel value="other" control={<Radio />} label="other" />
                            
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth 
                    label='Departure'
                    name='departure' 
                    placeholder="Enter the departure date"
                     />
                    <TextField fullWidth 
                    label='Back-to-work' 
                    name='backtowork'
                     placeholder="enter the date for back-to-work" 
                      ref={ajouter}/>
                    <TextField fullWidth variant="standard" helperText=""
                
                label="Number of days" 
               //type="Date"
                placeholder="enter the number of days you will take"
                name='numberofdays'
                
                ref={ajouter}
              />

                    <TextField fullWidth
                    label='Interin post'
                    placeholder="choose your interim"
                    name='interim' 
                    
                    ref={ajouter}/>
                    
                    
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                       
                    /> */}
                    <div>
                        <br>
                        </br>
                    </div>
                    <Button type='submit' variant='contained' color='primary'>Confirm your leave</Button>
                </form>
       )
              
            </Paper>
        </Grid>
    );
  }}

export default Signup;