import React, { Component } from 'react';
import WorkExperience from './WorkExperience';

class WorkExpGeneral extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <h2>Work Experience</h2>
                <WorkExperience />
                <WorkExperience />
                <WorkExperience />
            </div>
        );
    }


}

export default WorkExpGeneral;