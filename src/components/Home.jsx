import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
=======
import AccountBoxIcon from "@mui/icons-material/AccountBox";
>>>>>>> 6057eeb63524f9e657e600e2182757405e6cd5e0
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Home.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Linkmui from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

function Home() {
<<<<<<< HEAD
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
                        <button className={styles.gridItem}><Link to="/profile" style={{textDecoration:"none",color: "#474748"}}><AccountBoxIcon className={styles.svg_icons} /><br />Profile</Link></button>
                        <button className={styles.gridItem}><Link to="/professional" style={{textDecoration:"none",color: "#474748"}}><WorkHistoryIcon className={styles.svg_icons} /><br />Professional Experience</Link></button>
                        <button className={styles.gridItem}><Link to="/teaching" style={{textDecoration:"none"}}>Teaching</Link></button>
                        <button className={styles.gridItem}><Link to="/research" style={{textDecoration:"none",color: "#474748"}}>Research</Link></button>
                        <button className={styles.gridItem}>Examination</button>
                        <button className={styles.gridItem}><Link to="/education" style={{textDecoration:"none"}}>Education</Link></button>
                        <button className={styles.gridItem}>7</button>
                        <button className={styles.gridItem}>8</button>
                        <button className={styles.gridItem}>9</button>
                    </div>
                </div>
            </div>
            
=======
  return (
    <div className={styles.home_page}>
      <div className={styles.home_navbar}>
        <Navbar />
      </div>

      <div className={styles.home_sidebar}>
        <Sidebar />
      </div>
      <div className={styles.home_content}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Linkmui
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/home"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Linkmui>
        </Breadcrumbs>
        <div className={styles.gridContainer}>
          <button className={styles.gridItem}>
            <AccountBoxIcon className={styles.svg_icons} />
            <br />
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#474748" }}
            >
              Profile
            </Link>
          </button>
          <button className={styles.gridItem}>
            <Link
              to="/professional"
              style={{ textDecoration: "none", color: "#474748" }}
            >
              Professional
            </Link>
          </button>
          <button className={styles.gridItem}>
            <Link to="/teaching" style={{ textDecoration: "none" }}>
              Teaching
            </Link>
          </button>
          <button className={styles.gridItem}>
            <Link
              to="/research"
              style={{ textDecoration: "none", color: "#474748" }}
            >
              Research
            </Link>
          </button>
          <button className={styles.gridItem}>Examination</button>
          <button className={styles.gridItem}>
            <Link to="/education" style={{ textDecoration: "none" }}>
              Education
            </Link>
          </button>
          <button className={styles.gridItem}>7</button>
          <button className={styles.gridItem}>8</button>
          <button className={styles.gridItem}>9</button>
>>>>>>> 6057eeb63524f9e657e600e2182757405e6cd5e0
        </div>
      </div>
    </div>
  );
}

export default Home;
