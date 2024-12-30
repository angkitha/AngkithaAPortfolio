import React from 'react';
import '../styles/ResumeMore.css';
import resumePreview from '../images/resumepreview.png';
import image1 from '../images/python.png';
import image2 from '../images/react.png';
import image3 from '../images/cpp.png';
import image4 from '../images/java.png';
import image5 from '../images/sql.png';
import image6 from '../images/matlab.png';
import image7 from '../images/verilog.png';
import image8 from '../images/pytorch.png';
import image9 from '../images/html.png';
import image10 from '../images/css.png';
import image11 from '../images/excel.png';
import image12 from '../images/rprog.png';
import image13 from '../images/git.png';
import image14 from '../images/assembly.png';
import image15 from '../images/jupyter.png';
import image16 from '../images/ds.png';

const images = [
  image1, image2, image3, image4,
  image5, image6, image7, image8,
  image9, image10, image11, image12,
  image13, image14, image15, image16,
];

const ResumeMore: React.FC = () => {
    return (
        <div id="resume" className="section">
            <div className = "resumeMore-main-container">
                
                <div className = "resume-twoCardContainer">
                    <div className = "resume-firstCardBase">
                        {}
                        <div className = "resume-secondCardOverlay">
                            <a href="https://drive.google.com/file/d/10LTy_wFm6PX57irwz237lQBWxZObY3ns/view?usp=sharing">
                                <img src={resumePreview} alt="Resume" className="resume-secondCardOverlay-image"/>
                            </a>
                        </div>
                    </div>
                    <div className = "resume-cardText">TL;DR? Here's my Resume + A Visual Summary Below for Good Measure :)</div>
                </div>
                
                <div className = "more-cardsFormat">
                    <div className = "more-cardContainer">
                        <h3 className="more-cardHeading">Technology I'm Proficient In:</h3>
                        <div className = "more-cardsBase"> 
                            <div className="grid-container">
                                {images.map((image, index) => (
                                    <div key={index} className="grid-item">
                                        <img src={image} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className = "more-cardContainer">
                        <h3 className="more-cardHeading">My Other Achievements + Passions:</h3>
                        <div className = "more-cardsBase"> 
                            <div className = "more-hobbiesDescription">
                            <ul>
                                    <li>I love to <span className = "more-description-highlight">work out</span> and run!
                                        <ul><li>I was a finisher of the <span className = "more-description-highlight">La Jolla Half Marathon</span> in May of 2024</li>
                                        <li>Working on training for a full marathon in 2025!</li></ul>
                                    </li>
                                    <li>I love listening to <span className = "more-description-highlight">music</span>.
                                        <ul><li>My favorite genres are <span className = "more-description-highlight">Hip-Hop</span> and <span className = "more-description-highlight">Soul</span>. </li>
                                        <li>If you have recommendations, please connect with me!</li></ul>
                                    </li>
                                    <li>I love exploring new <span className = "more-description-highlight">food</span> venues.
                                    <ul><li>My friends always look to me for recommendations</li>
                                    <li>Here's my running list of places I've explored, ranked!</li></ul>
                                    </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "resume-navBar">
                <div className = "resume-navText">
                <a href="#introduction">
                    INTRODUCTION
                </a>
                </div>
                <div className = "resume-navText">
                <a href="#experience">
                    EXPERIENCE
                </a>
                </div>
                <div className = "resume-navText">
                <a href="#projects">
                    PROJECTS
                </a>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ResumeMore; 