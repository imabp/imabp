import React from 'react';
import {useSpring, animated} from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titlehead:{
            color:"red",
            background:'white',
    },
  }
));


export default function MainAbout(){
    const classes = useStyles();
    const animateprops = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })       

        return(
            <div>
            <animated.h1 classname={classes.titlehead} style={animateprops}>Student and Fast Learner</animated.h1>
            

            </div>
        );
    }
