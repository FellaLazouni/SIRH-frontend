import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ListeEmployes from '../Pages/Employe/ListeEmployes';
import AjouterEmployer from '../Pages/Employe/AjouterEmployer';
import AjouterLeave from '../Pages/Leave/AjouterLeave';
import ListeLeaves from '../Pages/Leave/ListeLeaves';
import Login from '../Pages/Login';
import ModifierPersonnel from '../Pages/Employe/ModifierPersonnel';
import AjouterRecrutement from '../Pages/Recrutement/AjouterRecrutement'
import ListeRecrutement from '../Pages/Recrutement/ListeRecrutement';
import ModifierRecrutement from '../Pages/Recrutement/ModifierRecrutement';
import AjouterPromotion from '../Pages/Promotion/AjouterPromotion';
import { ajouterpromotion } from '../api/api';
import ListePromotion from '../Pages/Promotion/ListePromotion';
import {ajouterformation} from '../api/api';
import AjouterFormation from '../Pages/Formation/AjouterFormation';
import ListeFormation from '../Pages/Formation/ListeFormation';
import {listeformation} from '../api/api';
import ModifierLeave from '../Pages/Leave/ModifierLeave';
const WelcomeMain = () => {
    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();
    return (
        
        <main className={classes.content}>
          
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
                 <Route path="/ModifierLeave/:id" component={ModifierLeave}/>
                 <Route path="/AjouterPromotion/:id_employe" component={AjouterPromotion}/>
                 <Route path="/ListePromotion" component={ListePromotion}/>
                 <Route path="/AjouterFormation/:id_employe" component={AjouterFormation}/>
                 <Route path="/ListeFormation/" component={ListeFormation}/>



            </Switch>
        </main>  
    );
};

WelcomeMain.propTypes = {};

export default WelcomeMain;