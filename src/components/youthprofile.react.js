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
    let profilePicUrl = "https://cdn2.vox-cdn.com/thumbor/hLZC1wKGNINuWx5hxGB2ZdptKTs=/0x0:1920x1080/1600x900/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/47651097/skywalker-luke.0.0.jpg" // Replace with props
    let mentor = "Obi Wan Kenobi";

    return (
      <div>
        <div>Hello {name}</div>
        <img src={profilePicUrl}/>
        <div>Location: {location}</div>
        <div>Mentor: {mentor}</div>
        <button onClick={this._handleReviewButton}>Review</button>
        <button onClick={this._handleMeetingButton}>Meeting</button>
        <button onClick={this._handleChatButton}>Chat</button>
      </div>
    );
  }
}