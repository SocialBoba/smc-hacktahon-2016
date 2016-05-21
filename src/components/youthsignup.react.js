import React, {  Component } from 'react';

export default class YouthSignup extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <form>
        <h3>Youth Signup</h3>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>City</label>
          <input type="text" />
        </div>
        <div>
          <label>State</label>
          <input type="text" />
        </div>
        <div>
          <label>Postal</label>
          <input type="text" />
        </div>
        <div>
          <label>Intro</label>
          <textarea />
        </div>
        <div>
          <label>Organization</label>
          <input type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
