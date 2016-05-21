import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { signupYouth } from '../actions/signup.action';

class YouthSignup extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      city: '',
      state: '',
      postal: '',
      intro: '',
      group: '',
      referral: '',
      password: ''
    };
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const {name, password, email, city, state, postal, intro, group, referral} = this.state;
    if(name && password && email && city && state && postal && referral) {
      this.props.signupYouth({name, password, email, city, state, postal, intro, group, referral})
        .then((i) => {
          localStorage.setItem('token', i.payload.data.token);
        });
    }
  }
  
  render(){
    const {name, password, email, city, state, postal, intro, group, referral} = this.state;

    return (
      <form onSubmit={this._handleSubmit}>
        <h3>Youth Signup</h3>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this._handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={this._handleChange}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={this._handleChange}/>
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={city} onChange={this._handleChange}/>
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" value={state} onChange={this._handleChange}/>
        </div>
        <div>
          <label>Postal</label>
          <input type="text" name="postal" value={postal} onChange={this._handleChange}/>
        </div>
        <div>
          <label>Referral Code</label>
          <input type="text" name="referral" value={referral} onChange={this._handleChange}/>
        </div>
        <div>
          <label>Introduce Yourself</label>
          <textarea name="intro" value={intro} onChange={this._handleChange} />
        </div>
        <div>
          Organization: <input type="radio" name="group" value="organization" onChange={this._handleChange} /> 
          Caregiver: <input type="radio" name="group" value="caregivier" onChange={this._handleChange} /> 
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.signup.location,
    name: state.signup.name,
    socialLinks: state.signup['social_links'],
    youthID: state.signup['youth_id']
  };
}

export default connect(mapStateToProps, {signupYouth})(YouthSignup);
