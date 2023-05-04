import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Home.module.css";

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.gridContainer}>
                <button className={styles.gridItem}><Link to="/profile">Profile</Link></button>
                <button className={styles.gridItem}><Link to="/professional">Professional</Link></button>
                <button className={styles.gridItem}>Teaching</button>
                <button className={styles.gridItem}>Research</button>
                <button className={styles.gridItem}>Examination</button>
                <button className={styles.gridItem}><Link to="/education">Education</Link></button>
                <button className={styles.gridItem}>7</button>
                <button className={styles.gridItem}>8</button>
                <button className={styles.gridItem}>9</button>
            </div>
        </div>
        
    )
}

export default Home;