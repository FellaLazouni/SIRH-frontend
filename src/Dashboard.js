// import { Helmet } from 'react-helmet';
// import { Box, Container, Grid } from '@material-ui/core';
// import Budget from '../components/Dashboard/Budget';
// import LatestOrders from '../components/Dashboard/LatestOrders';
// import LatestProducts from '../components/Dashboard/LatestProducts';
// import Sales from '../components/Dashboard/Sales';
// import TasksProgress from '../components/Dashboard/TasksProgress';
// import TotalCustomers from '../components/Dashboard/TotalCustomers';
// import TotalProfit from '../components/Dashboard/TotalProfit';
// import TrafficByDevice from '../components/Dashboard/TrafficByDevice';

// const Dashboard = () => (
//   <>
//     <Helmet>
//       <title>Dashboard | Material Kit</title>
//     </Helmet>
//     <Box
//       sx={{
//         backgroundColor: 'background.default',
//         minHeight: '100%',
//         py: 3
//       }}
//     >
//       <Container maxWidth={false}>
//         <Grid
//           container
//           spacing={2}
//           paddingX={5}
//           marginTop={10}
//         >
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <Budget />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalCustomers />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TasksProgress />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalProfit sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <Sales />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <TrafficByDevice sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <LatestProducts sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <LatestOrders />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </>
// );

// export default Dashboard;
import React, { useState,useEffect} from 'react';
import "./styles.css";
import { listeEmployes2 } from './api/api';

const Dashboard = () => {
  const[nbrEmployes,setNbrEmployes]= useState();
  useEffect(async () => {
    
    let x= await listeEmployes2()
    setNbrEmployes(x)
    console.log("nombre employe", nbrEmployes)
    
  }, [])
    return (
    <div classNameName="container">
      <main>
        <div className="main__container">
          <div className="main__title">
            <img src="assets/hello.svg" alt="" />
            <div className="main__greeting">
              <br></br>
              <h1>Bonjour ADMIN RH</h1>
              <p>Bienvenue dans votre espace admin dashboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Nombre d'employés</p>
                <span className="font-bold text-title">338</span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-calendar fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">YASSIR VTC</p>
                <span className="font-bold text-title">90</span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">YASSIR EXPRESS</p>
                <span className="font-bold text-title">55</span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-thumbs-up fa-2x text-green"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">YASSIR MARKET</p>
                <span className="font-bold text-title">25</span>
              </div>
            </div>
          </div>

          <div className="charts">
          

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Rapports divers</h1>
                  <p>YASSIR SPA Alger</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>WEB Developpement</h1>
                  <p>58%</p>
                </div>

                <div className="card2">
                  <h1>Mobile Developpement</h1>
                  <p>28%</p>
                </div>

                <div className="card3">
                  <h1>Humain ressources</h1>
                  <p>4%</p>
                </div>

                <div className="card4">
                  <h1>Commercial</h1>
                  <p>10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      </div>
  );
};

export default Dashboard;
