import { useState } from "react";
import React from "react";
import './forms.css'

function Forms()
{
    const [name, setName] =useState('');
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
     // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
   // Handling the Username change
   const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === ''  || username === '' || email === '' || password === '') {
      setError(true);
      alert(  "Kindly Fill All The Fields");
    
    } else {
      setSubmitted(true);
      alert("Your Registration was successfull");
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
       
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
      
      </div>
    );
  };

   
  return (
    <div className="form">
      <div>
        <h1>SIGN UP</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
        <label className="label">Username</label>
        <input onChange={handleUsername} className="input"
          value={username} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn btn success" type="submit">
          Submit
        </button>
      </form>

      {username};
      {name};
      {email};
      {password};
    </div>
  );
}
export default Forms;