import React from 'react'
import "./header.scss"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header" id='home'>
    <nav className="nav">
<li><a href="#home">Home</a></li>
   <li>  <a href="#about">About</a></li> 
    <li> <a href="#projects">Projects</a></li> 
   <li>   <a href="#skills">Skills</a></li>
   <li>  <a href="#education">Education</a></li> 
   <li>   <a href="#contact">Contact</a></li>
      </nav>




<div className="tracking-in-contract">
<h3>I am,</h3>
<h1>Aaditya</h1><span>React Developer | Web Developer</span>
</div>
<div className="direct_links">
<a href="https://github.com/Aadu76/"><FaGithub color='black' size={35}/></a>
<a href="https://www.linkedin.com/in/aaditya-prashant-waghulade-459054286"><FaLinkedin color='blue' size={35}/></a>
<a href="https://www.linkedin.com/in/aaditya-prashant-waghulade-459054286"><FaInstagram  color='orange' size={35}/></a>
</div>
<div className="buttons">
  <div className="contact"><a href="#contact">Contact Me</a></div>

</div>

</div>


  )
}

export default Header