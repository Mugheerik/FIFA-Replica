import { useState } from "react";
import React from "react";
import './forms.css'



function Signin() {


  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  //  // Handling the Username change
  //  const handleUsername = (e) => {
  //   setUsername(e.target.value);
  //   setSubmitted(false);
  // };



  // // Handling the password change
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   setSubmitted(false);
  // };
  const handleChange = (e) => {

    if (e.currentTarget.name === "Username") {
      const newuser = e.target.value;
      console.log(e.target.value);
      setUsername(newuser);

    }
    else if (e.currentTarget.name === "password") {
      const newpassword = e.target.value;
      console.log(e.target.value);
      setPassword(e.target.value);

    }
  }


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {

      alert("Kindly Fill All The Fields");


    } else if (username === 'admin' && password === '12345') {

      alert("Your login was successfull");


    }
    else {

      alert("Invalid Username or Password ")
    }
  };










  return (
    <div className="form">
      <div>
        <h1>SIGN IN</h1>
      </div>



      <form onSubmit={handleSubmit}>
        {/* Labels and inputs for form data */}

        <label className="label">Username</label>
        <input onChange={handleChange} className="input" name="Username"
          value={username} type="text" />

        <label className="label">Password</label>
        <input onChange={handleChange} className="input" name="password"
          value={password} type="password" />

        <button className="btn" type="submit">
          Login
        </button>
      </form>

      {username}
      {password}
    </div>
  );
}
export default Signin;