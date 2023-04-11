import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./Education.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function Education() {
    const [degree,setDegree] = useState("");
    const [branch,setBranch] = useState("");
    const [specialization,setSpecialization] = useState("");
    const [university,setUniversity] = useState("");
    const [date,setDate] = useState("");
    const [marks,setMarks] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/education/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/education',{
            degree:degree,
            branch:branch,
            specialization:specialization,
            university:university,
            date:date,
            marks:marks
        }).then(() => { alert("submitted") });
    } 

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Education</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                    <div className="form">
                        <h2>Add new row</h2>
                        <label for="degree"><HiAcademicCap/>Degree</label>
                        <input type="text" id="degree" onChange={(e) => {setDegree(e.target.value)}} /><br />
                        <label for="branch">Branch</label>
                        <input type="text" id="branch" onChange={(e) => {setBranch(e.target.value)}} /><br />
                        <label for="specialization">Specialization</label>
                        <input type="text" id="specialization" onChange={(e) => {setSpecialization(e.target.value)}} /><br />
                        <label for="university"><HiBuildingLibrary/>University</label>
                        <input type="text" id="university" onChange={(e) => {setUniversity(e.target.value)}} /><br />
                        <label for="date"><IoCalendarSharp/>Date of acquiring</label>
                        <DatePicker
                            className="custom-datepicker"
                            id="date"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                        <label for="marks">Marks</label>
                        <input type="text" id="marks" onChange={(e) => {setMarks(e.target.value)}} /><br />
                        <label for="certificate"><HiDocumentArrowUp/>Certificate</label>
                        <input type="file" id="certificate" /><br />
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

export default Education;