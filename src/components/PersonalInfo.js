import React,{Component} from 'react';

class PersonalInfo extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {text, alt_text, icon_image} = this.props;
        return(
        <div className='personalInfo'>
            <img className='iconInfo' src={icon_image} alt={alt_text}></img>
            <span>{text}</span>     
        </div>
        );
    }
}

export default PersonalInfo;