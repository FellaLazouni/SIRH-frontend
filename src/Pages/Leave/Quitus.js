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
import { ajouterconge, getEmploye, getLeave } from '../../api/api';
import * as yup from "yup";
import styled from "styled-components";
import {calculRelicat, calculeAnciete, cumulDroitEnMois } from './ListeLeaves'
import { useLocation } from "react-router-dom";
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const Quitus = () => {
  const search = useLocation().search;
  const congesId = new URLSearchParams(search).get('congesId');
    // Berrr
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    //let {congesId} = useParams();
    const [leave, setLeave] = useState();

    const schema = yup.object().shape({

     
      fonction: yup.string().required(),
     
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
      console.log('conge ID :', congesId)
        getLeave(congesId).then(pLeave => {
            setLeave(pLeave);
            console.log('PLEAVE', pLeave)

            reset({
                nom: pLeave.employe[0].nom,
                prenom: pLeave.employe[0].prenom,
                fonction: pLeave.fonction,
                direction:pLeave.direction,
                dateDebutConge: pLeave.dateDebutConge,
                dateFinConge:pLeave.dateFinConge,
                duree:pLeave.duree,
                relicat:pLeave?.employe[0]?.daterecrutement ?calculRelicat(pLeave.employe[0].daterecrutement, pLeave.duree) : 'pas de date ',

            })
        });
    }, []);

    console.log('errors',errors)
      const onSubmit = async (data) => {
        console.log(data);
        
        // await ajouterconge({...data, congesId})
      }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    <BeachAccessIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Titre de congé   </h2>
                    <Typography variant='caption' gutterBottom>Exercice 2020/2021</Typography>
                </Grid>
                 {leave && 
                   <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nom</Label>
                    <Input {...register('nom')} />

                    <Label>Prenom</Label>
                    <Input {...register('prenom')}/>

                    <Label>Fonction</Label>
                    <Input {...register('fonction')}/>

                    <Label>Direction</Label>
                    <Input {...register('direction')}/>

                    <Label>Date Debut De congé</Label>
                    <Input {...register('dateDebutConge')}/>
                    <Label>Date fin de congé</Label>
                    <Input {...register('dateFinConge')}/>
                    <Label>Duree</Label>
                    <Input {...register('duree')}/>
                    <Label>Nombre de jours restant</Label>
                    <Input {...register('relicat')}/> 
                </form>
                }
              
            </Paper>
        </Grid>
    );
  }

export default Quitus;