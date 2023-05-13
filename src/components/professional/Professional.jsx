import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import Profrow from "./Profrow";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Professional.module.css";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import "./CustomDatePicker.css";

function Professional() {

  
        const [joiningdate,setJoiningdate] = useState("");
        const [joiningdesignation,setJoiningdesignation] = useState("");
        const [dateofproblemdeclaration,setDateofproblemdeclaration] = useState("");
        const [promotiondate,setPromotiondate] = useState("");
        const [promotiondesignation,setPromotiondesignation] = useState("");
        const [longleaveinfo,setLongleaveinfo] = useState("");
        const [data,setData] = useState([]);
        
        const [isVisible,setIsVisible] = useState(false);
    
        function toggleVisibilty() {
            setIsVisible(!isVisible);
        }
    
        useEffect(() => {
            try {
                Axios.get('http://localhost:3001/professional/select').then((response) => {
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
            Axios.post('http://localhost:3001/professional/insert',{
                joiningdate:joiningdate,
                joiningdesignation:joiningdesignation,
                dateofproblemdeclaration:dateofproblemdeclaration,
                promotiondate:promotiondate,
                promotiondesignation:promotiondesignation,
                longleaveinfo:longleaveinfo
            }).then(() => { alert("Submitted") });
        } 
    
        const data1 = [
            {
                id:1,
                joiningdate:"10-12-2000",
                joiningdesignation:"Assistant Prof",
                dateofproblemdeclaration:"12-02-2001",
                promotiondate:"25-05-2005",
                promotiondesignation:"Prof",
                longleaveinfo:"No long leave yet",
                //marks:"9.5"
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
                            <h1 className={styles.title}>PROFESSIONAL EXPERIENCE</h1> <button onClick={toggleVisibilty}>Update</button>
                            <h2>Current Position</h2>
                            <div className={styles.edu_div}>
                             {data1.map((item => {
                                return (<Profrow
                                    id={item.id}
                                    joiningdate={item.joiningdate.toString().slice(0,10)}
                                    joiningdesignation={item.joiningdesignation}
                                    dateofproblemdeclaration={item.dateofproblemdeclaration.toString().slice(0,10)}
                                    promotiondate={item.promotiondate.toString().slice(0,10)}
                                    promotiondesignation={item.promotiondesignation}
                                    longleaveinfo={item.longleaveinfo}
                                    >
                                 </Profrow>)
                                }))}
                            </div>
                        </div> }
                       
    
                            { isVisible &&
                    <div className={styles.edu_form}>
                        
                        <div className={styles.form}>
                            <h1>Update details</h1>

                            <label for="joiningdate"><IoCalendarSharp/>Joining Date</label>
                            <DatePicker
                                className={styles.date_input}
                                id="joiningdate"
                                selected={joiningdate}
                                onChange={(joiningdate) => setJoiningdate(joiningdate)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />

                            <label for="joiningdesignation">Joining Designation</label>
                            <input type="text" id="joiningdesignation" onChange={(e) => {setJoiningdesignation(e.target.value)}} /><br />
                            
                            <label for="dateofproblemdeclaration"><IoCalendarSharp/>Date of Problem Declaration</label>
                            <DatePicker
                                className={styles.date_input}
                                id="dateofproblemdeclaration"
                                selected={dateofproblemdeclaration}
                                onChange={(dateofproblemdeclaration) => setDateofproblemdeclaration(dateofproblemdeclaration)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />

                            <label for="promotiondate"><IoCalendarSharp/>Promotion Date</label>
                            <DatePicker
                                className={styles.date_input}
                                id="promotiondate"
                                selected={promotiondate}
                                onChange={(promotiondate) => setPromotiondate(promotiondate)}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />

                            <label for="promotiondesignation">Promotion Designation</label>
                            <input type="text" id="promotiondesignation" onChange={(e) => {setPromotiondesignation(e.target.value)}} /><br />
                            
                            <label for="longleaveinfo"><HiBuildingLibrary/>Long Leave Info</label>
                            <input type="text" id="longleaveinfo" onChange={(e) => {setLongleaveinfo(e.target.value)}} /><br />
                            
                         
                            <label for="certificate"><HiDocumentArrowUp/>Certificate</label>
                            <input type="file" id="certificate" /><br />
                            <button onClick={submitForm}>Add</button>
                        </div>
                    </div> }
                    </div>
    
                    
                    
                    
                </div>
                
            </div>
        )
   
}

export default Professional;