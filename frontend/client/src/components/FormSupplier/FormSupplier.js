import React, { Component, useState } from 'react'

export default function FormSupplier(){
    const [data, setData] = useState({
      name: "",
      email: "",
      companyname: "",
      phoneno: "",
      companyaddress: "",
      postal: "",
      licensenumber: ""
    });
    return (
      
        <>
        <div class="supplierform pt-3">
        <div>
        
          <div class="formcontainer">
          <h2>Supplier Registration</h2>  
          <label  class="form-label">Name:</label>
          <input value={data.name} onChange={(e)=>{
            setData({
              ...data,
              [e.target.name]: e.target.value,
            })
          }} name="name" type="text" class="form-control"  placeholder="Your Name"></input>
  
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input value={data.email} name="email" type="email" class="form-control"  placeholder="name@example.com"></input>
  
          <label  class="form-label">Company Name:</label>
          <input value={data.companyname} name="companyname" type="text" class="form-control"  placeholder="Company Name"></input>
  
          <label  class="form-label">Phone No.:</label>
          <input value={data.phoneno} name="phoneno" inputmode="numeric" type="number" class="form-control"  placeholder="1234567890"></input>
  
          <label  class="form-label">Company Address:</label>
          <textarea value={data.companyaddress} name="companyaddress" class="form-control" placeholder='Company Address'></textarea>
  
          
          <label  class="form-label">Postal Code:</label>
          <input value={data.postal} name="postal" type="number" class="form-control" placeholder='Postal Code: '></input>  
          
          <label  class="form-label">License Number:</label>
          <input value={data.licensenumber} name="licensenumber" type="number" class="form-control"  placeholder="License Number"></input>
        
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
    );
}
