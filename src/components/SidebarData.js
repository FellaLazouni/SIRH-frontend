import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GradeIcon from '@material-ui/icons/Grade';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import FreeBreakfastSharpIcon from '@material-ui/icons/FreeBreakfastSharp';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <DashboardIcon/>
  },
  {
    title: 'Employe',
    path: '#',
    icon: <PeopleOutlineSharpIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Liste des employes',
        path: '/ListeEmployes',
        icon: <ListAltSharpIcon />
       
      },
      {
        title: 'Ajouter un employé',
        path: '/AjouterEmployer',
        icon: <GroupAddSharpIcon />
      }
    ]
  },
  {
    title: 'Recrutement',
    path: '#',
    icon: <BusinessCenterIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Demandes de recrutement',
        path: '/ListeDemandes',
        icon: <ListAltSharpIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Planning des entretines',
        path: '/PlanningEntretien',
        icon: <CalendarTodayIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Suivi des entretiens',
        path: '/ListeRecrutement',
        icon: <MeetingRoomIcon />
      }
    ]
  },
  {
    title: 'Congés',
    path: '/ListeLeaves',
    icon: <BeachAccessIcon/>
  },
  {
    title: 'Promotions',
    path: '/ListePromotion',
    icon: < SupervisedUserCircleIcon />
  },
  {
    title: 'Grads',
    path: '/ListeGrad',
    icon: <GradeIcon />
  },
  {
    title: 'Services',
    path: '/ListeService',
    icon: <ComputerSharpIcon />
  },
  
  
  
  {
    title: 'Formation',
    path: '#',
    icon: <ImportContactsSharpIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
    {
    title: 'Liste des formations',
    path: '/ListeFormation',
    icon: <ImportContactsSharpIcon />,
    
    },
      {
        title: 'Planning des formations',
        path: '/PlanningFormation',
        icon: <CalendarTodayIcon />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Démission/Retraite',
    path: '/ListeDivers',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];