import React, {  Component, PropTypes } from 'react';

export default class HomePage extends Component {

  constructor(props){
    super(props);
  }

  static contextTypes = {
    // you should only use context when you are doing something with react-router and routing
    router: PropTypes.object
  };

  _handleClick = (event) => {
    if(event.target.innerHTML === "Sign Up") {
      this.context.router.push('/signup');
    }
    else {
      this.context.router.push('/login');
    }
  }
  
  render(){
    return (
      <div className="homepage">
        <img className="logo" src={"./style/images/sanmateo_hackthon-logo.png"}/>
        <div className="button"><button type="button" className="login button-home" onClick={this._handleClick}>Log In</button>
        <button type="button" className="signup button-home" onClick={this._handleClick}>Sign Up</button></div>
      </div>
    );
  }
}
