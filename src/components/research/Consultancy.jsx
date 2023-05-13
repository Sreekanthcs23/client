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
    const [isVisible,setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }


    useEffect(() => {
        try {
            Axios.get('http://localhost:3001/consultancy/select').then((response) => {
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
        Axios.post('http://localhost:3001/consultancy/insert',{
            agency:agency,
            amount:amount,
            year:year
        }).then(() => { alert("submitted") });
    } 
    const data1 = [
        {
            id:1,
            agency:'ABC',
            amount:10000,
            year:2001
        },
        {
            id:2,
            agency:'DEF',
            amount:20000,
            year:2005
        },
        {
            id:3,
             agency:'GHI',
            amount:25000,
            year:2010
        }
    ]
    return (
        <div className={styles.page}>
            
            
            <div className={styles.cons_parent}>
               
                
                <div className={styles.cons_right}>
                    {!isVisible && <div>
                        <h1 className={styles.title}>Consultancy</h1> <button onClick={toggleVisibilty}>Update</button>
                        <div className={styles.cons_div}>
                         {data1.map((item => {
                            return (<Consrow
                                id={item.id}
                                agency={item.agency}
                                amount={item.amount}
                                year={item.year} >
                             </Consrow>)
                            }))}
                        </div>
                    </div> }
                   

                        { isVisible &&
                <div className={styles.cons_form}>
                    
                    <div className={styles.form}>
                        <h1>Update details</h1>
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
                        <label for="Amount">Amount</label>
                        <input type="text" id="amount" onChange={(e) => {setAmount(e.target.value)}} /><br />
                        <label for="year">Year</label>
                        <input type="text" id="year" onChange={(e) => {setYear(e.target.value)}} /><br />
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

export default Consultancy;