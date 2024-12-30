import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ResumeMore from './pages/ResumeMore';
import './styles/Global.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="page-wrapPrecaution">

        <div className="IntroExpGradient">
          <Introduction />
          <Experience />
        </div>

        <div className="ProjResMoreGradient">
          <Projects />
          <ResumeMore />
        </div>
        
      </div>
    </div>
  );
};


export default App;
