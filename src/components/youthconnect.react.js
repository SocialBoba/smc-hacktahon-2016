import React, {  Component } from 'react';

export default class YouthConnect extends Component {

  constructor(props){
    super(props);
  }

  _handleFindMentorClick = () => {
    console.log('***find mentor button clicke***')
  }

  _renderMentorInfo = () => {

    let hasMatchedWithMentor = false;

    let mentorName = "Obi Wan Kenobi";
    if (hasMatchedWithMentor) {
      return <div>Mentor: {mentorName} </div>
    } else {
      return <button onClick={_handleFindMentorClick}>Find Your Mentor</button>
    }
  }


  
  render(){
    let name = "Obi Wan Kenobi";
    let location = "San Mateo";
    let profilePicUrl = "http://limaohio.com//wp-content/uploads/2016/03/web1_caden-fry.jpg"
    return (
      <div>
        <img src={profilePicUrl}/>
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        {this._renderMentorInfo}
      </div>
    );
  }
}
