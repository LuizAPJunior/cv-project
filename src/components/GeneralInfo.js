import React,{Component} from 'react';
import PersonalInfo from './PersonalInfo';
import '../assets/css/GeneralInfo.css';
import emailIcon from '../assets/images/email.svg'
import portrait from '../assets/images/portrait.jpg'
import phoneIcon from '../assets/images/cellphone.svg'
import mapIcon from '../assets/images/map-marker.svg'


class GeneralInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            apllicant_img: portrait, 
            name:'Full Name', 
            job_title:'Job Title',
            description: 'Describe about you here.',
            email:'mail@mail.com',
            phone_number: 88888888,
            city: 'City'
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
                       name: e.target[0].value, 
                       job_title: e.target[1].value,
                       description: e.target[2].value,
                       email: e.target[4].value,
                       phone_number: e.target[5].value,
                       city: e.target[6].value,
                       editing: false 
                    });
    }



    render(){
        const {apllicant_img, name, job_title, description, email, phone_number, city, editing} = this.state;
        return(
            <header className='general-info'>
                <form onSubmit={this.updateGeneralInfo}>
                    <div className='profile-jobtitle'>
                        <img className='profilePic' id='profilePic' src={apllicant_img} alt='Applicant'></img>
                        <div className='name-jobtitle'>
                            {editing?(<div><label htmlFor="name">Name </label> <input type="text" name='name' defaultValue={name}/></div>):(<h1 className='name'>{name}</h1>)}
                            {editing?(<div><label htmlFor="job_title">Job Title</label><input type="text" name='job_title' defaultValue={job_title}/></div>):(<p className='jobtitle'>{job_title}</p>)}
                            {editing?(<div><label htmlFor="description">Description</label><textarea id="description" name="description" rows="5" cols="21" defaultValue={description}></textarea></div>):(<p>{description}</p>)}
                        </div>
                        {editing?(<input className='btnUpdate' type="submit" value="Update"/>):(<button className='btnEdit' onClick={this.editGeneralInfo}>Edit</button>)}
                    </div>
                    <div className='genPersonalInfo'>
                        {editing?(<div><label htmlFor="email">Email</label><input type="email" name="email" defaultValue={email}/></div>):(<PersonalInfo className="iconInfo" text={email} alt_text="email icon" icon_image={emailIcon}></PersonalInfo>)} 
                        {editing?(<div><label htmlFor="phone_number">Phone Number </label><input type="number" name="phone_number" defaultValue={phone_number}/></div>):(<PersonalInfo className="iconInfo" text={phone_number} alt_text="phone number icon" icon_image={phoneIcon}></PersonalInfo>)} 
                        {editing?(<div><label htmlFor="city">City</label><input type="text" name="city" defaultValue={city}/></div>):(<PersonalInfo className="iconInfo" text={city} alt_text="location icon" icon_image={mapIcon}></PersonalInfo>)}
                    </div> 
                </form>
            </header>    
        );
    }


}

export default GeneralInfo;