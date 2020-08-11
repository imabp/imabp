import React from 'react';
import LeftDisplay from './LeftDisplay';
import Menubar from './components/MenuBar/menubar'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import favicon from './images/favicon.svg';
import { motion } from "framer-motion"
import {details} from "./components/userdetail"
const useStyles=makeStyles((theme)=>({
LeftPanel:{
  background:'black',
  color:'white',
  display:'block',
  padding:'1%'
}

}))
function App() {
        const variants = {
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }
 
                 const classes = useStyles();
  return (
    <motion.div
  initial="hidden"
  animate="visible"
  variants={variants}

>
    <div className="main-app">
       <link rel="icon" href={favicon}/>
      <div className={classes.LeftPanel}><LeftDisplay details={details}/></div>
      <Grid container spacing={3}>
               <Grid item xs={12}>
               <Menubar/>
              </Grid>
              <Grid item xs={6} sm={6}>
         
              </Grid>
      </Grid>
    </div>
    </motion.div>
    );
  
}

export default App;
