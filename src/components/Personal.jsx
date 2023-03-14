import React from 'react';
import "./Personal.css";

function Personal() {
    return (
        <div className="Person-page">
            <h1>My Profile</h1>
      <img src="./components/profile.jpg" alt="Myimage" width="200" />
      <button onClick={() => { window.location.href = '/education' }}>EDUCATION</button>
      <button onClick={() => { window.location.href = '/awards' }}>AWARDS</button>
      <button onClick={() => { window.location.href = '/publications' }}>PUBLICATIONS</button>
        </div>
    )
}

export default Personal;