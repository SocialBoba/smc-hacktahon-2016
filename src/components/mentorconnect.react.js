import React, {  Component } from 'react';

export default class MentorConnect extends Component {

  constructor(props){
    super(props);
  }

  _handleFindMoreYouth = () => {
  	console.log('***find More Youth button Clicked***')
  }

  _handleFindYouth = () => {
  	console.log("***find Youth button clicked")
  }

  _renderStudentInfo = () => {
    let hasMatchedWithMentor = true; // Replace with props
    let studentList = ['Luke Skywalker', 'Leia Skywalker', 'Han Solo', 'Anakin Skywalker']; // Replace with props

    if (hasMatchedWithMentor) {
      return <div>
      	<div>Students:</div>
      	{studentList.map( (student) => {
      		return <div> {student} </div>
      	})}
      </div>
      		
    } else {
      return <button onClick={this._handleFindStudent}>Find Students</button>
    }
  }

  render(){
    let name = "Obi Wan Kenobi"; // Replace with props
    let location = "San Mateo"; // Replace with props
    let profilePicUrl = "http://vignette4.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816" // Replace with props

    return (
      <div className="mentor-profile profile">
        <section><img className="profile-logo" src={"./style/images/sanmateo_hackthon-logo.png"}/> <p>County of San Mateo </p><p> MentorCare</p></section>
        <img className="profile-pic" src={profilePicUrl}/>
        <ul>
        <li>Name: {name}</li>
        <li>Location: {location}</li>
        <li>{this._renderStudentInfo()}</li>  
        </ul>
      </div>
    );
  }
}