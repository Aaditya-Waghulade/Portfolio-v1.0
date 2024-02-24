import React from 'react'
import "./projects.scss"
import { motion } from 'framer-motion'
import project_data from './project_data'
import Projectcard from './card/Project_card'
const Projects = () => {
  return (
  <motion.div className="projects" id='projects'
 >
       <div class="circle1"></div>
<div class="circle2"></div>
    <h1>My Projects </h1>
    <motion.div className="card_container"
     initial={{opacity:0.5,scale:0.5}}
     transition={{duration:1}}
     whileInView={{opacity:1,scale:1}}
    
    >
      {
        project_data.map(project_data=>(
<Projectcard 
key={project_data.id}
title ={project_data.title}
description={project_data.description}
img={project_data.img}
source={project_data.source}
link={project_data.link}
techstack={project_data.techstack}
/>
        ))}
    </motion.div>
  </motion.div>
  )
}

export default Projects