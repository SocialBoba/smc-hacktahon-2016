import React, {  Component } from 'react';

export default class MentorSignup extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      city: '',
      state: '',
      postal: '',
      linkedin: '',
      intro: '',
      group: ''
    };
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
  
  render(){
    return (
      <form>
        <h3>Mentor Signup</h3>
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
          <label>LinkedIn Profile URL</label>
          <input type="text" />
        </div>
        <div>
          <label>Introduce Yourself</label>
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
