import React, { Component, useState } from 'react'

export default function FormDoctor(){
    const [data, setData] = useState({
      name: "",
      dob: "",
      licensenumber:"",
      email: "",
      phoneno: "",
      address: "",
    });
    return ( 
      <div class="doctorform pt-3">
      
        <div class="formcontainer">
    
        <h2>Doctor Registration</h2>
        <label class="form-label">Name:</label>
        <input value={data.name} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="name" type="text" class="form-control"  placeholder="Your Name"></input>

        <label class="form-label">Date of Birth</label>
        <input value={data.dob} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="dob" type="date" class="form-control"  placeholder="Age"></input>

        <label  class="form-label">License Number:</label>
        <input value={data.licensenumber} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="licensenumber" type="number" class="form-control"  placeholder="License Number"></input>

        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
        <input value={data.email} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="email" type="email" class="form-control"  placeholder="name@example.com"></input>

        <label  class="form-label">Phone No.:</label>
        <input value={data.phoneno} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="phoneno" inputmode="numeric" type="number" class="form-control"  placeholder="1234567890"></input>


        <label  class="form-label">Address:</label>
        <textarea value={data.address} onChange={(e)=>setData({
          ...data,
          [e.target.name]: e.target.value
        })} name="address" class="form-control" placeholder='Address'></textarea>
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
    )
}
