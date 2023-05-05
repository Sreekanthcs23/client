import React from "react";
import { Link } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Home.module.css";

function Home() {
    return (
        <div>
            <div className={styles.home_navbar}>
                <Navbar />
            </div>
            <div className={styles.home_parent}>
                <div className={styles.home_left}>
                    <Sidebar />
                </div>
                <div className={styles.home_right}>
                    <div className={styles.gridContainer}>
                        <button className={styles.gridItem}><AccountBoxIcon className={styles.svg_icons} /><br /><Link to="/profile" style={{textDecoration:"none",color: "#474748"}}>Profile</Link></button>
                        <button className={styles.gridItem}><Link to="/professional" style={{textDecoration:"none",color: "#474748"}}>Professional</Link></button>
                        <button className={styles.gridItem}><Link to="/teaching" style={{textDecoration:"none"}}>Teaching</Link></button>
                        <button className={styles.gridItem}>Research</button>
                        <button className={styles.gridItem}>Examination</button>
                        <button className={styles.gridItem}><Link to="/education" style={{textDecoration:"none"}}>Education</Link></button>
                        <button className={styles.gridItem}>7</button>
                        <button className={styles.gridItem}>8</button>
                        <button className={styles.gridItem}>9</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Home;