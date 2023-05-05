import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#">Logo</a>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.gridContainer}>
                <button className={styles.gridItem}><Link to="/personal">Personal</Link></button>
                <button className={styles.gridItem}><Link to="/professional">Professional</Link></button>
                <button className={styles.gridItem}>Teaching</button>
                <button className={styles.gridItem}>Research</button>
                <button className={styles.gridItem}>Examination</button>
                <button className={styles.gridItem}>6</button>
                <button className={styles.gridItem}>7</button>
                <button className={styles.gridItem}>8</button>
                <button className={styles.gridItem}>9</button>
            </div>
        </div>
        
    )
}

export default Home;