import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./ResearchGuide.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
/*import "./CustomDatePicker.css";*/

function ResearchGuide() {
    const [name,setName] = useState("");
    const [date,setDate] = useState("");
    const [area,setArea] = useState("");
    const [topic,setTopic] = useState("");
    const [publication,setPublication] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/researchguide/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/researchguide',{
            name:name,
            date:date,
            area:area,
            topic:topic,
            publication:publication
        }).then(() => { alert("submitted") });
    } 

    return (
        <div className={styles.resguid_page}>
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
                    href="/research/consultancy"
                >
                    Research Guide
                </Link>
            </Breadcrumbs>

            <div className={styles.resguid_parent}>
                <div className={styles.left}>
                    <div className="form">
                        <label for="name">Scholar Name</label>
                        <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />
                        <label for="date"><IoCalendarSharp/>Date Of Joining</label>
                        <DatePicker
                            className="custom-datepicker"
                            id="date"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                        <label for="area">Area</label>
                        <input type="text" id="area" onChange={(e) => {setArea(e.target.value)}} /><br />
                        <label for="topic">Topic</label>
                        <input type="text" id="topic" onChange={(e) => {setTopic(e.target.value)}} /><br />
                        <label for="publication">Publication</label>
                        <input type="text" id="publication" onChange={(e) => {setPublication(e.target.value)}} /><br /><br/>
                      
                        <button onClick={submitForm}>Add</button>
                    </div>
                </div>
            
                {/*<div className={styles.right}>
                    <h2>Degrees</h2>
                    <table>
                        <tr>
                            <th>Degree</th>
                            <th>Branch</th>
                            <th>Specialization</th>
                            <th>University</th>
                            <th>Date of acquiring</th>
                            <th>Marks</th>
                        </tr>
                        {data.map((item => {
                            return (<tr>
                                <td>{item.degree}</td>
                                <td>{item.branch}</td>
                                <td>{item.specialization}</td>
                                <td>{item.university}</td>
                                <td>{item.dateofacq.toString().slice(0,10)}</td>
                                <td>{item.marks}</td>
                            </tr>)
                        }))}
                    </table>
                    </div>*/}
            </div>
            
        </div>
    )
}

export default ResearchGuide;