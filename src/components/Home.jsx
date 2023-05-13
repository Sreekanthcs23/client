import React from "react";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Home.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Linkmui from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

function Home() {
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
        </div>
      </div>
    </div>
  );
}

export default Home;
