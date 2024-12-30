import React from 'react';
import '../styles/Projects.css';
import FolderBackground from '../images/FolderBackground.png';

const Projects: React.FC = () => {
    return (
        <div id="projects" className="section projects-main-container">
            <div className = "projects-navBar">
                <div className = "projects-navText">
                <a href="#introduction">
                    INTRODUCTION
                </a>
                </div>
                <div className = "projects-navText">
                <a href="#experience">
                    EXPERIENCE
                </a>
                </div>
                <div className = "projects-navText">
                <a href="#resume">
                    RESUME
                </a>
                </div>
                <div className = "projects-navText">
                <a href="#resume">
                    MORE
                </a>
                </div>
            </div>
            <div className = "projects-rowFormat">
                <div className = "projects-columnFormat">
                    <div className = "projects-imageCard">
                        <a href="https://docs.google.com/document/d/1TGO8-8k8AyiX58cIeiD2_9E_1Ch3GcJ9Y0KJY2k-3sI/edit?usp=sharing">
                            <img src={FolderBackground} alt="Linear/Nonlinear Optimization w/Applications" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                Linear/Nonlinear Optimization
                            </div>
                            <div className = "projectCard-secondHeading">
                                Solo Project | 2024
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                    <li><b>Constructed a multi-class classifier from scratch</b> using knowledge of linear algebra</li>
                                    <li>Trained classifier on MNIST dataset and coded using 
                                        Python; reached 70% accuracy under <b>2 day deadline</b></li>
                                    <li>Was <b>explicitly granted additional</b> points for extensive research on image classification</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = "projects-imageCard">
                        <a href="https://docs.google.com/document/d/1wY4LWqjS6ekqK--Lau9Lz6hPC7AxUaH5nt_PEFgNE90/edit?usp=sharing">
                            <img src={FolderBackground} alt="SHA 256 and Bitcoin Hashing Project" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                SHA 256 and Bitcoin Hashing Project
                            </div>
                            <div className = "projectCard-secondHeading">
                                Project Lead | 2022
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                    <li>Utilized knowledge of FPGAs and VerilogHDL to spearhead the redesign the SHA 256 algorithm</li>
                                    <li>Delivered project under 2 week deadline, demonstrated strong technical know-how via 
                                        clean and well structured code</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className = "projects-columnFormat">
                    <div className = "projects-imageCard">
                        <a href="https://github.com/COGS118A/Group003-Wi23/blob/main/FinalProjectGroup003-Wi23.ipynb">
                            <img src={FolderBackground} alt="Supervised Machine Learning" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                Supervised Machine Learning
                            </div>
                            <div className = "projectCard-secondHeading">
                                Project Lead | 2023
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                    <li>Spearheaded group as project manager. Analyzed data on past earthquakes 
                                        using <b>PyTorch</b> and was in charge of <b>cleaning data</b> for exploratory dat analysis 
                                        in preliminary stages of project </li>
                                    <li>Devised <b>interactive decision tree</b> model and <b>regression tree</b> model 
                                        to predict the magnitude of future earthquakes</li>
                                    <li>Achieved <b>81%</b> accuracy</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = "projects-imageCard">
                        <a href="https://github.com/angkitha/COGS108FinalProject/blob/Clean-Median-Household-Income-Data/FinalProjectGroup_025-Fa22.ipynb">
                            <img src={FolderBackground} alt="Data Science in Practice Project" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                Data Science in Practice Project
                            </div>
                            <div className = "projectCard-secondHeading">
                                Project Lead | 2022
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                <li>Led and performed <b>exploratory data analysis</b> using <b>Jupyter Notebook</b> and 
                                    well known <b>Python</b> libraries </li>
                                <li>Produced inferential analysis using <b>OLS Regression</b> on relationships 
                                between housing prices, college admissions, and college ranking</li>
                                <li><b>Personally</b> earned team <b>5 bonus points</b> for extensive work and detail organization</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className = "projects-columnFormat">
                    <div className = "projects-imageCard">
                        <a href="https://medium.com/@aanguraj/a-healthier-look-at-yelp-8c06c42d1f5c">
                            <img src={FolderBackground} alt="A Healthier Look at Yelp" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                A Healthier Look at Yelp
                            </div>
                            <div className = "projectCard-secondHeading">
                                Project Member | 2023
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                    <li>Spearheaded group as project manager. Analyzed data on past earthquakes 
                                        using <b>PyTorch</b> and was in charge of <b>cleaning data</b> for exploratory dat analysis 
                                        in preliminary stages of project </li>
                                    <li>Devised <b>interactive decision tree</b> model and <b>regression tree</b> model 
                                        to predict the magnitude of future earthquakes</li>
                                    <li>Achieved <b>81%</b> accuracy</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = "projects-imageCard">
                        <a href="https://drive.google.com/file/d/10LTy_wFm6PX57irwz237lQBWxZObY3ns/view?usp=sharing">
                            <img src={FolderBackground} alt="Society of Women Engineers Website" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                Society of Women Engineers Website
                            </div>
                            <div className = "projectCard-secondHeading">
                                Project Member | 2021
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                    <li>Used <b>Figma</b>, VSC for <b>HTML/CSS</b>, Github, <b>React.js</b>, and .json files 
                                        to create the "About" and "Project Team" sections of the Society of 
                                        Women Engineers at UC San Diego website</li>
                                    <li>Completed project under <b>7</b> week deadline while learning about version control 
                                        and <b>core framework</b> principles</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className = "projects-columnFormat">
                    <div className = "projects-imageCard">
                        <a href="#introduction">
                            <img src={FolderBackground} alt="Personal Portfolio" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                Personal Portfolio
                            </div>
                            <div className = "projectCard-secondHeading">
                                Solo Personal Project | 2024
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                <li>Coded this portfolio page from scratch using strong <b>Typescript</b>, <b>React</b>,
                                and <b>HTML/CSS</b> knowledge.</li>
                                <li>Employed <b>UI/UX</b> know how and devised <b>Figma</b> prototype and replicated
                                draft using code.</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = "projects-imageCard">
                        <a href="https://drive.google.com/file/d/10LTy_wFm6PX57irwz237lQBWxZObY3ns/view?usp=sharing">
                            <img src={FolderBackground} alt="ReGen" className="projects-image"/>
                        </a>
                        <div className = "overlay-rectangle">
                        <div className = "projectCard-textBase">
                            <div className = "projectCard-heading">
                                ReGen
                            </div>
                            <div className = "projectCard-secondHeading">
                                Solo Personal Project | 2024
                            </div>
                            <div className = "projectCard-description">
                            <ul>
                                <li>Mastered coding using <b>Typescript</b>, <b>Vite</b>, and <b>React</b> to create
                                website interface that allows users to input edible ingredients they carry and generate
                                a recipe.</li>
                                <li>Gained experience with <b>API</b> usage (Spoonacular) and <b>full stack programming</b>.</li>
                                <li>Added animation to text and website background for UX interactvity</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects; 