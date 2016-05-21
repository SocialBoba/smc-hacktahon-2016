import React, {  Component, PropTypes } from 'react';
import MentorSignup from './mentorsignup.react';
import YouthSignup from './youthsignup.react';

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      signupType: 'youth'
    }
  }

  _setYouthForm = () => {
    this.setState({
      signupType: 'youth'
    })
  }

  _setMentorForm = () => {
    this.setState({
      signupType: 'mentor'
    })
  }

  _renderSignup = () => {
    if (this.state.signupType === 'youth') {
      return <YouthSignup/>
    } else {
      return <MentorSignup/>
    }
  }
  
  render(){
    return (
      <div>
        <div onClick={this._setYouthForm}>Youth</div>
        <div onClick={this._setMentorForm}>Mentor</div>
        {this._renderSignup()}
      </div>
    );
  }

}
