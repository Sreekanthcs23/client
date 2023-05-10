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
import './AddProfession.css';

function AddProfession() {
    const [join_date,setJ_date] = useState("");
    const [join_designation,setJoin_designation] = useState("");
    const [date_of_declaration,setDate_of_declaration] = useState("");
    const [promotion_date,setPromotion_date] = useState("");
    const [promotion_designation,setPromotion_designation] = useState("");
    const [remarks,setRemarks] = useState("");
    const [date1,setDate1] = useState("");
    const [date2,setDate2] = useState("");
    const [date3,setDate3] = useState("");
    const [data,setData] = useState([]);

    //const [data,setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/addprofession/data').then((response) => {
            setData(response.data)
        });
    },[]);

    const submitForm = () => {
        Axios.post('http://localhost:3001/addprofession',{
            join_date:join_date,
            join_designation:join_designation,
            date_of_declaration:date_of_declaration,
            promotion_date:promotion_date,
            promotion_designation:promotion_designation,
            remarks:remarks
        }).then(() => { alert("Submitted") });
    } 

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>AddProfession</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                    <div className="form">
                        <h2>Add New Profession</h2>
                        <label for="join_date"><IoCalendarSharp/>join_date</label>
                        <DatePicker
                            className="custom-datepicker"
                            id="join_date"
                            selected={date1}
                            onChange={(date1) => setDate1(date1)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                       
                        <label for="join_designation">Join_designation</label>
                        <input type="text" id="join_designation" onChange={(e) => {setJoin_designation(e.target.value)}} /><br />
                        <label for="date_of_declaration"><IoCalendarSharp/>date_of_declaration</label>
                       
                       <DatePicker
                            className="custom-datepicker"
                            id="date_of_declaration"
                            selected={date2}
                            onChange={(date2) => setDate2(date2)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                        <label for="promotion_date"><IoCalendarSharp/>promotion_date</label>
                        <DatePicker
                            className="custom-datepicker"
                            id="promotion_date"
                            selected={date3}
                            onChange={(date3) => setDate3(date3)}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                       
                      
                       
                        <label for="promotion_designation">promotion_designation</label>
                        <input type="text" id="promotion_designation" onChange={(e) => {setPromotion_designation(e.target.value)}} /><br />
                        <label for="remarks">remarks</label>
                        <input type="text" id="remarks" onChange={(e) => {setRemarks(e.target.value)}} /><br />
                        <label for="certificate"><HiDocumentArrowUp/>Certificate</label>
                        <input type="file" id="certificate" /><br />
                        <button onClick={submitForm}>Add</button>
                    </div>
                </div>
            
                <div className={styles.right}>
                    <h2>join_date</h2>
                    <table>
                        <tr>
                            <th>join_date</th>
                            <th>join_designation</th>
                            <th>date_of_declaration</th>
                            <th>Promotion date</th>
                            <th>Promotion Designation</th>
                            <th>Remarks</th>
                        </tr>
                        {data.map((item => {
                            return (<tr>
                                <td>{item.join_date}</td>
                                <td>{item.join_designation}</td>
                                <td>{item.date_of_declaration}</td>
                                <td>{item.promotion_date}</td>
                                <td>{item.dateofacq.toString().slice(0,10)}</td>
                                <td>{item.remarks}</td>
                            </tr>)
                        }))}
                    </table>
                    </div>
            </div>
            
        </div>
    )
}

export default AddProfession;