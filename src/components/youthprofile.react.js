import React, {  Component } from 'react';

export default class YouthProfile extends Component {

  constructor(props){
    super(props);
  }

  _handleReviewButton = () => {
    console.log('***Review Button Clicked***')
  }

  _handleMeetingButton = () => {
    console.log('***Review Meeting Clicked***')

  }

  _handleChatButton = () => {
    console.log('***Review Chat Clicked***')
  }
  
  render(){
    let name = "Luke Skywalker"; // Replace with props
    let location = "San Mateo"; // Replace with props
    let profilePicUrl = "http://i.dailymail.co.uk/i/pix/2012/07/13/article-2173229-0075AB9D00000258-267_224x423.jpg" // Replace with props
    let mentor = "Obi Wan Kenobi";

    return (
      <div className="youth-profile profile">
        <section><img className="profile-logo" src={"./style/images/sanmateo_hackthon-logo.png"}/> <p>County of San Mateo </p><p> MentorCare</p></section>
        <div>Hello {name}</div>
        <img className="youth-pic" src={profilePicUrl}/>
        <div>Location: {location}</div>
        <div>Mentor: {mentor}</div>
        <div className="button">
          <button onClick={this._handleReviewButton}>Review</button>
          <button onClick={this._handleMeetingButton}>Meeting</button>
          <button onClick={this._handleChatButton}>Chat</button>
        </div>
      </div>
    );
  }
}