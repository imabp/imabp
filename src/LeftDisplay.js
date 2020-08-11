import React, {Component} from 'react';
import favicon from './images/favicon.svg'
import {motion} from "framer-motion"

import mspbadge from './images/msp_badge.svg'
// Update: Avatar not displayed. 
class Avatar extends Component{
    render(){
        
        return(
            <motion.div className="avatar-class" animate={{
                
                rotate: [50, 270, 270, 120, 360],
               
              }}>
                <img alt="Avatar"  src={favicon}/>
            </motion.div>
        )
    }
}

class UserName extends Component{
    render(){
        const fname=this.props.details["fn"];
        const lname=this.props.details["ln"];
        return(
           <div className="username" style={{textAlign:"center"}}>
             
              <span><h1>{fname} {lname}</h1></span>
           </div>
        )
    }
}
class Description extends Component{
    render(){
        return <div className="desc">
            <p className="CODEdecorate" style={{textAlign:"center"}}>{this.props.details}<br/><br/>
            <img alt="msp" width="70%" src={mspbadge}/><br/></p>
          
        </div>
    }
}
class LeftDisplay extends Component{
  render()
  {

   return ( 
             <div className="LeftPanel">
             
                <Avatar/><br/>
                <UserName details={{"fn":this.props.details['firstname'],"ln":this.props.details['lastname']}} />
                <Description details="Computer Science Undergraduate"/>
              
            </div>
            )
  }
}  
export default LeftDisplay;