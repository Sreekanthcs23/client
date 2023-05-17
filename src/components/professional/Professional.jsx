import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Profrow from "./Profrow";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import styles from "./Professional.module.css";
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

function Professional() {
  const [joiningdate, setJoiningdate] = useState("");
  const [joiningdesignation, setJoiningdesignation] = useState("");
  const [dateofproblemdeclaration, setDateofproblemdeclaration] = useState("");
  const [promotiondate, setPromotiondate] = useState("");
  const [promotiondesignation, setPromotiondesignation] = useState("");
  const[appoinmentorder, setAppoinmentorder]=useState("");
  const[problemdeclaration, setProblemdeclaration]=useState("");
  const[promotionorder, setPromotionorder]=useState("");
  
  const [marks, setMarks] = useState("");
  const [data, setData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/professional/select").then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitForm = () => {
    toggleVisibilty();
    Axios.post("http://localhost:3001/professional/insert", {
      joiningdate: joiningdate,
      joiningdesignation: joiningdesignation,
      dateofproblemdeclaration: dateofproblemdeclaration,
      promotiondate: promotiondate,
      promotiondesignation: promotiondesignation,
     // marks: marks,
    }).then(() => {
      alert("Submitted");
    });
  };

  const data1 = [
    {
      id: 1,
      joiningdate: "16-08-2015",
      joiningdesignation: "Asst.Prof",
      dateofproblemdeclaration: "16-08-2016",
      promotiondate: "16-08-2017",
      promotiondesignation: "Professor",
      //date_of_acq: "16-08-2020",
      //marks: "9.5",
    }
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
            href="/professional"
          >
            Professional Experience
          </Link>
        </Breadcrumbs>

        {!isVisible && (
          <div className={styles.edu_div}>
            <h2 >CURRENT INSTITUITION</h2>
            <br />
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
                  <Profrow
                    key={item.id}
                    joiningdate={item.joiningdate.toString().slice(0, 10)}
                    joiningdesignation={item.joiningdesignation}
                    dateofproblemdeclaration ={item.dateofproblemdeclaration.toString().slice(0, 10) }
                    promotiondate ={item.promotiondate.toString().slice(0, 10) }
                    promotiondesignation ={item.promotiondesignation }
                    //date={item.date_of_acq.toString().slice(0, 10)}
                    //marks={item.marks}
                  ></Profrow>
                );
              })}
            </div>
          </div>
        )}

        {isVisible && (
          <div className={styles.edu_form}>
            <h1 className={styles.edu_form_title}>Update details</h1>
            <div className={styles.edu_form_left}>
              <label for="joiningdate">
              <IoCalendarSharp />
                Joining Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="joiningdate"
                selected={joiningdate}
                onChange={(joiningdate) => setJoiningdate(joiningdate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
          
              <label for="joiningdesignation ">
                <AccountTreeIcon fontSize="small" /> Joining Designation
              </label>
              <br />
              <input
                type="text"
                id="joiningdesignation "
                onChange={(e) => {
                  setJoiningdesignation(e.target.value);
                }}
              />
              <br />
              
              <label for="dateofproblemdeclaration ">
                <IoCalendarSharp fontSize="small" /> Date of Problem Declaration 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="dateofproblemdeclaration"
                selected={dateofproblemdeclaration}
                onChange={(dateofproblemdeclaration) => setDateofproblemdeclaration(dateofproblemdeclaration)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
            </div>
            <div className={styles.edu_form_right}>
              <label for="promotiondate ">
                <IoCalendarSharp />
                Promotion Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="promotiondate"
                selected={promotiondate}
                onChange={(promotiondate) => setPromotiondate(promotiondate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
              <label for="promotiondesignation ">
              <HiBuildingLibrary />
                Promotion Designation 
              </label>
              <br />
              
              <input
                type="text"
                id="promotiondesignation "
                onChange={(e) => {
                  setPromotiondesignation(e.target.value);
                }}
              />
              <br />
              <label for="appoinmentorder">
                <HiDocumentArrowUp />
                Appoinment Order
              </label>
             
              <input type="file" id="appoinmentorder" />
              <br />
              <label for="problemdeclaration">
                <HiDocumentArrowUp />
                Problem Declaration
              </label>
             
              <input type="file" id="problemdeclaration" />
              <br />
              <label for="promotionorder">
                <HiDocumentArrowUp />
                Promotion Order
              </label>
             
              <input type="file" id="promotionorder" />
            </div>
            <br />
            <div className={styles.edu_form_button}>
              <Button
                variant="contained"
                color="success"
                
                onClick={submitForm}
              >
               UPDATE
              </Button>
           
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Professional;
