import React, {  Component, PropTypes } from 'react';

export default class Greeting extends Component {

  constructor(props){
    super(props);
  }

  static contextTypes = {
    // you should only use context when you are doing something with react-router and routing
    router: PropTypes.object
  };

  _handleClick = () => {
    this.context.router.push('/');
  }
  
  render(){
    return (
      <div>
        this is greeting
        <button onClick={this._handleClick}>Submit</button>
      </div>
    );
  }
}
