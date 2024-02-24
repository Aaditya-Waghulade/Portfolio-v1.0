import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
const About = () => {


  return (
    <motion.div className="about" id="about"
    >
      <div class="circle1"></div>
<div class="circle2"></div>
      <div className="head">
        <h1>About Me</h1>
      </div>
      <motion.div className="description"
         initial={{opacity:0.5,scale:0.5}}
         transition={{duration:.4}}
         whileInView={{opacity:1,scale:1}}>
        <p>
          I am currently complition my graduation in{" "}
          <span>Computer Science</span> , I decided to go with{" "}
          <span>Web Development</span> while i was in my <span>Highschool</span>
          . I have done  <span>4+ PROJECTS</span>on  <span>REACTJS</span> library. <span>Won 2nd price </span> in
         <span>hackathon</span> held in Pune. I enrolled in certain <span>compitions</span> while i was
          in second year of my degree. Currently planning to do the project on
       <span>   full-stack webapp</span>.  My favorite part of programming is <span>problem-solving</span> I love that feeling when i finally figure out a solution of my
          problem. My core stack is <span>React, Next.js, Sass, MySQL, MongoDB</span> . I am also
          familiar with  <span>figma</span> and <span>Canva</span> . I am always upto-date with new
          upcomming technologies. My aim is to becoome a good software developer
          who has the ability of best problem solving stratagies, When i am not
          coding , i enjoy to watch movies, playing video games. I also enjoy to
    <span> LEARN NEW THINGS</span> . I am currently learning about how to create a
       <span> Full-Stack site for my College..</span>  
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
