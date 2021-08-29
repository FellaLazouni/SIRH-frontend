import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import button from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import WelcomeMain from "../Layout/MainLayout";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Welcome() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        // style={{ backgroundColor:'black' }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            SIRH
          </Typography> */}
          {/* <Link
            to="/Login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <IconButton color="inherit">Login</IconButton>
          </Link> */}
        </Toolbar>
      {/* </AppBar> */}
      {/* <main className={classes.content}>
      <Toolbar />
         <Typography
        variant="h3" 
        align='right'>
       YASSIR'S SPA SIRH
        </Typography>
      
</main> */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <Link to="/ListeEmployes">
                                        <p> Personell</p>
                        </Link> */}
        <List>
          <ListItem button>
            <Link
              to="/ListeEmployes"
              style={{ color: "inherit", textDecoration: "inherit" }}
             
            >
              <ListItemIcon >
                <InboxIcon fontSize={'large'} />
                {open &&<ListItemText primary="Gestion du personnel" style={{ marginLeft:10,alignItems:'center'}} />}
              </ListItemIcon>

            </Link>
          </ListItem>
          <ListItem button>
            <Link
              to="/ListeLeaves"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItemIcon>
                <MenuIcon  fontSize={'large'}/>
              
              {open &&<ListItemText style={{ marginLeft:10, alignItems:'center'}}>Gestion des départs</ListItemText>}
              </ListItemIcon>
            </Link>
            
          </ListItem>
         
          <ListItem button>
            <Link
              to="ListeRecrutement"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItemIcon>

                <MenuIcon fontSize={'large'}/>
                {open && (
                
                <ListItemText>Gestion des recrutements</ListItemText>
              
            )}
              </ListItemIcon>
              
            </Link>
          
          </ListItem>

          <ListItem button>
            <Link
              to="/ListePromotion"
              style={{ hover: "primary",color: "inherit", textDecoration: "inherit" }}
            >
              <ListItemIcon>
                <InboxIcon fontSize={'large'} />
              
              <ListItemText>
               { open && <ListItemText>Gestion des EAPs </ListItemText>}
              </ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem button>
            <Link
              to="/ListeFormation"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItemIcon>
                <InboxIcon fontSize={'large'} />
             
              <ListItemText>
               { open && <ListItemText> Gestion des formations </ListItemText>}
              </ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>
        </List>
        <Divider />
        {/* <List>
          {['Réception', 'Faire une demande'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <WelcomeMain />
      </main>
    </div>
  );
}
// import React, { useState } from "react";
// import {
//   Button,
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   CssBaseline
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: 300
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1
//   },

//   title: {
//     marginRight: "auto"
//   },
//   drawer: {
//     width: 300
//   },
//   content: {
//     padding: theme.spacing(3)
//   }
// }));

// const Welcome = () => {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
//         <Toolbar />
//         <List disablePadding className={classes.drawer}>
//           <ListItem button>
//             <ListItemText primary="Staff management" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Leave management" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Recruitment management" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Promotion management" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Training management" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <AppBar position="fixed" color="secondary" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             SIRH
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <main className={classes.content}>
//         <Toolbar />
//         <Typography variant="h2">YASSIR'S SPA SIRH</Typography>
//         <Typography>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
//           ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
//           id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
//           quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
//           reprehenderit dignissimos quod odit nisi deserunt perspiciatis
//           corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
//           corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
//           impedit facere laboriosam minima? Delectus libero distinctio sapiente,
//           dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
//           consequatur recusandae eos, cum itaque eaque unde quibusdam rem
//           quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
//           atque!
//         </Typography>
//       </main>
//     </div>
//   );
// };

// export default Welcome;
