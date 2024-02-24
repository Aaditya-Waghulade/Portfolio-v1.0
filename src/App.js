import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

function App() {
  return (
    <div className="scale-in-center">
      <details className='menu_for_mobile'>
  <summary></summary>
  <nav className="nav">
<li><a href="#home">Home</a></li>
   <li>  <a href="#about">About</a></li> 
    <li> <a href="#projects">Projects</a></li> 
   <li>   <a href="#skills">Skills</a></li>
   <li>  <a href="#education">Education</a></li> 

<li>  <a href="mailto:aasityaprashantwaghulade2004@gmail.com" className="btn">Contact Me</a></li>
      </nav>
</details>
  

      <Header/>
<div className='emptyspace'></div>
<section><About /></section>
<div className='emptyspace'></div>
<section><Projects /></section>
<div className='emptyspace'></div>
<section><Skills /></section>
<div className='emptyspace'></div>
<section><Education /></section>
<div className='emptyspace'></div>
<section><Contact/></section>







    </div>
  );
}

export default App;
