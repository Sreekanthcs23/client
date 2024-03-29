import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Report.module.css";
import { HiAcademicCap } from "react-icons/hi2";
import { HiBuildingLibrary } from "react-icons/hi2";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { IoCalendarSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
//import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function Report() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/consultancy/select", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitForm = () => {
    let axiosConfig = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };

    toggleVisibilty();

    Axios.post(
      "http://localhost:3001/adduser/insert",
      { username: username, password: password, type: type },
      axiosConfig
    ).then(() => {
      alert("submitted");
    });
  };

  const data1 = [
    {
      id: 1,
      agency: "ABC",
      amount: 10000,
      year: 2001,
    },
    {
      id: 2,
      agency: "DEF",
      amount: 20000,
      year: 2005,
    },
    {
      id: 3,
      agency: "GHI",
      amount: 25000,
      year: 2010,
    },
  ];
  return (
    <div className={styles.addu_content}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/research/consultancy"
        >
          Consultancy
        </Link>
      </Breadcrumbs>

      {!isVisible && (
        <div className={styles.addu_div}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={toggleVisibilty}
            style={{ width: "150px" }}
          >
            ADD
          </Button>
          <div className={styles.addu_list}>Report</div>
        </div>
      )}

      {isVisible && (
        <div className={styles.addu_form}>
          <h1 className={styles.addu_form_title}>Enter Details</h1>

          <label for="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label for="Password">Password</label>
          <br />
          <input
            type="text"
            id="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <label for="type">Type</label>
          <br />
          <input
            type="text"
            id="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <br />
          <div className={styles.addu_form_button}>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={submitForm}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;
