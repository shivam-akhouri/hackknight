import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <>
        <div className="loginform pt-3">
        <div className="formcontainer">
        <h2>Login</h2>
          <div class="mb-3">
          
          <label  class="form-label">Registration Number:</label>
          <input name="regno" type="numeric" class="form-control" inputmode="numeric" placeholder="Registration Number"></input>
  
          <label  class="form-label">Password:</label>
          <input name="password" type="password" class="form-control"  placeholder="Password"></input>
          
          <div id="submit">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Submit</span>
              </button>
            </div>
          </div>
          </div>
          </div>
        </>
    )
  }
}
