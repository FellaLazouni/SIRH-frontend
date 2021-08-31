import React from "react";
import styled from "styled-components"

export default function StyledInput({label, ...props}) {
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
console.log(props);
    return(
        <>    
        <Label>{label}</Label>
        <Input {...props} />
        </>
    )
}