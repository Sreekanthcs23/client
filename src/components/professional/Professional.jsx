import React, { useState, useEffect } from "react";
//import Table from "react-bootstrap/Table";
import Axios from "axios";
import Profrow from "./Profrow";
import Prevrow from "./Prevrow";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import styles from "./Professional.module.css";
//import { HiAcademicCap } from "react-icons/hi2";
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
//import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
//import AdjustIcon from "@mui/icons-material/Adjust";
import Button from "@mui/material/Button";
//import "./CustomDatePicker.css";

function Professional() {
  const [joiningDate, setJoiningDate] = useState("");
  const [joiningDesignation, setJoiningDesignation] = useState("");
  const [dateofProblemDeclaration, setDateofProblemDeclaration] = useState("");
  const [promotionDate, setPromotionDate] = useState("");
  const [promotionDesignation, setPromotionDesignation] = useState("");
  const [appointmentOrder, setAppointmentOrder]=useState(null);
  const [problemDeclaration, setProblemDeclaration]=useState(null);
  const [promotionOrder, setPromotionOrder]=useState(null);
  
  const [type, setType]=useState("");
  const [fromDate, setFromDate]=useState("");
  const [toDate, setToDate]=useState("");
  const [designation, setDesignation]=useState("");
  const [institute, setInstitute]=useState("");
  const [experienceCertificate, setExperienceCertificate]=useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

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
      Axios.get("http://localhost:3001/professional/select1").then((response) => {
        setData1(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/professional/select2").then((response) => {
        setData2(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const submitForm1 = () => {

    toggleVisibility1();

    let appointmentOrder1 = appointmentOrder[0];
    let problemDeclaration1 = problemDeclaration[0];
    let promotionOrder1 = promotionOrder[0];
    
    let formData1 = new FormData();
    let formData1Pdf2 = new FormData(); // for uploading problem declaration only
    let formData1Pdf3 = new FormData(); // for uploading promotion order only

    formData1.append("appointmentOrder", appointmentOrder1);
    formData1Pdf2.append("problemDeclaration", problemDeclaration1);
    formData1Pdf3.append("promotionOrder", promotionOrder1);
    formData1.append("joiningDate", joiningDate);
    formData1.append("joiningDesignation", joiningDesignation);
    formData1.append("dateofProblemDeclaration", dateofProblemDeclaration);
    formData1.append("promotionDate", promotionDate);
    formData1.append("promotionDesignation", promotionDesignation);
    
   // console.log("date" + date);
 
    Axios.post("http://localhost:3001/professional/insert1", formData1, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
    });

    //uploading problem declaration
    Axios.post("http://localhost:3001/professional/insert1Pdf2", formData1Pdf2, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
    });

    //uploading promotion order
    Axios.post("http://localhost:3001/professional/insert1Pdf3", formData1Pdf3, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
    });
  };

  const submitForm2 = () => {
    toggleVisibility2();
    let formData2 = new FormData();
    let certFile = experienceCertificate[0];
    formData2.append("experienceCertificate",certFile);
    formData2.append("type", type );
    formData2.append("fromDate", fromDate );
    formData2.append("toDate", toDate );
    formData2.append("designation", designation); 
    formData2.append("institute", institute );
    console.log("inside submitForm2");
    toggleVisibility2();
   
    Axios.post("http://localhost:3001/professional/insert2", formData2, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      alert("submitted");
    });
  };


  /*const dataeg1 = [
    {
      id: 1,
      joiningDate: "16-08-2015",
      joiningDesignation: "Asst.Prof",
      dateofProblemdeclaration: "16-08-2016",
      promotionDate: "16-08-2017",
      promotionDesignation: "Professor",
      //date_of_acq: "16-08-2020",
      //marks: "9.5",
    }
  ];

  const dataeg2 = [
    {
      id:1,
      type: "Teaching",
      fromDate: "01-08-2012",
      toDate: "30-05-2015",
      designation: "Asst.Prof",
      institute: "GEC Calicut",
    },
    {
      id:2,
      type: "Industry",
      fromDate: "01-08-2008",
      toDate: "30-05-2012",
      designation: "Software Engineer",
      institute: "IBM",
    },

  ];

  */

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
                    joiningDate={item.joining_date}
                    joiningDesignation={item.joining_designation}
                    dateofProblemDeclaration ={item.date_of_problem_declaration } //.toString().slice(0, 10)
                    promotionDate ={item.promotion_date/*.toString().slice(0, 10)*/ }
                    promotionDesignation ={item.promotion_designation}
                    appointmentOrder = {item.appointment_order_link}
                    problemDeclaration = {item.problem_declaration_link}
                    promotionOrder = {item.promotion_order_link}
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
                console.log(item.from_date)
                return(
                <Prevrow
                 key={item.prev_exp_id}
                 type = {item.prof_type}
                 fromDate = {item.from_date}
                 toDate = {item.to_date}
                 designation = {item.designation}
                 institute = {item.institute}
                 experienceCertificate = {item.experience_certificate_link}
                  ></Prevrow>
                );
              })}
          </div>
          < br/>
          </div>          
          )}
        
          {isVisible1 && (
          <div className={styles.edu_form}>
            <h1 className={styles.edu_form_title}>Update details</h1>
            <div className={styles.edu_form_left}>
              <label for="joiningDate">
              <IoCalendarSharp />
                Joining Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="joiningDate"
                selected={joiningDate}
                onChange={(joiningDate) => setJoiningDate(joiningDate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
          
              <label for="joiningDesignation">
                <AccountTreeIcon fontSize="small" /> Joining Designation
              </label>
              <br />
              <input
                type="text"
                id="joiningDesignation"
                onChange={(e) => {
                  setJoiningDesignation(e.target.value);
                }}
              />
              <br />
              
              <label for="dateofProblemDeclaration">
                <IoCalendarSharp fontSize="small" /> Date of Problem Declaration 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="dateofProblemDeclaration"
                selected={dateofProblemDeclaration}
                onChange={(dateofProblemDeclaration) => setDateofProblemDeclaration(dateofProblemDeclaration)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
            </div>
            <div className={styles.edu_form_right}>
              <label for="promotionDate">
                <IoCalendarSharp />
                Promotion Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="promotionDate"
                selected={promotionDate}
                onChange={(promotionDate) => setPromotionDate(promotionDate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
              <label for="promotionDesignation">
              <HiBuildingLibrary />
                Promotion Designation 
              </label>
              <br />
              
              <input
                type="text"
                id="promotionDesignation"
                onChange={(e) => {
                  setPromotionDesignation(e.target.value);
                }}
              />
              <br />
              <label for="appointmentOrder">
                <HiDocumentArrowUp />
                Appointment Order
              </label>
              <input
              type="file"
              name="appointmentOrder"
              accept="application/pdf"
              id="appointmentOrder"
              onChange={(e) => {
                setAppointmentOrder(e.target.files);
              }}
            />
              <br />

              <label for="problemDeclaration">
                <HiDocumentArrowUp />
                Problem Declaration
              </label>
              <input
              type="file"
              name="problemDeclaration"
              accept="application/pdf"
              id="problemDeclaration"
              onChange={(e) => {
                setProblemDeclaration(e.target.files);
              }}
            />
            
              <br />
              <label for="promotionOrder">
                <HiDocumentArrowUp />
                Promotion Order
              </label>
              <input
              type="file"
              name="promotionOrder"
              accept="application/pdf"
              id="promotionOrder"
              onChange={(e) => {
                setPromotionOrder(e.target.files);
              }}
            />
            </div>
            <br />
            <div className={styles.edu_form_button}>
              <Button
                variant="contained"
                color="success"
                
              onClick={submitForm1}
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
              
              <label for="fromDate">
                <IoCalendarSharp fontSize="small" /> From 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="fromDate"
                selected={fromDate}
                onChange={(fromDate) => setFromDate(fromDate)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <br />
      
              <label for="toDate">
                <IoCalendarSharp />
                To Date 
              </label>
              <br />
              <DatePicker
                className={styles.date_input}
                id="toDate"
                selected={toDate}
                onChange={(toDate) => setToDate(toDate)}
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
              <label for="experienceCertificate">
                <HiDocumentArrowUp />
                Experience Certificate
              </label>
             
              <input
              type="file"
              name="experienceCertificate"
              accept="application/pdf"
              id="experienceCertificate"
              onChange={(e) => {
                setExperienceCertificate(e.target.files);
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
