
import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GeneralInfo from './components/GeneralInfo';
import WorkExpGeneral from './components/WorkExpGeneral';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <GeneralInfo/>
        <EducationalExperience/>
        <WorkExpGeneral/>
      </div>
     
    );
  }
}

export default App;
