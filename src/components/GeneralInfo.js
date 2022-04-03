import React,{useState, useEffect} from 'react';
import PersonalInfo from './PersonalInfo';
import '../assets/css/GeneralInfo.css';
import emailIcon from '../assets/images/email.svg'
import portrait from '../assets/images/portrait.jpg'
import phoneIcon from '../assets/images/cellphone.svg'
import mapIcon from '../assets/images/map-marker.svg'


const GeneralInfo = () =>{
    const [editing, setEditing] = useState(false);
    const [apllicant_img, setApllicant_img] = useState(portrait);
    const [name, setName] = useState('Full Name');
    const [job_title, setJob_title] = useState('Job Title');
    const [description, setDescription] = useState('Describe about you here.');
    const [email, setEmail] = useState('mail@mail.com');
    const [phone_number, setPhone_number] = useState(88888888);
    const [city, setCity] = useState('City');
    
    const editGeneralInfo = () => {
        setEditing(true);
    };

    const updateGeneralInfo = (e) =>{
        e.preventDefault();
        setName(e.target[1].value);
        setJob_title(e.target[2].value);
        setDescription(e.target[3].value);
        setEmail(e.target[5].value);
        setPhone_number(e.target[6].value);
        setCity(e.target[7].value);
        setEditing(false);
    };
    
    const handleImage = (e) =>{
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              setApllicant_img( e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
          }
    }




    return(
        <header className='general-info'>
            <form onSubmit={updateGeneralInfo}>
                <div className='profile-jobtitle'>
                    {editing?(<div><label htmlFor="applicant_img">Image</label> <input type="file" name="appllicant_img" id="applicant_img" onChange={handleImage}  /></div>):(<img className='profilePic' id='profilePic' src={apllicant_img} alt='Applicant'></img>)}
                    <div className='name-jobtitle'>
                        {editing?(<div><label htmlFor="name">Name </label> <input type="text" name='name' defaultValue={name}/></div>):(<h1 className='name'>{name}</h1>)}
                        {editing?(<div><label htmlFor="job_title">Job Title</label><input type="text" name='job_title' defaultValue={job_title}/></div>):(<p className='jobtitle'>{job_title}</p>)}
                        {editing?(<div><label htmlFor="description">Description</label><textarea id="description" name="description" rows="5" cols="21" defaultValue={description}></textarea></div>):(<p>{description}</p>)}
                    </div>
                    {editing?(<input className='btnUpdate' type="submit" value="Update"/>):(<button className='btnEdit' onClick={editGeneralInfo}>Edit</button>)}
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

export default GeneralInfo;