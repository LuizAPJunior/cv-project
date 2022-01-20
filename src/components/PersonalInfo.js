import React,{Component} from 'react';

class PersonalInfo extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {text, alt_text, icon_image} = this.props;
        return(
        <div>
            <span>{text}</span> <img src={icon_image} alt={alt_text}></img>
        </div>
        );
    }
}

export default PersonalInfo;