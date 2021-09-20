// import React from 'react'
// import {useParams}from 'react-router-dom';
// import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ajouterservice } from '../../api/api';
// import * as yup from "yup";
// import { useHistory } from 'react-router-dom';
// const Signup = () => {
//     const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
//     const headerStyle = { margin: 0 };
//     const avatarStyle = { backgroundColor: '#1bbd7e' };
//     const marginTop = { marginTop: 5 };
   

//     const schema = yup.object().shape({
//      nomService: yup.string().required(),
//      chefService: yup.string().required(),
    
//     });
//     const history = useHistory();
//       const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
//     console.log('errors',errors)
//       const x = async (data) => {
//         console.log(data);
        
//         await ajouterservice({...data})
//         history.push('/ListeService')
//       }
//     return (
//         <Grid>
//             <Paper elevation={20} style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         {/* <AddCircleOutlineOutlinedIcon /> */}
//                     </Avatar>
//                     <h2 style={headerStyle}>Ajouter un service</h2>
//                     <Typography variant='caption' gutterBottom>veuillez specifier les informations concernant le nouveau service</Typography>
//                 </Grid>

//                    <form onSubmit={handleSubmit(x)}>
//                     <TextField 
//                     fullWidth 
//                     label='nomService' 
//                     name='nomService' 
//                     placeholder="Enterez le nom du service" 
//                     {...register("nomService")}>
//                     </TextField>

//                     <TextField 
//                     fullWidth label='chefService' 
//                     name='chefService' 
//                     placeholder="Enterez le Type de chef de service" 
//                     {...register("chefService")}>
                    
//                     </TextField>

                    
//                     <div>
//                         <br>
//                         </br>
//                     </div>
//                     <Button type='submit' variant='contained' color='primary'>Confirmer votre ajout</Button>
                    
//                 </form>
       
              
//             </Paper>
//         </Grid>
//     );
//   }

// export default Signup; 
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
import { ajouterservice } from '../../api/api';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
   

    const schema = yup.object().shape({
      nomService: yup.string().required(),
      chefService: yup.string().required(),
      
    });
    const history = useHistory();
      const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
    console.log('errors',errors)
      const x = async (data) => {
        console.log('DATA : ', data)        
        await ajouterservice({...data})
        history.push('/ListeService')
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <ComputerSharpIcon /> 
                    </Avatar>
                    <h2 style={headerStyle}>Ajouter un service </h2>
                    <Typography variant='caption' gutterBottom>veuillez specifier les informations concernant l'hierarchie de l'entreprise</Typography>
                </Grid>

                   <form onSubmit={handleSubmit(x)}>
                    <TextField 
                    fullWidth 
                    label='nomService' 
                    name='nomService' 
                    placeholder="Enterez le nom du service" 
                    {...register("nomService")}>
                    </TextField>

                    <TextField 
                    fullWidth label='chefService' 
                    name='chefService' 
                    placeholder="Enterez le Type de Service" 
                    {...register("chefService")}>
                    
                    </TextField>

                    <div>
                        <br>
                        </br>
                    </div>
                    <Button type='submit' variant='contained' color='primary'>Confirmer votre ajout</Button>
                    
                </form>
       
              
            </Paper>
        </Grid>
    );
  }

export default Signup; 