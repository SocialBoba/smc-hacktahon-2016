import React, {  Component } from 'react';

export default class MentorSignup extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <form>
        <h3>Mentor Signup</h3>
        <div>
          <label>Name</label>
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
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Zip Code</label>
          <input type="text" />
        </div>
        <div>
          <label>LinkedIn Profile URL</label>
          <input type="text" />
        </div>
        <div>
          <label>About Yourself</label>
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