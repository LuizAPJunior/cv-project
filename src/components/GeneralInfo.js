import React,{Component} from 'react';
import PersonalInfo from './PersonalInfo';

class GeneralInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            apllicant_img:'', 
            name:'Marcos Francis', 
            job_title:'Full Stack Developer',
            description: 'A chill guy who came from Physics field to the WebDev world.',
            email:'marcosfrancis8888@mail.com',
            phone_number: 88888888,
            city: 'Houston'
        };
        this.editGeneralInfo = this.editGeneralInfo.bind(this);
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    }

    editGeneralInfo(){
        this.setState({editing: true});
    }

    updateGeneralInfo(e){
        e.preventDefault();
        this.setState({name: e.target[0].value, 
                       job_title: e.target[1].value,
                       email: e.target[2].value,
                       phone_number: e.target[3].value,
                       city: e.target[4].value,
                       description: e.target[5].value,
                       editing: false 
                    });
    }

    render(){
        const {apllicant_img, name, job_title, description, email, phone_number, city, editing} = this.state;
        return(
            <header className='general-info'>
                <img src={apllicant_img} alt='Applicant'></img>
                <form onSubmit={this.updateGeneralInfo}>
                    <div className='name-jobtitle'>
                        {editing?(<div><span>Name: </span> <input type="text" name='name' defaultValue={name}/></div>):(<h1>{name}</h1>)}
                        {editing?(<div><span>Job Title: </span><input type="text" name='job_title' defaultValue={job_title}/></div>):(<h2>{job_title}</h2>)}
                    </div>
                    <div className='personal-info'>
                    {editing?(<div><span>Email: </span><input type="email" name="email" defaultValue={email}/></div>):(<PersonalInfo text={email} alt_text="email icon" icon_image=""></PersonalInfo>)} 
                    {editing?(<div><span>Phone Number: </span><input type="number" name="phone_number" defaultValue={phone_number}/></div>):(<PersonalInfo text={phone_number} alt_text="phone number icon" icon_image=""></PersonalInfo>)} 
                    {editing?(<div><span>City: </span><input type="text" name="city" defaultValue={city}/></div>):(<PersonalInfo text={city} alt_text="location icon" icon_image=""></PersonalInfo>)}
                    </div>
                    {editing?(<div><span>Description: </span><input type="text" name='description' defaultValue={description}/></div>):(<p>{description}</p>)}
                    {editing?(<input type="submit" value="Update"/>):(<button onClick={this.editGeneralInfo}>Edit</button>)}
                </form>
            </header>    
        );
    }


}

export default GeneralInfo;