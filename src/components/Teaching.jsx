import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import Edurow from "./Edurow";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Teaching.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import "./CustomDatePicker.css";

function Teaching() {
    const [year,setYear] = useState("");
    const [batch,setBatch] = useState("");
    const [branch,setBranch] = useState("");
   
    const [subcode,setCode] = useState("");
    const [subname,setSub] = useState("");
    const [data,setData] = useState([]);
    const [isVisible,setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        try {
            Axios.get('http://localhost:3001/teaching/select').then((response) => {
                setData(response.data)
                console.log(response.data);
            });
        }catch(e)
        {
            console.log(e);
        }
        
    },[]);

    const submitForm = () => {
        toggleVisibilty();
        Axios.post('http://localhost:3001/teaching/insert',{
            year:year,
            batch:batch,
            branch:branch,
            subcode:subcode,
            subname:subname
        }).then(() => { alert("submitted") });
    } 

    const data1 = [
        {
            id:1,
	        year:"First",
            batch:"R1A",
            branch:"CSE",
            subcode:"CST201",
            subname:"C-Programming"
        },
        {
            
            id:2,
	        year:"Second",
            batch:"R2A",
            branch:"CSE",
            subcode:"CST501",
            subname:"Data Structures"
        },
        {
            
            id:3,
	        year:"Third",
            batch:"R3A",
            branch:"CSE",
            subcode:"CST401",
            subname:"Mini Project"
        }
    ]

    return (
        <div className={styles.page}>
            <div className={styles.edu_navbar}>
                <Navbar />
            </div>
            
            
            <div className={styles.edu_parent}>
                <div className={styles.edu_left}>
                    <Sidebar />
                </div>
                
                <div className={styles.edu_right}>
                    {!isVisible && <div>
                        <h1 className={styles.title}>Teaching</h1> <button onClick={toggleVisibilty}>Update</button>
                        <h2>Batches</h2>
                        <div className={styles.edu_div}>
                         {data1.map((item => {
                            return (<Edurow
                                id={item.id}
                                year={item.year}
				                batch={item.batch}
                                branch={item.branch}
                                subcode={item.subcode}
                                subname={item.subname}>
                             </Edurow>)
                            }))}
                        </div>
                    </div> }
                   

                        { isVisible &&
                <div className={styles.edu_form}>
                    
                    <div className={styles.form}>
                        <h1>Update details</h1>
                        <label for="year">Year</label>
                        <input type="text" id="year" onChange={(e) => {setYear(e.target.value)}} /><br />
			            <label for="batch">Batch</label>
                        <input type="text" id="batch" onChange={(e) => {setBatch(e.target.value)}} /><br />
                        <label for="branch">Branch</label>
                        <input type="text" id="branch" onChange={(e) => {setBranch(e.target.value)}} /><br />
                        <label for="subcode">Subject Code</label>
                        <input type="text" id="subcode" onChange={(e) => {setCode(e.target.value)}} /><br />
                        <label for="subname">Subject Name</label>
                        <input type="text" id="subname" onChange={(e) => {setSub(e.target.value)}} /><br />
			            <label for="tutorial">Tutorial</label>
                        <input type="file" id="tutorial" /><br />
                        <label for="internal">Internal</label>
                        <input type="file" id="internal" /><br />
			            <label for="attendance">Attendance</label>
                        <input type="file" id="attendance" /><br />
			            <label for="feedback">Feedback</label>
                        <input type="file" id="feedback" /><br />
			            <label for="timetable">Time Table</label>
                        <input type="file" id="timetable" /><br />
			            <label for="result">Result</label>
                        <input type="file" id="result" /><br />
			            <label for="achievement">Special Achievement</label>
                        <input type="file" id="achievement" /><br />
                        <button onClick={submitForm}>SUBMIT</button>
                    </div>
                </div> }
                </div>

                
                
                
            </div>
            
        </div>
    )
}

export default Teaching;