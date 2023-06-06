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
import { RadioGroup } from "react-radio-buttons";
import { RadioButton } from "react-radio-buttons";

function Publications() {
    const [type,setType] = useState("");
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [date,setDate] = useState("");
    const [data,setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    function onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });        
    }
    useEffect(() => {
      try{
        Axios.get('http://localhost:3001/publications/select').then((response) => {
            setData(response.data);
            console.log(response.data);
        });
      } catch (e) {
        console.log(e);
      }  
    }, []);

    const submitForm = () => {
        toggleVisibilty();
        Axios.post('http://localhost:3001/publications/insert',{
            type:type,
            title:title,
            name:name,
            startDate:startDate,
            endDate:endDate,
            date:date
        }).then(() => { 
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
                    {data1.map((item) => {
                    return (
                        <Publrow
                        type={item.type}
                        title={item.title}
                        name={item.name}
                        startdate={item.startdate}
                        enddate={item.enddate}
                        date={item.date}
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
                <label>
                <input
                type="radio"
                value="JOURNAL"
                checked={this.state.selectedOption === "JOURNAL"}
                onChange={onValueChange}
                />
                JOURNAL
                </label> 
                <label>
                <input
                type="radio"
                value="CONFERENCE"
                checked={this.state.selectedOption === "CONFERENCE"}
                onChange={onValueChange}
                />
                CONFERENCE
                </label> 
                <label>
                <input
                type="radio"
                value="PATENT"
                checked={this.state.selectedOption === "PATENT"}
                onChange={onValueChange}
                />
                PATENT
                </label> 
                <label>
                <input
                type="radio"
                value="PROCEEDING"
                checked={this.state.selectedOption === "PROCEEDING"}
                onChange={onValueChange}
                />
                CONFERENCE PROCEEDING
                </label>  
                <label>
                <input
                type="radio"
                value="POSTER"
                checked={this.state.selectedOption === "POSTER"}
                onChange={onValueChange}
                />
                POSTER
                </label>
                <label for="title">TITLE</label>
                <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}}/><br />            
                <label for="name">Name of Publication</label>
                <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />        
                <label for="period">START DATE</label>
                <DatePicker
                    className="custom-datepicker"
                    id="startDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                /><br />
                <label for="period">END DATE</label>
                <DatePicker
                    className="custom-datepicker"
                    id="endDate"
                    selected={endDate}
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
                <input type="file" id="certificate" />
                <br />
                <div className={styles.cons_form_button}>
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

