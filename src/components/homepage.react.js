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
      <div>
        <button type="button" onClick={this._handleClick}>Log In</button>
        <button type="button" onClick={this._handleClick}>Sign Up</button>
      </div>
    );
  }
}
