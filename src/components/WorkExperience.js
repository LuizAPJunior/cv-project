import React,{useState} from 'react';

const WorkExperience = () => {
    const [editing, setEditing] = useState(false);
    const [position, setPosition] = useState("Position/Title");
    const [company, setCompany] = useState("Company");
    const [startDate, setStartDate] = useState("2014-01");
    const [endDate, setEndDate] = useState("2016-01");
    const [tasks, setTasks] = useState("Task 1;\r\nTask 2;\r\nTask 3");

    const editInfo = () => {
        setEditing(true);
    }

    const updateInfo = (e) => {
        e.preventDefault();
        setPosition(e.target[0].value);
        setCompany(e.target[1].value);
        setStartDate(e.target[2].value);
        setEndDate(e.target[3].value);
        setTasks(e.target[4].value);
        setEditing(false);
    }

    const start_date_formatted = startDate.split("-");
    const end_date_formatted = endDate.split("-"); 
    return(
        <section className='work'>
            <form onSubmit={updateInfo}>
                <div className="work-info">
                    <div>
                        {editing?(<div><label htmlFor="position">Position</label> <input type="text" name='position' id='position' defaultValue={position}/></div>):(<h3>{position}</h3>)}
                        {editing?(<div><label htmlFor="company">Company</label> <input type="text" name='company' id='company' defaultValue={company}/></div>):(<p>{company}</p>)}
                        {editing?(<div><span>Period: </span><input type="month" id="start_date" name="start_date" required defaultValue={startDate}/>-<input type="month" id="end_date" name="end_date" required defaultValue={endDate}/> </div>):(<p>{start_date_formatted[1]+"/"+start_date_formatted[0]+" - "+end_date_formatted[1]+"/"+end_date_formatted[0]}</p>)}
                        {editing?(<div><label htmlFor="tasks">Tasks</label><textarea id="tasks" name="tasks" rows="5" cols="21" defaultValue={tasks}></textarea></div>):(<p>{tasks}</p>)}
                    </div>
                    {editing?(<input type="submit" value="Update"/>):(<button onClick={editInfo}>Edit</button>)}
                </div>
            </form>
        </section> 
    );
}


export default WorkExperience;