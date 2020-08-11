import React, {Component} from 'react';
import {motion} from "framer-motion"

//importing images
import favicon from './images/favicon.svg'
import mspbadge from './images/msp_badge.svg'
 
class LeftDisplay extends Component{
    render()
    {
  
     return ( 
               <div className="LeftPanel">
               
                  <Avatar/><br/>
                  <UserName details={{"fn":this.props.details['firstname'],"ln":this.props.details['lastname']}} />
                  <Description details="Computer Science Undergraduate"/>
                 <br/>
                 <p style={{textAlign:"center"}}> I <span> ❤️</span> to build applications that becomes a force for good.</p>
              </div>
              )
    }
  }  
//avatar imabp
function Avatar (props){       
        return(
            <motion.div className="avatar-class" animate={{
                
                rotate: [50, 270, 270, 120, 360],
               
              }}>
                <img alt="Avatar"  src={favicon}/>
            </motion.div>
        )
  
}
//name display
function UserName (props){
    const fname=props.details["fn"];
    const lname=props.details["ln"];
    return(     
           <div className="username" style={{textAlign:"center"}}>
             
              <span><h1>{fname} {lname}</h1></span>
           </div>
        )
   
}
//description display
function Description (props){
    return(
            <div className="desc">
            <p className="CODEdecorate" style={{textAlign:"center"}}>{props.details}<br/><br/>
            <img alt="msp" width="70%" src={mspbadge}/><br/></p>
          
        </div>
    )
}

export default LeftDisplay;