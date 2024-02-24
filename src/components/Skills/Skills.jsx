import React from 'react'
import "./skills.scss"
import{ motion} from "framer-motion"
import { useRef } from 'react'
const Skills = () => {
  const constraintsRef = useRef(null)
  return (
<div className="skills" id='skills'>
    <div class="circle1"></div>
<div class="circle2"></div>
<h1>My Skills</h1>
<motion.div className="img" ref={constraintsRef}
           initial={{opacity:0.5,scale:0.5}}
           transition={{duration:.4}}
           whileInView={{opacity:1,scale:1}}>

<motion.img src="/images/html.png" alt="" 
 drag
 dragConstraints={constraintsRef}
/>
<motion.img  drag dragConstraints={constraintsRef}src="/images/css.png" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/figma_svg.svg" alt="" />
<motion.img drag dragConstraints={constraintsRef}src="/images/nextjs.png" alt="" />
<motion.img drag dragConstraints={constraintsRef}src="/images/react_svg.svg" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/tailwind.png" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/sass_box.png" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/svg_js.svg" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/node.png" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/express.png" alt="" />
<motion.img  drag dragConstraints={constraintsRef}src="/images/version_control.png" alt="" />
</motion.div>
</div>
  )
}

export default Skills