
import api_root from "./config"

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
export const listeEmployes2 = () => {
        let response; 
      fetch(`${api_root}/employe/nombre`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'         
        }
    
    }).then(
         (res)=>{
           
            console.log("resultat",res.json());
            
            return   res.json; 
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


export const ajouter = (nom,prenom,email,adresse,fonction,departement,datenaissance,daterecrutement,userName,password) => {
    const reqBody = JSON.stringify({
        
        nom : nom,
        prenom: prenom,
        email: email,
       
        adresse: adresse,
        fonction: fonction,
        departement: departement,

        datenaissance: datenaissance,
        daterecrutement: daterecrutement,
        userName: userName,
        password: password
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
    return new  Promise((resolve,reject) => { 
        fetch(`${api_root}/conges`, {
            method:'POST',
            body: reqBody,
            headers: {
                'Content-Type': 'Application/json'
                
                
            }
        
        }).then(
            (res)=>{
                console.log("KKKKKKKKKKK",res); 
                resolve(res.json()); 
                
                
            }
            
        ).catch(
            error => console.log(error)
        )

    

    })
           
    
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
export const modifierpromotion = async(promotionUpdated,id) => {

    console.log('id ===> ',id)
    console.log(promotionUpdated)
    const reqBody = JSON.stringify(promotionUpdated)
    let response;
           
   await  fetch(`${api_root}/promotion/${id}`, {
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
export const modifierformation = async(formationUpdated,id) => {

    console.log('id ===> ',id)
    console.log(formationUpdated)
    const reqBody = JSON.stringify(formationUpdated)
    let response;
           
   await  fetch(`${api_root}/formation/${id}`, {
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
export const ajouterdemanderecrutement = async(data) => {
    console.log("++++++data",data)
    const reqBody = JSON.stringify(data)
    await fetch(`${api_root}/ProfilRech`, {
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

export const ajoutergrad = async (data) => {
    const reqBody = JSON.stringify(data)       
    return fetch(`${api_root}/grad`, {
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
export const listeGrad = () => { 
    return fetch(`${api_root}/grad`, {
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
export const getGrad = (id) => {
    return fetch(`${api_root}/grad/${id}`, {
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
export const supprimergrad = (id) => {
    
        
    return fetch(`${api_root}/grad/${id}`, {
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
export const ajouterservice = () => async(data) => {
    console.log("++++++data",data)
    const reqBody = JSON.stringify(data)
    
           
    await fetch(`${api_root}/service`, {
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
export const listeService = () => { 
    return fetch(`${api_root}/service`, {
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
export const getService = (id) => {
    return fetch(`${api_root}/service/${id}`, {
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
export const supprimerservice = (id) => {
    
        
    return fetch(`${api_root}/service/${id}`, {
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

export const listeDemandes = () => { 
    return fetch(`${api_root}/ProfilRech`, {
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
export const getlisteDemandes = (id) => {
    return fetch(`${api_root}/ProfilRech/${id}`, {
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
export const modifierlistedemandes = async(listedemandesUpdated,id) => {

    console.log('id ===> ',id)
    console.log(listedemandesUpdated)
    const reqBody = JSON.stringify(listedemandesUpdated)
    let response;
           
   await  fetch(`${api_root}/profilRech/${id}`, {
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
export const supprimerdemanderecrutement = (id) => {
    
        
    return fetch(`${api_root}/profilRech/${id}`, {
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
export const ajouterdivers = async(data) => {
    console.log("++++++data",data)
    const reqBody = JSON.stringify(data)
    
           
    await fetch(`${api_root}/demande`, {
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
export const listeDivers = () => { 
    return fetch(`${api_root}/demande`, {
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
export const getlisteDivers = (id) => {
    return fetch(`${api_root}/demande/${id}`, {
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
export const modifierlistedivers = async(diversUpdated,id) => {

    console.log('id ===> ',id)
    console.log({diversUpdated})
    const reqBody = JSON.stringify(diversUpdated)
    let response;
           
   await  fetch(`${api_root}/demande/${id}`, {
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
export const supprimerdivers = (id) => {
    
        
    return fetch(`${api_root}/demande/${id}`, {
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