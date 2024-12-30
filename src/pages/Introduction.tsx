import React from 'react';
import '../styles/Introduction.css';
import experience from '../images/experience.png';
import projects from '../images/projects.png';
import resume from '../images/resume.png';
import more from '../images/more.png';
import me from '../images/me.jpg';


const Introduction: React.FC = () => {
    return (
    <div id="introduction" className = "section introduction-main-container">
    

      <div className="introduction-section-text">
       
        <div className = "main-heading">
          Hi! My name is <span className="main-heading-highlight">Angkitha</span>.
        </div>
        <div className = "second-heading">
            Software Engineer
        </div>
        <div className = "third-heading">
          Seeking roles in Data Analytics/Embedded Engineering.
        </div>
        <div className = "description-box">
            I graduated June 2024 from University of California, San Diego 
            with a Bachelor's in Electrical and Computer Engineering with a 
            focus in Machine Learning and Control Theory. I minored in Cognitive Science. 
            I've participated in numerous professional and academic projects that 
            demonstrate my prowess in generating ML models used to further data analysis 
            and visualization; the majority I've accomplished using <span className="description-highlight">
            Python
            </span>, <span className="description-highlight">
            SQL
            </span>, <span className="description-highlight">
            MATLAB
            </span>, and <span className="description-highlight">
            Verilog
            </span>
            .
            <p></p>
            Currently, I am working at <span className="description-highlight">
            L3Harris Technologies
            </span> as a Software Engineer. 
            I work to deliver efficient test engineering solutions that meet the standards 
            of the client my team collaborates with. The majority of my work has 
            refined my programming skills in <span className="description-highlight">
            C++ </span> and Verilog.
            <p></p>
            In my free time, I enjoy partaking in <span className="description-highlight">
            front-end development projects
            </span> (such as this portfolio), 
            working out/running, listening to music, and exploring food venues. 
            Please navigate through my portfolio using the interactive vinyls to the left.
        </div>
      </div>

      <div className = "introduction-section-vinyls">
        <img src={me} alt="Personal Image" className = "turnTable-base"/>
        <div className="vinyl-chain">
            <a href="#experience" className="vinyl-link" id="vinyl-1">
                <img src={experience} alt="Experience" className="vinyl-image" />
            </a>
            <a href="#projects" className="vinyl-link" id="vinyl-2">
                <img src={projects} alt="Projects" className="vinyl-image" />
            </a>
            <a href="#resume" className="vinyl-link" id="vinyl-3">
                <img src={resume} alt="Resume" className="vinyl-image" />
            </a>
            <a href="#resume" className="vinyl-link" id="vinyl-4">
                <img src={more} alt="More" className="vinyl-image" />
            </a>
        </div>
        <div className= "vinyl-holder">
            {}
        </div>
      </div>


    </div>
    );
  };

export default Introduction;

/*http://127.0.0.1:5173/introduction#experience*/