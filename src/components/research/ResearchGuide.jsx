import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./ResearchGuide.module.css";
import Resguidrow from "./Resguidrow";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
/*import "./CustomDatePicker.css";*/

function ResearchGuide() {
    const [name,setName] = useState("");
    const [date,setDate] = useState("");//
    const [area,setArea] = useState("");
    const [topic,setTopic] = useState("");
    const [publication,setPublication] = useState("");
    const [data,setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        try{
          Axios.get('http://localhost:3001/researchguide/select').then((response) => {
              setData(response.data);
              console.log(response.data);
          });
        } catch (e) {
          console.log(e);
        }  
      }, []);

    const submitForm = () => {
        toggleVisibilty();
        Axios.post('http://localhost:3001/researchguide/insert',{
            name:name,
            date:date,
            area:area,
            topic:topic,
            publication:publication
        }).then(() => { alert("submitted") });
    } 
    const data1 = [
        {
          id: 1,
          name: "AAAA",
          date: "7-05-2023",
          area: "A",
          topic: "DR",
          publication: "kk",
        },
        {
          id: 2,
          name: "BBBB",
          date: "16-08-2020",
          area: "BA",
          topic: "OP",
          publication: "HI",
        },
        {
          id: 3,
          name: "CCCC",
          date: "6-01-2022",
          area: "C",
          topic: "RD",
          publication: "GGGG",
        },
    ];
    return (
        <div className={styles.resguid_content}>
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
                    href="/research/researchguide"
                >
                    Research Guide
                </Link>
            </Breadcrumbs>
           
            {!isVisible && (
                <div className={styles.resguid_div}>
                 <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={toggleVisibilty}
                    style={{ width: '150px' }}
                 >
                UPDATE
                </Button>
                <div className={styles.resguid_list}>
                    {data1.map((item) => {
                    return (
                        <Resguidrow
                        name={item.name}
                        date={item.date}
                        area={item.area}
                        topic={item.topic}
                        publication={item.publication}
                        ></Resguidrow>
                    );
                    })}
                </div>
            </div>
           )}
            {isVisible && (
                <div className={styles.resguid_form}>
                <h1 className={styles.resguid_form_title}>Update Details</h1>
                
                <label for="name">Name of Publication</label><br />
                <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />                    
                <label for="date"><IoCalendarSharp/>Date Of Publication</label><br />
                <DatePicker
                    className="custom-datepicker"
                    id="date"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                /><br />
                <label for="area">Area</label><br />
                <input type="text" id="area" onChange={(e) => {setArea(e.target.value)}}/><br />
                <label for="topic">Topic</label><br />
                <input type="text" id="topic" onChange={(e) => {setTopic(e.target.value)}}/><br />
                <label for="publication">Publication</label><br />
                <input type="text" id="publication" onChange={(e) => {setPublication(e.target.value)}}/><br />
                <div className={styles.resguid_form_button}>
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

export default ResearchGuide;