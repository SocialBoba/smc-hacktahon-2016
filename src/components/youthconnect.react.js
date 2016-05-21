import React, {  Component } from 'react';

export default class YouthConnect extends Component {

  constructor(props){
    super(props);
  }

  _handleFindMentorClick = () => {
  }

  _renderMentorInfo = () => {
    let hasMatchedWithMentor = false; // Replace with props
    let mentorName = "Obi Wan Kenobi"; // Replace with props

    if (hasMatchedWithMentor) {
      return <div>Mentor: {mentorName} </div>
    } else {
      return <button onClick={this._handleFindMentorClick}>Find Your Mentor</button>
    }
  }


  
  render(){
    let name = "Luke Skywalker"; // Replace with props
    let location = "San Mateo"; // Replace with props
    let profilePicUrl = "http://limaohio.com//wp-content/uploads/2016/03/web1_caden-fry.jpg" // Replace with props

    return (
      <div>
        <img src={profilePicUrl}/>
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        {this._renderMentorInfo()}
      </div>
    );
  }
}
