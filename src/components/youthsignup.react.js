import React, {  Component } from 'react';

export default class YouthSignup extends Component {

  constructor(props){
    super(props);
  }

  _handleSubmit = () => {

  }
  
  render(){
    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <h3>Youth Signup</h3>
        <div className={{}}>
          <label>Name</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className={this._formClasses(categories)}>
          <label>Email</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className={this._formClasses(categories)}>
          <label>City</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className={this._formClasses(categories)}>
          <label>State</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className={this._formClasses(categories)}>
          <label>Postal</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className={this._formClasses(content)}>
          <label>Intro</label>
          <textarea className="form-control" {...content} />
        </div>
        <div className={this._formClasses(categories)}>
          <label>Organization</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
