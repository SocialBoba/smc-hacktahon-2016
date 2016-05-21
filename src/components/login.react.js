import React, {  Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginYouth, loginMentor } from '../actions/login.action';

class LogIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      type: ''
    };
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const {email, password, type} = this.state;
  }
  
  render(){
    const {email, password} = this.state;
    return (
      <div>
        <img className="logo" src={"./style/images/sanmateo_hackthon-logo.png"}/>
        <form onSubmit={this._handleSubmit} className="login">
          Email:<br />
          <input type="text" name="email" value={email} onChange={this._handleChange} /><br />
          Password:<br />
          <input type="password" name="password" value={password} onChange={this._handleChange} /><br />
          Who are you:<br />
          Youth: <input type="radio" name="type" value="youth" onChange={this._handleChange} /> 
          Mentor: <input type="radio" name="type" value="mentor" onChange={this._handleChange} /><br />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {loginYouth, loginMentor})(LogIn);
