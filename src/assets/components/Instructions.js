import React, { Component } from 'react';
import './css/Instructions.css';
import fileicon from './../img/0-icon.png';
import startscreen from './../img/1-startscreen.png';
import choosedirect from './../img/2-choosedirectory.png';
import choosemap from './../img/3-choosemappingfile.png';
import appendtxt from './../img/4-appendtext.png';
import mapping from './../img/mappingfile.png';
import before from './../img/pdf-before.png';
import after from './../img/pdf-after.png';

export class Instructions extends Component {
    render() {
        const title_instructions = <a name="instructions"><h1 id="title_instructions">Instructions</h1></a>
        const text_instructions = <p>To get started with PDF Batch Rename, you'll need a Windows 10 operating system. <br/><br/><br/>PDF Batch Rename is a stand-alone application with no installation required.<br/><br/><br/>First, run the executable application.</p>
        const img_instructions = <img src={fileicon} />

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
        const text_append = <p>You will be prompted with a text box. <br/><br/>Enter text you wish to append at the end of each file name.</p>
        const img_append = <img src={appendtxt} />

        const title_before = <h2 className="before-after">Before:</h2>
        const text_before = ""
        const img_before = <img src={before} />

        const title_after = <h2 className="before-after">After:</h2>
        const text_after = ""
        const img_after = <img src={after} />


        const title_specs = <a name="specifications"><h1 id="title-specs">Specifications</h1></a>
        const text_specs = <p>This application reads file names with fields seperated by an underscore (see column A). <br/><br/>In this example, the first two fields are always the same and are used as unique identifiers (see columns B and C).<br/><br/>Column D contains the new file name.</p>
        const img_specs = <img src={mapping} id="img-mapping"/>

        return(
            <div>
                <Step title={title_instructions} text={text_instructions} img={img_instructions}/>
                <Step title={title_start} text={text_start} img={img_start}/>
                <Step title={title_directory} text={text_directory} img={img_directory}/>
                <Step title={title_mapping} text={text_mapping} img={img_mapping}/>
                <Step title={title_append} text={text_append} img={img_append}/>

                <Step title={title_before} text={text_before} img={img_before}/>
                <Step title={title_after} text={text_after} img={img_after}/>

                <Step title={title_specs} text={text_specs} img={img_specs}/>

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