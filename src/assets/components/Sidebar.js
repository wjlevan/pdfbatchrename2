import React, { Component } from 'react';
import './css/Sidebar.css';

export class Sidebar extends Component {
    render() {
        return(
            <div>
                <h1 id="sidebar-title"><a href="/" id="sidebar-title-link">PDF BATCH RENAME</a></h1>
                <h5 id="title-contents">CONTENTS</h5>
                <span id="link-container">
                    <span id="links">
                        <a href="/#start-screen">1. Start Screen</a><br/>
                        <a href="/#select-directory">2. Select Directory</a><br/>
                        <a href="/#select-mapping">3. Select Mapping File</a><br/>
                        <a href="/#add-suffix">4. Add Suffix</a>
                    </span>
                </span>

            </div>
        )
    }
}