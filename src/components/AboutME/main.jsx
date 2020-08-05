import React,{Component} from 'react';
import {useSpring, animated} from 'react-spring'




export default function MainAbout(){
    const animateprops = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
    
    
        
        return(
            <animated.h1 style={animateprops}>Student and Fast Learner</animated.h1>
           


        );
    }
