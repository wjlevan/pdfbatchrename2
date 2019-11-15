import React, { Component } from 'react';
import './css/Instructions.css';


export class Instructions extends Component {
    render() {
        const title_instructions = <a name="instructions"><h1 id="title_instructions">Instructions</h1></a>
        const text_instructions = <p>To get started with PDF Batch Rename, you'll need a Windows 10 operating system. <br/><br/>PDF Batch Rename is a stand-alone application with no installation required.<br/><br/><br/>First, run the executable application.</p>

        const title_start = <a name="start-screen"><h2>Start Screen</h2></a>
        const text_start = <p>You will be prompted with the Start Screen.<br/><br/><br/>Select "Start!"</p>

        const title_directory = <a name="select-directory"><h2>Select Directory</h2></a>
        const text_directory = <p>You will be prompted to select a directory.<br/><br/><br/>Select the directory containing the files you wish to rename.</p>

        const title_mapping = <a name="select-mapping"><h2>Select Mapping File</h2></a>
        const text_mapping = <p>You will be prompted to select a mapping file.<br/><br/><br/>Select the mapping file that provides the old and new file names.</p>


        const title_append = <a name="add-suffix"><h2>Add Suffix</h2></a>
        const text_append = <p>You will be prompted with a text box. Enter text you wish to appear at the end of each file name.<br/><br/><br/>For example, the year or month-end date may be used.<br/><br/><span className="note">Note: </span>This field may be left blank.</p>

        return(
            <div>
                <Step title={title_instructions} text={text_instructions} img=""/>
                <Step title={title_start} text={text_start} img=""/>
                <Step title={title_directory} text={text_directory} img=""/>
                <Step title={title_mapping} text={text_mapping} img=""/>
                <Step title={title_append} text={text_append} img=""/>

            </div>
        )
    }
}


class Step extends Component {
    render() {
        return(
            <div className="step">
                <div className="step-instructions">
                    {this.props.title}<br/>
                    {this.props.text}
                 </div>

                <div className="step-image">
                    {this.props.img}            
                </div>
            </div>
        )
    }
}