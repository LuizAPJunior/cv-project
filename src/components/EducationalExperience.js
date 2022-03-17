import React,{Component} from 'react';
import '../assets/css/Exp.css'

class EducationalExperience extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            institution: 'Institution',
            ed_start_date: "2016-02",
            ed_end_date: "2020-02",
            course: 'Study Program'
        };
        this.editGeneralInfo = this.editGeneralInfo.bind(this);
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    }

    editGeneralInfo(){
        this.setState({editing: true});
    }

    updateGeneralInfo(e){
        e.preventDefault();
        this.setState({
                        course: e.target[0].value,
                        institution: e.target[1].value, 
                        ed_start_date: e.target[2].value,
                        ed_end_date: e.target[3].value,
                        editing: false 
                    });
    }

    render(){
        const {editing, institution, ed_start_date, ed_end_date, course} = this.state;
        const start_date_formatted = ed_start_date.split("-");
        const end_date_formatted = ed_end_date.split("-"); 
        return(
            <section className='education'>
                <h2>Education</h2>
                <form onSubmit={this.updateGeneralInfo}>
                    <div className="ed-info">
                        <div>
                            {editing?(<div><label htmlFor="course">Study Program</label> <input type="text" name="course" id="course" defaultValue={course}/></div>):(<h3>{course}</h3>)}
                            {editing?(<div><label htmlFor="institution">Institution</label> <input type="text" name='institution' id='institution' defaultValue={institution}/></div>):(<p>{institution}</p>)}
                            {editing?(<div><label>Period</label><input type="month" id="start_date" name="start_date" required defaultValue={ed_start_date}/>-<input type="month" id="end_date" name="end_date" required defaultValue={ed_end_date}/> </div>):(<p>{start_date_formatted[1]+"/"+start_date_formatted[0]+" - "+end_date_formatted[1]+"/"+end_date_formatted[0]}</p>)}
                        </div>
                        {editing?(<input type="submit" value="Update"/>):(<button onClick={this.editGeneralInfo}>Edit</button>)}
                    </div>
                </form>
            </section>    
        );
    }


}

export default EducationalExperience;