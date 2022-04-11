import React, { Component } from 'react'

export default class FormSupplier extends Component {
  render() {
    return (
      
        <>
        <div class="supplierform">
        <div>
        
          <div class="mb-3">
          <h2>Supplier Registration</h2>  
          <label  class="form-label">Name:</label>
          <input name="name" type="text" class="form-control"  placeholder="Your Name"></input>
  
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input name="email" type="email" class="form-control"  placeholder="name@example.com"></input>
  
          <label  class="form-label">Company Name:</label>
          <input name="companyname" type="text" class="form-control"  placeholder="Company Name"></input>
  
          <label  class="form-label">Phone No.:</label>
          <input name="phoneno" inputmode="numeric" type="number" class="form-control"  placeholder="1234567890"></input>
  
          <label  class="form-label">Company Address:</label>
          <textarea name="companyaddress" class="form-control" placeholder='Company Address'></textarea>
  
          
          <label  class="form-label">Postal Code:</label>
          <input name="postal" type="number" class="form-control" placeholder='Postal Code: '></input>  
          
          <label  class="form-label">License Number:</label>
          <input name="licensenumber" type="number" class="form-control"  placeholder="License Number"></input>
        
          <button type="button" name="submit" class="btn btn-primary btn-sm">Submit</button>
        </div>
        </div>
        </div>
        </>
    )
  }
}
