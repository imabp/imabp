import React from 'react';
import {useSpring, animated} from 'react-spring'
import githublogo from '../../images/github.svg'



export default function MainProjects(){
    const animateprops = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
    
    
        
        return(
            <animated.h1 style={animateprops}>Proudly hosted on <img alt="Github" src={githublogo}  /></animated.h1>
           


        );
    }
