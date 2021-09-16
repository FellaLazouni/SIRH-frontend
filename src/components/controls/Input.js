import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { nom, label, value,error=null, onChange, ...other } = props;

    return (
        <TextField
            variant="outlined"
            label={label}
            name={nom}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
