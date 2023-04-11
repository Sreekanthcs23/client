import React from 'react';
import styles from "./Personal.module.css";
import {Button} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

function Personal() {
    return (
        <div className={styles.personPage}>
            <h1>My Profile</h1>
      <img src="./components/profile.jpg" alt="Myimage" width="200" />
      <Button EduIcon={<SchoolIcon/>}variant="outlined" color="secondary" onClick={() => { window.location.href = '/education' }}>EDUCATION</Button>
      <Button variant="outlined" onClick={() => { window.location.href = '/awards' }}>AWARDS</Button>
      <Button variant="outlined" onClick={() => { window.location.href = '/publications' }}>PUBLICATIONS</Button>
        </div>
    )
}

export default Personal;