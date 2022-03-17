
import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GeneralInfo from './components/GeneralInfo';
import WorkExpGeneral from './components/WorkExpGeneral';
import './/assets/css/App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='cvbody'>
        <GeneralInfo/>
        <div className="exp">
          <EducationalExperience/>
          <WorkExpGeneral/>
        </div>
      </div>
     
    );
  }
}

export default App;
