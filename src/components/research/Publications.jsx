
import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./Publications.module.css";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Publications() {
    const [type,setType] = useState("");
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [date,setDate] = useState("");
    const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/publications/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/publications',{
            type:type,
            title:title,
            name:name,
            startDate:startDate,
            endDate:endDate,
            date:date
        }).then(() => { alert("submitted") });
    }
    return (
        <div>
            <h1 className={styles.title}>Publications</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                        <h2>Add new row</h2>
                        <label for="type">Type</label><br />
                        <input type="radio" id="journal" name="types" value="JOURNAL"onChange={(e) => {setType(e.target.value)}}/>
                        <label for="type">JOURNAL</label>
                        <input type="radio" id="conference" name="types" value="CONFERENCE" onChange={(e) => {setType(e.target.value)}}/>
                        <label for="type">CONFERENCE</label>
                        <input type="radio" id="patent" name="types" value="PATENT" onChange={(e) => {setType(e.target.value)}}/>
                        <label for="type">PATENT</label>                   
                        <input type="radio" id="poster" name="types" value="POSTER" onChange={(e) => {setType(e.target.value)}}/>
                        <label for="type">POSTER</label>
                        <input type="radio" id="proceeding" name="types" value="CONFERENCE PROCEEDING" onChange={(e) => {setType(e.target.value)}}/>
                        <label for="type">CONFERENCE PROCEEDING</label><br />
                        <label for="title">TITLE</label>
                        <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}}/><br />
                        <label for="nameofjournal">Name of Publication</label>
                        <input type="text" id="nameofjournal" onChange={(e) => {setName(e.target.value)}} /><br />
                        <label for="period">PERIOD</label>
                        <div className={styles.dateRange}>
                            <DatePicker
                                value="Start Date"
                                className="custom-datepicker"
                                id="startDate"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                            <DatePicker
                                value="End Date"
                                className="custom-datepicker"
                                id="endDate"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                        </div>
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
                        <label for="certificate">Certificate of Publication</label>
                        <input type="file" id="certificate" /><br />
                        <button onClick={submitForm}>Add</button>
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

export default Publications;
