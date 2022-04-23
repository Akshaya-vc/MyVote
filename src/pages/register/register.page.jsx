import React from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic" label="Last name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile number" variant="outlined" />
      <TextField id="outlined-basic" label="Mail id" variant="outlined" />
      <TextField id="outlined-basic" label="Aadhar number" variant="outlined" />
      <Link to="/user">
        <Button variant="contained">Submit</Button>
      </Link>
    </div>
  );
}

export default Register;
