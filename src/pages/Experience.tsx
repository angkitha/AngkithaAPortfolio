import React from 'react';
import '../styles/Experience.css';
import vinylImageOne from '../images/vinyl.png';

const Experience: React.FC = () => {
    /* Return Portion */
    return (
        <div id = "experience" className= "section experience-main-container">

            <div className = "experience-left-section">
                <div className="record-chain">
                <a href="#introduction" className="record-link" id="record-1">
                    <img src={vinylImageOne} alt="Experience" className="record-image" />
                    <div className='record-text'>Introduction</div>
                </a>
                <a href="#projects" className="record-link" id="record-2">
                    <img src={vinylImageOne} alt="Projects" className="record-image" />
                    <div className='record-text'>Projects</div>
                </a>
                <a href="#resume" className="record-link" id="record-3">
                    <img src={vinylImageOne} alt="Resume" className="record-image" />
                    <div className='record-text'>Resume</div>
                </a>
                <a href="#resume" className="record-link" id="record-4">
                    <img src={vinylImageOne} alt="More" className="record-image" />
                    <div className='record-text'>More</div>
                </a>
            </div>          
            </div>

            <div className = "experience-right-section">
                <div className = "experience-text-base">
                    <div className = "exp-heading">
                        <div className = "exp-heading-circleRect">
                            <div className = "exp-heading-circle">{}</div>
                            <div className = "exp-heading-rect">{}</div>
                        </div>
                        <div className = "exp-heading-dateTagsFormat">
                            <div className = "exp-heading-date">
                                July 2024 - Present
                            </div>
                            <div className = "exp-heading-tags">
                                C++
                            </div>
                            <div className = "exp-heading-tags">
                                APIs
                            </div>
                        </div>
                        <div className = "exp-heading-titleDesc">
                            <div className = "exp-heading-title">
                                Software Engineer
                            </div>
                            <div className = "exp-heading-company">
                                L3Harris Technologies
                            </div>
                            <div className = "exp-heading-list">
                            <ul>
                                    <li>Worked closely with outside clientele to deliver efficient software test engineering solutions</li>
                                    <li>Mastered <span className = "exp-heading-highlight">API</span> usage 
                                    running over 50 test cases, enhancing project success and <span className = "exp-heading-highlight">
                                    reducing timeline</span> by <span className = "exp-heading-highlight">3 months</span></li>
                                    <li>Created automated script in <span className = "exp-heading-highlight">C++</span> 
                                    to improve testing efforts, thereby 
                                    increasing efficiency by <span className = "exp-heading-highlight">60%</span> for team processes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "experience-text-base">
                    <div className = "exp-heading">
                        <div className = "exp-heading-circle">
                            {}
                        </div>
                        <div className = "exp-heading-dateTagsFormat">
                            <div className = "exp-heading-date-2">
                                Jun - Aug 2023
                            </div>
                            <div className = "exp-heading-tags-2">
                                FPGAs
                            </div>
                            <div className = "exp-heading-tags-2">
                                MATLAB
                            </div>
                            <div className = "exp-heading-tags-2">
                                Verilog
                            </div>
                            <div className = "exp-heading-tags-2">
                                Python
                            </div>
                        </div>
                        <div className = "exp-heading-titleDesc">
                            <div className = "exp-heading-title">
                                Software Engineering Intern
                            </div>
                            <div className = "exp-heading-company">
                                L3Harris Technologies
                            </div>
                            <div className = "exp-heading-list">
                            <ul>
                                <li>Coded an audio codec FPGA from <span className = "exp-heading-highlight">scratch</span> using 
                                MATLAB and Verilog, <span className = "exp-heading-highlight">reducing 15 hours</span> from
                                project timeline </li>
                                <li>Formulated a <span className = "exp-heading-highlight">Python</span> script 
                                to <span className = "exp-heading-highlight">scrape data</span> from organization 
                                database and output key statistics on an Excel sheet, <span className = "exp-heading-highlight">enhancing</span> data 
                                accessibility for analysis processes</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "experience-text-base">
                    <div className = "exp-heading">
                        <div className = "exp-heading-circleRect">
                            <div className = "exp-heading-circle">{}</div>
                            <div className = "exp-heading-rect-2">{}</div>
                        </div>
                        <div className = "exp-heading-dateTagsFormat">
                            <div className = "exp-heading-date-3">
                                2023 - 2024
                            </div>
                        </div>
                        <div className = "exp-heading-titleDesc">
                            <div className = "exp-heading-title">
                                Finance Vice President + Pledge Class Finance Chair
                            </div>
                            <div className = "exp-heading-company">
                                Alpha Phi Omega, Rho Pi
                            </div>
                            <div className = "exp-heading-list">
                            <ul>
                                <li>Managed a budget of approximately <b>$15,000</b> for fraternity chapter</li>
                                <li>Advised expenditures for <b>15 events</b> and <b>4</b> chapter traditions</li>
                                <li>Planned and <b>raised</b> a total of <b>$2,210</b> via 4 successful fundraising events</li>
                                <li>Gave back to the community via <b>15+ service</b> hours</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "experience-text-base">
                    <div className = "exp-heading">
                        <div className = "exp-heading-circle">
                            {}
                        </div>
                        <div className = "exp-heading-dateTagsFormat">
                            <div className = "exp-heading-date-3">
                                2021 - 2023
                            </div>
                        </div>
                        <div className = "exp-heading-titleDesc">
                            <div className = "exp-heading-title">
                                Treasurer
                            </div>
                            <div className = "exp-heading-company">
                                Society of Women Engineers at UCSD
                            </div>
                            <div className = "exp-heading-list">
                            <ul>
                                <li>Raised and managed <b>$45,000</b> for the organization by <b>engaging corporate sponsors</b></li>
                                <li>Advocated for student and sponsor interests by <b>organizing</b> orders for <b>30+ events</b> held by SWE from 2021-2023</li>
                                <li>Achieved a <b>20% surplus</b> from projected budget and 
                                    <b>boosted participation by 40%</b> through incentives and firm budgeting</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "experience-text-base">
                    <div className = "exp-heading">
                        <div className = "exp-heading-circle">
                            {}
                        </div>
                        <div className = "exp-heading-dateTagsFormat">
                            <div className = "exp-heading-date-3">
                                2021 - 2022
                            </div>
                        </div>
                        <div className = "exp-heading-titleDesc">
                            <div className = "exp-heading-title">
                                Sponsorship Committee Member
                            </div>
                            <div className = "exp-heading-company">
                                Triton Engineering Student Council
                            </div>
                            <div className = "exp-heading-list">
                            <ul>
                                <li>Organized events in collaboration with council and its affiliate organization</li>
                                <li>Actively worked 2 quarters with industry professionals to <b>procure 4 sponsorship grants</b> for council events</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ); 
}; 

export default Experience; 

