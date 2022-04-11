import React, { Component } from 'react'

export default class FormDoctor extends Component {
  render() {
    return (
      <>
      <h2>Doctor Registration</h2>
        <div class="mb-3">
        

        <label  class="form-label">Name:</label>
        <input name="name" type="text" class="form-control"  placeholder="Your Name"></input>

        <label  class="form-label">Date of Birth</label>
        <input name="dob" type="date" class="form-control"  placeholder="Age"></input>

        <label  class="form-label">License Number:</label>
        <input name="licensenumber" type="number" class="form-control"  placeholder="License Number"></input>

        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
        <input name="email" type="email" class="form-control"  placeholder="name@example.com"></input>

        <label  class="form-label">Phone No.:</label>
        <input name="phoneno" inputmode="numeric" type="number" class="form-control"  placeholder="1234567890"></input>


        <label  class="form-label">Address:</label>
        <textarea name="address" class="form-control" placeholder='Address'></textarea>
    
        <button type="button" name="submit" class="btn btn-primary btn-sm">Submit</button>
      </div>
    </>
    )
  }
}
