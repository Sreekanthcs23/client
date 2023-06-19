import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Publications.module.css";
import Publrow from "./Publrow";
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

function Publications() {
    const [type,setType] = useState("");
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    const [startdate,setStartDate] = useState("");
    const [enddate,setEndDate] = useState("");
    const [date,setDate] = useState("");
    const [certFile, setCertFile] = useState(null);
    const [data,setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
    };

    useEffect(() => {
        try {
          Axios.get("http://localhost:3001/publication/select", {
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
        let cert = certFile[0];
        let formData = new FormData();
        formData.append("pdffile", cert);
        formData.append("type", selectedOption);
        formData.append("title", title);
        formData.append("name", name);
        formData.append("startdate", startdate);
        formData.append("enddate", enddate);
        formData.append("date", date);
    
        let axiosConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        toggleVisibilty();
    
        Axios.post(
          "http://localhost:3001/publication/insert",
          formData,
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };

    const data1 = [
        {
          id: 1,
          type: "A",
          title: "DR",
          name: "AAAA",
          startdate: "16-08-2020",
          enddate: "6-01-2022",
          date: "7-05-2023",
        },
        {
          id: 2,
          type: "B",
          title: "RD",
          name: "BBBB",
          startdate: "16-08-2020",
          enddate: "6-01-2022",
          date: "7-05-2023",
        },
        {
          id: 3,
          type: "C",
          title: "CD",
          name: "CCCC",
          startdate: "16-08-2020",
          enddate: "6-01-2022",
          date: "7-05-2023",
        },
    ];
    return (
        <div className={styles.publ_content}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/research/publications"
                >
                    Publications
                </Link>
            </Breadcrumbs>

            {!isVisible && (
                <div className={styles.publ_div}>
                 <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={toggleVisibilty}
                    style={{ width: '150px' }}
                 >
                UPDATE
                </Button>
                <div className={styles.publ_list}>
                    {data.map((item) => {
                    return (
                        <Publrow
                        key={item.idpublication}
                        type={item.publ_type}
                        title={item.title}
                        name={item.publ_name}
                        startdate={item.sdate.toString().slice(0, 11)}
                        enddate={item.edate.toString().slice(0, 11)}
                        date={item.publ_date.toString().slice(0, 11)}
                        certlink={item.certi_link}
                        ></Publrow>
                    );
                    })}
                </div>
            </div>
           )}

            {isVisible && (
                <div className={styles.publ_form}>
                <h1 className={styles.publ_form_title}>Update Details</h1>
                
                <label for="type">Type</label><br />  
                <select value={selectedOption} onChange={handleOptionChange} className={styles.select_box}>
                    <option value="">Select an option</option>
                    <option value="JOURNAL">JOURNAL</option>
                    <option value="CONFERENCE">CONFERENCE</option>
                    <option value="PATENT">PATENT</option>
                    <option value="CONFERENCE PROCEEDING">CONFERENCE PROCEEDING</option>
                    <option value="POSTER">POSTER</option>
                </select>
                <br /> 
                <label for="title">Title</label><br />
                <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}}/><br />            
                <label for="name">Name of Publication</label><br />
                <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />        
                <label for="period">Start Date</label>
                <DatePicker
                    className="custom-datepicker"
                    id="startDate"
                    selected={startdate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                /><br />
                <label for="period">End Date</label>
                <DatePicker
                    className="custom-datepicker"
                    id="endDate"
                    selected={enddate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                /><br />
                <label for="date"><IoCalendarSharp/>Date Of Publication</label>
                <DatePicker
                    className="custom-datepicker"
                    id="date"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <label for="certificate">
                   <HiDocumentArrowUp />
                   Certificate
                </label>
                <br />
                <input
                    type="file"
                    name="pdffile"
                    accept="application/pdf"
                    id="pdffile"
                    onChange={(e) => {
                        setCertFile(e.target.files);
                    }}
                />
                <br />
                <div className={styles.publ_form_button}>
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
    )
}

export default Publications;

