import React,{useState} from 'react';
import '../assets/css/Exp.css'

const EducationalExperience = () =>{
    const [editing, setEditing] = useState(false);
    const [institution, setInstitution] = useState("Institution");
    const [startDate, setStartDate] = useState("2016-02");
    const [endDate, setEndDate] = useState("2020-02");
    const [course, setCourse] = useState("Study Program");

    const editGeneralInfo = () => {
        setEditing(true);
    }

    const updateGeneralInfo = (e) => {
        e.preventDefault();
        setCourse(e.target[0].value);
        setInstitution(e.target[1].value);
        setStartDate(e.target[2].value);
        setEndDate(e.target[3].value);
        setEditing(false);
    }

    const start_date_formatted = startDate.split("-");
    const end_date_formatted = endDate.split("-"); 
    return(
            <section className='education'>
                <h2>Education</h2>
                <form onSubmit={updateGeneralInfo}>
                    <div className="ed-info">
                        <div>
                            {editing?(<div><label htmlFor="course">Study Program</label> <input type="text" name="course" id="course" defaultValue={course}/></div>):(<h3>{course}</h3>)}
                            {editing?(<div><label htmlFor="institution">Institution</label> <input type="text" name='institution' id='institution' defaultValue={institution}/></div>):(<p>{institution}</p>)}
                            {editing?(<div><label>Period</label><input type="month" id="start_date" name="start_date" required defaultValue={startDate}/>-<input type="month" id="end_date" name="end_date" required defaultValue={endDate}/> </div>):(<p>{start_date_formatted[1]+"/"+start_date_formatted[0]+" - "+end_date_formatted[1]+"/"+end_date_formatted[0]}</p>)}
                        </div>
                        {editing?(<input type="submit" value="Update"/>):(<button onClick={editGeneralInfo}>Edit</button>)}
                    </div>
                </form>
            </section>  
    );
} 

export default EducationalExperience;