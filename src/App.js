
import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GeneralInfo from './components/GeneralInfo';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <GeneralInfo/>
        <EducationalExperience/>
      </div>
     
    );
  }
}

export default App;
