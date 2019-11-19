import React, { Component } from 'react';
import './css/Sidebar.css';
import github from './../img/github.png';
import linkedin from './../img/linkedin.jpg';

export class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar-container">
                <h1 id="sidebar-title"><a href="/" id="sidebar-title-link">PDF BATCH RENAME</a></h1>

                <div className="container-contents">
                    <h5 id="title-contents">INSTRUCTIONS</h5>
                    <span id="link-container">
                        <span id="links">
                            <a href="/#" className="lighter hide" alt="Jump to Top"><span className="hide">0. </span>Jump to Top</a><br/>
                            <a href="/#start-screen" alt="Jump to Step 1: Start Screen">1. Start Screen</a><br/>
                            <a href="/#select-directory" alt="Jump to Step 2: Select Directory">2. Select Directory</a><br/>
                            <a href="/#select-mapping" alt="Jump to Step 3: Select Mapping File">3. Select Mapping File</a><br/>
                            <a href="/#add-suffix" alt="Jump to Step 4: Add Suffix">4. Add Suffix</a><br/><br/>
                        </span>
                    </span>
                </div>

                <a href="#specifications"><h5 id="title-contents">MAPPING FILE<br/>SPECIFICATIONS</h5></a>



                <div className="links-outside">
                <h5 id="title-contents">LINKS</h5>
                    <a href="https://drive.google.com/file/d/1gKHygE8Ac3TNBCmXqLBUBSoEhrP7-vVF/view?usp=sharing" alt="Link to Download">Download</a><br/>
                    <a href="https://github.com/wjlevan/pdfbatchrename2" alt="Link to Source Code">Source code</a>
                </div>

                <div className="img-container">
                    <a href="https://github.com/wjlevan" alt="Link to Author's Github" target="_noblank" className="github" ><img className="github" src={github}/></a>
                    <a href="https://www.linkedin.com/in/walterlevan" className="linkedin" target="_noblank" alt="Link to Author's LinkedIn"><img className="linkedin" src={linkedin} /></a>
                </div>

            </div>
        )
    }
}