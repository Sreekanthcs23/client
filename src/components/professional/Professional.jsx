import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Profrow from "./Profrow";
import Prevrow from "./Prevrow";
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
  const [appointmentorder, setAppointmentorder]=useState(null);
  const [problemdeclaration, setProblemdeclaration]=useState(null);
  const [promotionorder, setPromotionorder]=useState(null);
  
  const [type, setType]=useState("");
  const [fromdate, setFromdate]=useState("");
  const [todate, setTodate]=useState("");
  const [designation, setDesignation]=useState("");
  const [institute, setInstitute]=useState("");
  const [experiencecertificate, setExperiencecertificate]=useState(null);
  const [data, setData] = useState([]);

  const [isVisible1, setIsVisibile1] = useState(false);
  const [isVisible2, setIsVisibile2] = useState(false);

  function toggleVisibility1() {
    setIsVisibile1(!isVisible1);
  }
  function toggleVisibility2() {
    setIsVisibile2(!isVisible2);
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

    toggleVisibility1();

    let appointmentorder1 = appointmentorder;
    let problemdeclaration1 = problemdeclaration;
    let promotionorder1 = promotionorder;
    let formData = new FormData();

    formData.append("appointmentorder", appointmentorder);
    formData.append("problemdeclaration", problemdeclaration );
    formData.append("promotionorder", promotionorder );
    formData.append("joiningdate", joiningdate );
    formData.append("joiningdesignation", joiningdesignation );
    formData.append("dateofproblemdeclaration", dateofproblemdeclaration );
    formData.append("promotiondate", promotiondate );
    formData.append("promotiondesignation", promotiondesignation );
    
   // console.log("date" + date);
 
    Axios.post("http://localhost:3001/professional/insert", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
    });
  };

  const submitForm2 = () => {
    toggleVisibility2();
    let formData2 = new FormData();
    formData2.append("type", type );
    formData2.append("fromdate", fromdate );
    formData2.append("todate", todate );
    formData2.append("designation", designation); 
    formData2.append("institute", institute );

    toggleVisibility2();
    
    Axios.post("http://localhost:3001/professional/insert2", formData2, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
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

  const data2 = [
    {
      id:1,
      type: "Teaching",
      fromdate: "01-08-2012",
      todate: "30-05-2015",
      designation: "Asst.Prof",
      institute: "GEC Calicut",
    },
    {
      id:2,
      type: "Industry",
      fromdate: "01-08-2008",
      todate: "30-05-2012",
      designation: "Software Engineer",
      institute: "IBM",
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
            href="/professional"
          >
            Professional Experience
          </Link>
        </Breadcrumbs>

        {(!isVisible1 && !isVisible2) && (
          <div className={styles.edu_div}>
            <h2 >CURRENT INSTITUTION</h2>
            <br />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={toggleVisibility1}
            >
              UPDATE
            </Button>
            <div className={styles.edu_list}>

              {data1.map((item) => {
                return (
                  <Profrow
                    key={item.cur_ins_id}
                    joiningdate={item.joiningdate.toString().slice(0, 10)}
                    joiningdesignation={item.joiningdesignation}
                    dateofproblemdeclaration ={item.dateofproblemdeclaration.toString().slice(0, 10) }
                    promotiondate ={item.promotiondate.toString().slice(0, 10) }
                    promotiondesignation ={item.promotiondesignation }
                  ></Profrow>
                );
              })}

              <h2 >PREVIOUS EXPERIENCE</h2>
              <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={toggleVisibility2}
            >
              ADD
            </Button>
            </div>
            <div className={styles.edu_list}>
              {data2.map((item) => {
                return(
                <Prevrow
                 key={item.id}
                 type = {item.type}
                 fromdate = {item.fromdate}
                 todate = {item.todate}
                 designation = {item.designation}
                 institute = {item.institute}
                  ></Prevrow>
                );
              })}
          </div>
          </div>
          )}
        
          {isVisible1 && (
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
          
              <label for="joiningdesignation">
                <AccountTreeIcon fontSize="small" /> Joining Designation
              </label>
              <br />
              <input
                type="text"
                id="joiningdesignation"
                onChange={(e) => {
                  setJoiningdesignation(e.target.value);
                }}
              />
              <br />
              
              <label for="dateofproblemdeclaration">
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
              <label for="promotiondate">
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
              <label for="promotiondesignation">
              <HiBuildingLibrary />
                Promotion Designation 
              </label>
              <br />
              
              <input
                type="text"
                id="promotiondesignation"
                onChange={(e) => {
                  setPromotiondesignation(e.target.value);
                }}
              />
              <br />
              <label for="appointmentorder">
                <HiDocumentArrowUp />
                Appointment Order
              </label>
              <input
              type="file"
              name="appointmentorder"
              accept="application/pdf"
              id="appointmentorder"
              onChange={(e) => {
                setAppointmentorder(e.target.files);
              }}
            />
              <br />

              <label for="problemdeclaration">
                <HiDocumentArrowUp />
                Problem Declaration
              </label>
              <input
              type="file"
              name="problemdeclaration"
              accept="application/pdf"
              id="problemdeclaration"
              onChange={(e) => {
                setProblemdeclaration(e.target.files);
              }}
            />
            
              <br />
              <label for="promotionorder">
                <HiDocumentArrowUp />
                Promotion Order
              </label>
              <input
              type="file"
              name="promotionorder"
              accept="application/pdf"
              id="promotionorder"
              onChange={(e) => {
                setPromotionorder(e.target.files);
              }}
            />
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
        

        {isVisible2 && (
          <div className={styles.edu_form}>
            <h1 className={styles.edu_form_title}>Add Details</h1>
             
              <label for="type">
                <AccountTreeIcon fontSize="small" /> Type
              </label>
              <br />
              <input
                type="text"
                id="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <br />
              
              <label for="fromdate">
                <IoCalendarSharp fontSize="small" /> From 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="fromdate"
                selected={fromdate}
                onChange={(fromdate) => setFromdate(fromdate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
      
              <label for="todate">
                <IoCalendarSharp />
                To Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="todate"
                selected={todate}
                onChange={(todate) => setTodate(todate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
              <label for="designation">
              <HiBuildingLibrary />
                Designation
              </label>
              <br />
              
              <input
                type="text"
                id="designation"
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              />
              <br />
              <label for="institute">
              <HiBuildingLibrary />
                Institute
              </label>
              <br />
              
              <input
                type="text"
                id="institute"
                onChange={(e) => {
                  setInstitute(e.target.value);
                }}
              />
              <br />
              <label for="experiencecertificate">
                <HiDocumentArrowUp />
                Experience Certificate
              </label>
             
              <input
              type="file"
              name="experiencecertificate"
              accept="application/pdf"
              id="experiencecertificate"
              onChange={(e) => {
                setExperiencecertificate(e.target.files);
              }}
            />
              <br />
          
            <br />
            <div className={styles.edu_form_button}>
              <Button
                variant="contained"
                color="success"
                
                onClick={submitForm2}
              >< AddIcon size="small"/>
               ADD
              </Button>
           
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Professional;
