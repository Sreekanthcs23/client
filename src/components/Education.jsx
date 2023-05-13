import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Edurow from "./Edurow";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Education.module.css";
import { HiAcademicCap } from "react-icons/hi2";
import { HiBuildingLibrary } from "react-icons/hi2";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { IoCalendarSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AdjustIcon from "@mui/icons-material/Adjust";
import Button from "@mui/material/Button";
//import "./CustomDatePicker.css";

function Education() {
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [university, setUniversity] = useState("");
  const [date, setDate] = useState("");
  const [marks, setMarks] = useState("");
  const [data, setData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/education/select").then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitForm = () => {
    toggleVisibilty();
    Axios.post("http://localhost:3001/education/insert", {
      degree: degree,
      branch: branch,
      specialization: specialization,
      university: university,
      date: date,
      marks: marks,
    }).then(() => {
      alert("submitted");
    });
  };

  const data1 = [
    {
      id: 1,
      degree: "B-Tech",
      branch: "CSE",
      specialization: "Machine learninng",
      university: "IIT",
      college: "IIT Bombay",
      date_of_acq: "16-08-2020",
      marks: "9.5",
    },
    {
      id: 2,
      degree: "M-Tech",
      branch: "CSE",
      specialization: "Machine learninng",
      university: "IIT",
      college: "IIT Bombay",
      date_of_acq: "16-08-2020",
      marks: "9.5",
    },
    {
      id: 3,
      degree: "Phd",
      branch: "CSE",
      specialization: "Machine learninng",
      university: "IIT",
      college: "IIT Bombay",
      date_of_acq: "16-08-2020",
      marks: "9.5",
    },
  ];

  return (
    <div className={styles.edu_page}>
      <div className={styles.edu_navbar}>
        <Navbar />
      </div>

      <div className={styles.edu_sidebar}>
        <Sidebar />
      </div>

      <div className={styles.edu_content}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/home"
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
            Education
          </Link>
        </Breadcrumbs>

        {!isVisible && (
          <div className={styles.edu_div}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={toggleVisibilty}
            >
              UPDATE
            </Button>
            <div className={styles.edu_list}>
              {data1.map((item) => {
                return (
                  <Edurow
                    key={item.id}
                    degree={item.degree}
                    branch={item.branch}
                    specialization={item.specialization}
                    university={item.university}
                    college={item.college}
                    date={item.date_of_acq.toString().slice(0, 10)}
                    marks={item.marks}
                  ></Edurow>
                );
              })}
            </div>
          </div>
        )}

        {isVisible && (
          <div className={styles.edu_form}>
            <h1 className={styles.edu_form_title}>Update details</h1>
            <div className={styles.edu_form_left}>
              <label for="degree">
                <HiAcademicCap />
                Degree
              </label>
              <br />
              <input
                type="text"
                id="degree"
                onChange={(e) => {
                  setDegree(e.target.value);
                }}
              />
              <br />
              <label for="branch">
                <AccountTreeIcon fontSize="small" /> Branch
              </label>
              <br />
              <input
                type="text"
                id="branch"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
              <br />
              <label for="specialization">
                <AdjustIcon fontSize="small" /> Specialization
              </label>
              <br />
              <input
                type="text"
                id="specialization"
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
              />
              <br />
            </div>
            <div className={styles.edu_form_right}>
              <label for="university">
                <HiBuildingLibrary />
                University
              </label>
              <br />
              <input
                type="text"
                id="university"
                onChange={(e) => {
                  setUniversity(e.target.value);
                }}
              />
              <br />
              <label for="date">
                <IoCalendarSharp />
                Date of acquiring
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="date"
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
              <label for="marks">
                <ScoreboardIcon fontSize="small" />
                Marks
              </label>
              <br />
              <input
                type="text"
                id="marks"
                onChange={(e) => {
                  setMarks(e.target.value);
                }}
              />
              <br />
              <label for="certificate">
                <HiDocumentArrowUp />
                Certificate
              </label>
              <br />
              <input type="file" id="certificate" />
            </div>
            <br />
            <div className={styles.edu_form_button}>
              <Button
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
                onClick={submitForm}
              >
                ADD
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
