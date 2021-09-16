// import React from 'react';
// import Welcome from './Pages/Welcome'
// import Login from './Pages/Login'
// import { BrowserRouter as Router, Switch, Link, Route, BrowserRouter } from 'react-router-dom';

// export default function App() {
//   return (

//     <BrowserRouter>

//       <Welcome />

//       {/* <Login/> */}
//       {/* // switcher en le login et le welcome with state of logiIN user  */}
//     </BrowserRouter>
//   )
// }

import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AjouterEmployer from "./Pages/Employe/AjouterEmployer";
import ListeEmployes from "./Pages/Employe/ListeEmployes";
import AjouterPromotion from "./Pages/Promotion/AjouterPromotion";
import ListePromotion from "./Pages/Promotion/ListePromotion";
import AjouterRecrutement from "./Pages/Recrutement/AjouterRecrutement";
import ListeRecrutement from "./Pages/Recrutement/ListeRecrutement";
import AjouterFormation from "./Pages/Formation/AjouterFormation";
import ListeFormation from "./Pages/Formation/ListeFormation";
import ListeLeaves from "./Pages/Leave/ListeLeaves";
import Quitus from "./Pages/Leave/Quitus";
import AjouterLeave from "./Pages/Leave/AjouterLeave";
import ModifierPersonnel from "./Pages/Employe/ModifierPersonnel";
import Login from "./Pages/Login";
import ModifierRecrutement from "./Pages/Recrutement/ModifierRecrutement";
import { ajoutergrad, modifierleave } from "./api/api";
import AjouterGrad from "./Pages/Grad/AjouterGrad"
import ListeGrad from "./Pages/Grad/ListeGrad";
import AjouterService from "./Pages/Service/AjouterService";
import ListeService from "./Pages/Service/ListeService";
import DemandeRecrutement from "./Pages/Recrutement/DemandeRecrutement"
import ListeDemandes from "./Pages/Recrutement/ListeDemandes";
import Dashboard from "./Dashboard";
import ListeDivers from "./Pages/Divers/ListeDivers";


function App() {
  return (
    <Router>
      <div id="app">
        <Sidebar />
        <div id="content" style={{ marginLeft:250,paddingLeft:50,paddingRight:50 }}>
          <Switch>
          <Route path="/ListeEmployes" component={ListeEmployes} />
                 <Route path="/AjouterEmployer" component={AjouterEmployer} /> 
                 <Route path="/ModifierPersonnel/:id" component={ModifierPersonnel}/>
                 <Route path="/Login" component={Login} />
                 <Route path="/AjouterRecrutement" component={AjouterRecrutement} />
                 <Route path="/ListeRecrutement" component={ListeRecrutement} />
                 <Route path="/ModifierRecrutement/:id" component={ModifierRecrutement}/>
                 <Route path="/AjouterLeave/:id_employe" component={AjouterLeave} />
                 <Route path="/ListeLeaves" component={ListeLeaves}/>
                 <Route path="/ModifierLeave/:id" component={modifierleave}/>
                 <Route path="/AjouterPromotion/:id_employe" component={AjouterPromotion}/>
                 <Route path="/ListePromotion" component={ListePromotion}/>
                 <Route path="/AjouterFormation/:id_employe" component={AjouterFormation}/>
                 <Route path="/ListeFormation/" component={ListeFormation}/>
                 {/* <Route path="/DemandeRecrutement/" component={ListeDemandesRecrutement}/> */}
                 {/* <Route path="/ListeDemandesRecrutement/" component={ListeDemandesRecrutement}/> */}
                 <Route path="/ListeFormation/" component={ListeFormation}/>
                 {/* <Route path="/Quitus/:congesId" component={Quitus}/> */}
                 <Route path="/Quitus" component={Quitus}/>
                 <Route path="/AjouterGrad" component={AjouterGrad}/>
                 <Route path="/ListeGrad/" component={ListeGrad}/>
                 <Route path="/AjouterService" component={AjouterService}/>
                 <Route path="/ListeService/" component={ListeService}/>
                 <Route path="/DemandeRecrutement/" component={DemandeRecrutement}/>
                 <Route path="/ListeDemandes" component={ListeDemandes} />
                 <Route path="/Dashboard" component={Dashboard}/>
                 <Route path="/ListeDivers" component={ListeDivers}/>

                 



          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
