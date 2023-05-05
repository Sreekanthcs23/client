import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./FundedProject.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function FundedProject() {
    const [name,setName] = useState("");
    const [agency,setAgency] = useState("");
    const [amount,setAmount] = useState("");
    const [period,setPeriod] = useState("");
    const [date,setDate] = useState("");
    const [status,setStatus] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/fundedproject/select').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/fundedproject/insert',{
            name:name,
            agency:agency,
            amount:amount,
            period:period,
            date:date,
            status:status
        }).then(() => { alert("submitted") });
    } 

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>FUNDED PROJECTS</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                    <div className="form">
                        <label for="name">Project Name</label>
                        <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />
                        <label for="agency">Agency</label>
                        <input type="text" id="agency" onChange={(e) => {setAgency(e.target.value)}} /><br />
                        <label for="amount">Amount</label>
                        <input type="text" id="amount" onChange={(e) => {setAmount(e.target.value)}} /><br />
                        <label for="period">Period</label>
                        <input type="text" id="period" onChange={(e) => {setPeriod(e.target.value)}} /><br />
                        <label for="date"><IoCalendarSharp/>Date Of Sanction</label>
                        <DatePicker
                            className="custom-datepicker"
                            id="date"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                        <label for="status">Status</label>
                        <input type="radio" id="active" name="status" value="Active"onChange={(e) => {setStatus(e.target.value)}}/>
                        <label for="type">Active</label>
                        <input type="radio" id="closed" name="types" value="Closed" onChange={(e) => {setStatus(e.target.value)}}/>
                        <label for="type">Closed</label><br/>
                        <label for="letter"><HiDocumentArrowUp/>Sanction Letter</label>
                        <input type="file" id="letter" /><br />
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

export default FundedProject;