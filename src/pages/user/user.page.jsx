import React from 'react';
import { TextField, Button } from '@mui/material';

import './user.css';

function UserProfile() {
  return (
    <div className="user-profile-container">
      <Button className="user-profile-back" variant="contained">
        Back
      </Button>
      <h1 className="user-profile-heading">User profile</h1>
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
          <div className="election-item">
            <div>Student Council election</div>
            <div className="user-vote-status user-vote-status-1">Voted</div>
          </div>
          <div className="election-item">
            <div>Student Council election</div>
            <div className="user-vote-status user-vote-status-1">Voted</div>
          </div>
          <div className="election-item">
            <div>Student Council election</div>
            <div className="user-vote-status user-vote-status-1">Voted</div>
          </div>{' '}
          <div className="election-item">
            <div>Student Council election</div>
            <div className="user-vote-status user-vote-status-1">Voted</div>
          </div>
          <div className="election-item">
            <div>Student Council election</div>
            <div className="user-vote-status user-vote-status-2">Not yet</div>
          </div>
          <Button variant="contained">Click here to vote</Button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
