import React,{Component} from 'react';


class EducationalExperience extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            institution: 'Houston University',
            ed_start_date: "2016-02",
            ed_end_date: "2020-02",
            course: 'Physics'
        };
        this.editGeneralInfo = this.editGeneralInfo.bind(this);
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    }

    editGeneralInfo(){
        this.setState({editing: true});
    }

    updateGeneralInfo(e){
        e.preventDefault();
        this.setState({institution: e.target[0].value, 
                        ed_start_date: e.target[1].value,
                        ed_end_date: e.target[2].value,
                        course: e.target[3].value,
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
                <h3>Study Program</h3>
                <form onSubmit={this.updateGeneralInfo}>
                    {editing?(<div><label for="institution">Institution: </label> <input type="text" name='institution' id='institution' defaultValue={institution}/></div>):(<p>{institution}</p>)}
                    {editing?(<div><span>Period: </span><input type="month" id="start_date" name="start_date" required defaultValue={ed_start_date}/>-<input type="month" id="end_date" name="end_date" required defaultValue={ed_end_date}/> </div>):(<p>{start_date_formatted[1]+"/"+start_date_formatted[0]+" - "+end_date_formatted[1]+"/"+end_date_formatted[0]}</p>)}
                    {editing?(<div><label>Course: </label> <input type="text" name="course" defaultValue={course}/></div>):(<p>{course}</p>)}
                    {editing?(<input type="submit" value="Update"/>):(<button onClick={this.editGeneralInfo}>Edit</button>)}

                </form>
            </section>    
        );
    }


}

export default EducationalExperience;