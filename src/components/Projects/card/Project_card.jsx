import React from 'react'
import "./project_card.scss"
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


const Project_card = (props) => {
  return (
    
    <motion.div className="project_card"
    initial={{opacity:0.5,scale:0.5}}
     transition={{duration:.2}}
     whileInView={{opacity:1,scale:1}}
     key={props.id}>
<div className="left">
  <div className="info">
  <h3>{props.title}</h3>
  <p>{props.description}</p>
  </div>
  <div className="links">
    <p>Links: </p>
  <a href={props.source}> <FaGithub color='black' size={25}/></a>
  <a href={props.link}><FaGlobe color='blue' size={25}/></a>
  </div>


<div className="techstack">
<p>{props.techstack[0]}</p>
<p>{props.techstack[1]}</p>
<p>{props.techstack[2]}</p>
<p>{props.techstack[3]}</p>
  </div>


</div>
<div className="right">
  <img src={props.img} alt="" />
</div>

    </motion.div>
  )
}

export default Project_card