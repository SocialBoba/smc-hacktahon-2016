import React, {  Component, PropTypes } from 'react';
import MentorSignup from './mentorsignup.react';
import YouthSignup from './youthsignup.react';

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      signupType: 'Youth'
    }
  }

  _handleClick = (event) => {
    let obj = {};
    obj['signupType'] = event.target.innerHTML;
    this.setState(obj);
  }

  _renderSignup = () => {
    if (this.state.signupType === 'Youth') {
      return <YouthSignup/>
    } else {
      return <MentorSignup/>
    }
  }
  
  render(){
    return (
      <div>
        <div onClick={this._handleClick}>Youth</div>
        <div onClick={this._handleClick}>Mentor</div>
        {this._renderSignup()}
      </div>
    );
  }

}
