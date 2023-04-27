import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
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
    
    const [isVisible,setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        try {
            Axios.get('http://localhost:3001/education/select').then((response) => {
                setData(response.data)
                console.log(response.data);
            });
        }catch(e)
        {
            console.log(e);
        }
        
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/education/insert',{
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
                
            
                <div className={styles.right}>
                    <h2>Degrees</h2>
                    <Table stripped bordered hover size="sm">
                        <thead>
                         <tr>
                            <th width="170">Degree</th>
                            <th width="170">Branch</th>
                            <th width="170">Specialization</th>
                            <th width="170">University</th>
                            <th width="170">Date of acquiring</th>
                            <th width="170">Marks</th>
                         </tr>
                         </thead>
                         <tbody>
                         {data.map((item => {
                            return (<tr>
                                <td>{item.degree}</td>
                                <td>{item.branch}</td>
                                <td>{item.specialization}</td>
                                <td>{item.university}</td>
                                <td>{item.date_of_acq.toString().slice(0,10)}</td>
                                <td>{item.marks}</td>
                             </tr>)
                            }))}
                        </tbody>
                        
                    </Table>
                </div>

                <button onClick={toggleVisibilty}>Update</button>
                
                { isVisible &&
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
                </div> }
            </div>
            
        </div>
    )
}

export default Education;