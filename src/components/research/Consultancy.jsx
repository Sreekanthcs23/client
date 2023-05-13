import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./Consultancy.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
//import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function Consultancy() {
    const [agency,setAgency] = useState("");
    const [amount,setAmount] = useState("");
    const [year,setYear] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/consultancy/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/consultancy',{
            agency:agency,
            amount:amount,
            year:year
        }).then(() => { alert("submitted") });
    } 

    return (
        <div className={styles.con_page}>

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
                    Consultancy
                </Link>
            </Breadcrumbs>

            <div className={styles.con_parent}>
                <div className={styles.left}>
                    <div className="form">
                        <label for="agency">Agency</label>
                        <input type="text" id="agency" onChange={(e) => {setAgency(e.target.value)}} /><br />
                        <label for="year">Year</label>
                        <input type="text" id="year" onChange={(e) => {setYear(e.target.value)}} /><br />
                        <label for="amount">Amount</label>
                        <input type="text" id="amount" onChange={(e) => {setAmount(e.target.value)}} /><br />
                        <br/>
                        <button onClick={submitForm}>Submit</button>
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

export default Consultancy;