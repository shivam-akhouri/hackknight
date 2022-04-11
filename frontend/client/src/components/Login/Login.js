import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <>
        <h2>Login</h2>
          <div class="mb-3">
          
          <label  class="form-label">Registration Number:</label>
          <input name="regno" type="numeric" class="form-control" inputmode="numeric" placeholder="Registration Number"></input>
  
          <label  class="form-label">Password:</label>
          <input name="password" type="password" class="form-control"  placeholder="Password"></input>
          
          <button type="button" name="submit" class="btn btn-primary btn-sm">Submit</button>
          </div>
        </>
    )
  }
}
