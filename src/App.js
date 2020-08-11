import React, {Component} from 'react';
import LeftDisplay from './LeftDisplay';
import Menubar from './components/MenuBar/menubar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import favicon from './images/favicon.svg';
import { motion } from "framer-motion"
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
    const details= {
        "firstname":"Abir",
        "lastname":"Pal",
        
        "title":"Computer Science Undergraduate",
        "description":"Works at Integration of ML and Web",
        "avatar":"https://avatars3.githubusercontent.com/u/53480076?s=460&u=182022968da3f6f03777d264eef4a999dd689379&v=4",
        "github":"https://github.com/imabp",
        "linkedin":"https://linkedin.com/in/imabp"
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
