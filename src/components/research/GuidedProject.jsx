import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./GuidedProject.module.css";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GuidedProjet() {
    const [sname,setSname] = useState("");
    const [pname,setPname] = useState("");
  
    const [batch,setBatch] = useState("");
    const [publication,setPublication] = useState([]);
    const [data,setData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/guidedproject/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/guidedproject',{
            sname:sname,
            pname:pname,
            batch:batch,
            publication:publication
        }).then(() => { alert("submitted") });
    }
    return (
        <div>
            <h1 className={styles.title}>GUIDED PROJECTS</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                        <label for="sname">Student Name</label>
                        <input type="text" id="sname" onChange={(e) => {setSname(e.target.value)}} /><br />
                        <label for="pname">Project Name</label>
                        <input type="text" id="pname" onChange={(e) => {setPname(e.target.value)}} /><br />
                        <label for="batch">Batch</label>
                        <input type="text" id="batch" onChange={(e) => {setBatch(e.target.value)}} /><br />
                        <label for="publication">Publication</label>
                        <input type="text" id="publication" onChange={(e) => {setPublication(e.target.value)}} /><br /><br/>
                        <button onClick={submitForm}>Submit</button>
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
                    </table>
              </div>*/}
            </div>
            
        </div>
    )
}

export default GuidedProjet;
