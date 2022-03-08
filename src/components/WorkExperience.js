import React,{Component} from 'react';


class WorkExperience extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            position: 'Software Engineer',
            company: 'Hydro Tech',
            ed_start_date: "2020-02",
            ed_end_date: "2020-08",
            tasks: ""
        };
        this.editInfo = this.editInfo.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }

    editInfo(){
        this.setState({editing: true});
    }

    updateInfo(e){
        e.preventDefault();
        this.setState({ position: e.target[0].value, 
                        company: e.target[1].value, 
                        ed_start_date: e.target[2].value,
                        ed_end_date: e.target[3].value,
                        tasks: e.target[4].value,
                        editing: false 
                    });
    }

    render(){
        const {editing, position, company, ed_start_date, ed_end_date, tasks} = this.state;
        const start_date_formatted = ed_start_date.split("-");
        const end_date_formatted = ed_end_date.split("-"); 
        return(
            <section className='education'>
                <form onSubmit={this.updateInfo}>
                    {editing?(<div><label for="position">Position: </label> <input type="text" name='position' id='position' defaultValue={position}/></div>):(<p>{position}</p>)}
                    {editing?(<div><label for="company">Company: </label> <input type="text" name='company' id='company' defaultValue={company}/></div>):(<p>{company}</p>)}
                    {editing?(<div><span>Period: </span><input type="month" id="start_date" name="start_date" required defaultValue={ed_start_date}/>-<input type="month" id="end_date" name="end_date" required defaultValue={ed_end_date}/> </div>):(<p>{start_date_formatted[1]+"/"+start_date_formatted[0]+" - "+end_date_formatted[1]+"/"+end_date_formatted[0]}</p>)}
                    {editing?(<div><label for="tasks">Tasks: </label> <input type="text" name="tasks" id="tasks" defaultValue={tasks}/></div>):(<p>{tasks}</p>)}
                    {editing?(<input type="submit" value="Update"/>):(<button onClick={this.editInfo}>Edit</button>)}
                </form>
            </section>    
        );
    }


}

export default WorkExperience;