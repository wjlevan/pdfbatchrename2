import React, { Component } from 'react';
import './css/Instructions.css';
import startscreen from './../img/1-startscreen.png';
import choosedirect from './../img/2-choosedirectory.png';
import choosemap from './../img/3-choosemappingfile.png';
import appendtxt from './../img/4-appendtext.png';

export class Instructions extends Component {
    render() {
        const title_instructions = <a name="instructions"><h1 id="title_instructions">Instructions</h1></a>
        const text_instructions = <p>To get started with PDF Batch Rename, you'll need a Windows 10 operating system. <br/><br/><br/>PDF Batch Rename is a stand-alone application with no installation required.<br/><br/><br/>First, run the executable application.</p>

        const title_start = <a name="start-screen"><h2>Start Screen</h2></a>
        const text_start = <p>You will be prompted with the Start Screen.<br/><br/><br/>Select "Start!"</p>
        const img_start = <img src={startscreen} />

        const title_directory = <a name="select-directory"><h2>Select Directory</h2></a>
        const text_directory = <p>You will be prompted to select a directory.<br/><br/><br/>Select the directory containing the files you wish to rename.</p>
        const img_directory = <img src={choosedirect} />

        const title_mapping = <a name="select-mapping"><h2>Select Mapping File</h2></a>
        const text_mapping = <p>You will be prompted to select a mapping file.<br/><br/><br/>Select the mapping file that provides the old and new file names.</p>
        const img_mapping = <img src={choosemap} />

        const title_append = <a name="add-suffix"><h2>Add Suffix <span id="optional">(optional)</span></h2></a>
        const text_append = <p>You will be prompted with a text box. Enter text you wish to appear at the end of each file name.<br/><br/><br/>For example, the year or month-end date may be used.</p>
        const img_append = <img src={appendtxt} />

        return(
            <div>
                <Step title={title_instructions} text={text_instructions} img=""/>
                <Step title={title_start} text={text_start} img={img_start}/>
                <Step title={title_directory} text={text_directory} img={img_directory}/>
                <Step title={title_mapping} text={text_mapping} img={img_mapping}/>
                <Step title={title_append} text={text_append} img={img_append}/>

            </div>
        )
    }
}


class Step extends Component {
    render() {
        return(
            <div className="step">
                <div className="step-instructions">
                    {this.props.title}
                    {this.props.text}
                 </div>

                <div className="step-image">
                    {this.props.img}            
                </div>

                <div className="divider"></div>
            </div>
        )
    }
}