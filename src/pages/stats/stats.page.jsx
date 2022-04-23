import React from 'react';
import { Button } from '@mui/material';

import './stats.css';

function Stats() {
  return (
    <div className="stats-container">
      <Button className="stats-back" variant="contained">
        Back
      </Button>
      <div className="stats-content">
        <h1>Stats</h1>
        <div className="photo">Photo</div>
        <div className="results-box">
          <div className="result-item">
            <h3>Voted</h3>
            <div className="percent">88%</div>
          </div>
          <div className="result-item">
            <h3>For you</h3>
            <div className="percent">40%</div>
          </div>
          <div className="result-item">
            <h3>Leading</h3>
            <div className="percent">50%</div>
          </div>
          <div className="result-item">
            <h3>Didnt vote</h3>
            <div className="percent">12%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
