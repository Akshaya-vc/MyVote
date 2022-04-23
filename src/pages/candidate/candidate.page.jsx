import React from 'react';
import { TextField, Button } from '@mui/material';

import './candidate.css';

function CandidateProfile() {
  return (
    <div className="user-profile-container">
      <Button className="user-profile-back" variant="contained">
        Back
      </Button>
      <h1 className="user-profile-heading">Candidate profile</h1>
      <div className="user-profile-content">
        <div className="user-left">
          <div className="photo">Photo</div>
          <div className="user-inner-field">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Mobile number"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Address" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Mobile number"
              variant="outlined"
            />
            <Button variant="contained">Logout</Button>
          </div>
        </div>
        <div className="user-right">
          <h3>Elections that you are participating</h3>
          <div className="election-item">
            <div>Student Council election</div>
            <Button variant="contained">Check stats</Button>
          </div>
          <div className="election-item">
            <div>Student Council election</div>
            <Button variant="contained">Check stats</Button>
          </div>
          <div className="election-item">
            <div>Student Council election</div>
            <Button variant="contained">Check stats</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
