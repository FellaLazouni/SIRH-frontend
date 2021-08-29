const api_root = 'http://localhost:3000/api';
export const login = (email,password) => {
    const reqBody = JSON.stringify({
        email: email, 
        password: password
    })
        
    fetch('http://localhost:3000/api/user/login', {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    ).then(
        (res)=>{
            localStorage.setItem('token',res.token);
        }
    )
}

export const listeEmployes = () => {
    /*const reqBody = JSON.stringify({
        nom: nom, 
        prenom: prenom,
        email: email,
        Ntel: Ntel,
        adresse: adresse,
        sexe:sexe,
        datenaissance: datenaissance,
        daterecrutement: daterecrutement
    })*/
        
    return fetch(`${api_root}/employe`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
        (res)=>{
            console.log(res.JSON);
            return res.json(); 
        }
    )
}

export const supprimee = (id) => {
    
        
    return fetch(`${api_root}/employe/${id}`, {
        method:'DELETE',
        
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}


export const ajouter = (nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement) => {
    const reqBody = JSON.stringify({
        
        nom : nom,
        prenom: prenom,
        email: email,
        Ntel: Ntel,
        adresse: adresse,
        sexe: sexe,
        datenaissance: datenaissance,
        daterecrutement: daterecrutement
    })
    
           
    return fetch(`${api_root}/employe`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}


export const getEmploye = (id) => {
    return fetch(`${api_root}/employe/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}


export const modifier = async(empolyeUpdated,id) => {

    const reqBody = JSON.stringify(empolyeUpdated)
    let response;
           
   await  fetch(`${api_root}/employe/${id}`, {
        method:'PUT',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
        
    
    }).then(
        (res)=>{
            
            console.log("Raho yfetchi",res); 
            response= res;
            
            
        }
        
    )
return response;
}

export const ajoutersuivirecrutement = (nom,prenom,profil,datederecrutement,observationteamRH,observationteamDEV,niveau,disponibilité,decision,dateintegration) => {
    const reqBody = JSON.stringify({
        
        nom : nom,
        prenom: prenom,
        profil: profil,
        datederecrutement:datederecrutement,
        observationteamRH: observationteamRH,
        observationteamDEV: observationteamDEV,
        niveau:niveau,
        disponibilité: disponibilité,
        decision: decision,
        dateintegration: dateintegration
    })
    
           
    fetch(`${api_root}/recrutement`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}

export const listeRecrutement = () => { 
    return fetch(`${api_root}/recrutement`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const getRecrutement = (id) => {
    return fetch(`${api_root}/recrutement/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const modifiersuivirecrutement = async(suivirecrutementUpdated,id) => {

    const reqBody = JSON.stringify(suivirecrutementUpdated)
    let response;
           
   await  fetch(`${api_root}/recrutement/${id}`, {
        method:'PUT',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
        
    
    }).then(
        (res)=>{
            
            console.log("Raho yfetchi",res); 
            response= res;
            
            
        }
    )
return response
}
export const ajouterconge = async(data) => {
    console.log("++++++data",data)
    // const reqBody = JSON.stringify({
        
    //     // nom : nom,
    //     // prenom: prenom,
    //     // email: email,
    //     // typedeconge: typedeconge,
    //     // datedebutconge: datedebutconge,
    //     // datefinconge: datefinconge,
    //     // duree: duree,
    //     // interim: interim
    // })
    const reqBody = JSON.stringify(data)
    
           
    await fetch(`${api_root}/conges`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}
export const listeLeaves = () => { 
    return fetch(`${api_root}/conges`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
        (res)=>{
            console.log("resultat",res)
            return res.json(); 
        }
    )
}
export const getLeave = (id) => {
    return fetch(`${api_root}/conges/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}

export const modifierleave = async(leaveUpdated,id) => {

    console.log('id ===> ',id)
    console.log(leaveUpdated)
    const reqBody = JSON.stringify(leaveUpdated)
    let response;
           
   await  fetch(`${api_root}/conges/${id}`, {
        method:'PUT',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
        
    
    }).then(
        (res)=>{
            
            console.log("Raho yfetchi",res); 
            response= res;
            
            
        }
    )
return response
}
export const supprimerleave = (id) => {
    
        
    return fetch(`${api_root}/conges/${id}`, {
        method:'DELETE',
        
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const ajouterpromotion = async(data) => {
    console.log("++++++data",data)
    const reqBody = JSON.stringify(data)
    
           
    await fetch(`${api_root}/promotion`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}
export const listePromotion = () => { 
    return fetch(`${api_root}/promotion`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
        (res)=>{
            console.log("resultat",res)
            return res.json(); 
        }
    )
}
export const getPromotion = (id) => {
    return fetch(`${api_root}/promotion/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const supprimerpromotion = (id) => {
    
        
    return fetch(`${api_root}/promotion/${id}`, {
        method:'DELETE',
        
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const ajouterformation = async(data) => {
    console.log("++++++data",data)
    const reqBody = JSON.stringify(data)
    
           
    await fetch(`${api_root}/formation`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}
export const supprimerformation = (id) => {
    
        
    return fetch(`${api_root}/formation/${id}`, {
        method:'DELETE',
        
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}
export const listeformation = () => { 
    return fetch(`${api_root}/formation`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
        (res)=>{
            console.log("resultat",res)
            return res.json(); 
        }
    )
}
export const getFormation = (id) => {
    return fetch(`${api_root}/formation/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}