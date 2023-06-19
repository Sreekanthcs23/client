import React,{useState,useEffect} from "react";
import Axios from "axios";
import styles from "./ResearchGuide.module.css";
import Resguidrow from "./Resguidrow";
import {HiAcademicCap} from "react-icons/hi2";
import {HiBuildingLibrary} from "react-icons/hi2";
import {HiDocumentArrowUp} from "react-icons/hi2";
import {IoCalendarSharp} from "react-icons/io5";
import DatePicker from "react-datepicker";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
/*import "./CustomDatePicker.css";*/

function ResearchGuide() {
    const [name,setName] = useState("");
    const [date,setDate] = useState("");//
    const [area,setArea] = useState("");
    const [topic,setTopic] = useState("");
    const [publication,setPublication] = useState("");
    const [certFile, setCertFile] = useState(null);
    const [data,setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibilty() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        try {
          Axios.get("http://localhost:3001/researchguide/select", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }).then((response) => {
            setData(response.data);
            console.log(response.data);
          });
        } catch (e) {
          console.log(e);
        }
      }, []);
    
      const submitForm = () => {
        let cert = certFile[0];
        let formData = new FormData();
        formData.append("pdffile", cert);
        formData.append("name", name);
        formData.append("date", date);
        formData.append("area", area);
        formData.append("topic", topic);
        formData.append("publication", publication);
    
        let axiosConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        toggleVisibilty();
    
        Axios.post(
          "http://localhost:3001/researchguide/insert",
          formData,
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };

    const data1 = [
        {
          id: 1,
          name: "AAAA",
          date: "7-05-2023",
          area: "A",
          topic: "DR",
          publication: "kk",
        },
        {
          id: 2,
          name: "BBBB",
          date: "16-08-2020",
          area: "BA",
          topic: "OP",
          publication: "HI",
        },
        {
          id: 3,
          name: "CCCC",
          date: "6-01-2022",
          area: "C",
          topic: "RD",
          publication: "GGGG",
        },
    ];
    return (
        <div className={styles.resguid_content}>
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
                    href="/research/researchguide"
                >
                    Research Guide
                </Link>
            </Breadcrumbs>
           
            {!isVisible && (
                <div className={styles.resguid_div}>
                 <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={toggleVisibilty}
                    style={{ width: '150px' }}
                 >
                UPDATE
                </Button>
                <div className={styles.resguid_list}>
                    {data.map((item) => {
                    return (
                        <Resguidrow
                        key={item.idresearchguide}
                        name={item.name}
                        date={item.resguid_date.toString().slice(0, 11)}
                        area={item.area}
                        topic={item.topic}
                        publication={item.publication}
                        certlink={item.certi_link}
                        ></Resguidrow>
                    );
                    })}
                </div>
            </div>
           )}
            {isVisible && (
                <div className={styles.resguid_form}>
                <h1 className={styles.resguid_form_title}>Update Details</h1>
                
                <label for="name">Name of Publication</label><br />
                <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} /><br />                    
                <label for="date"><IoCalendarSharp/>Date Of Publication</label><br />
                <DatePicker
                    className="custom-datepicker"
                    id="date"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                /><br />
                <label for="area">Area</label><br />
                <input type="text" id="area" onChange={(e) => {setArea(e.target.value)}}/><br />
                <label for="topic">Topic</label><br />
                <input type="text" id="topic" onChange={(e) => {setTopic(e.target.value)}}/><br />
                <label for="publication">Publication</label><br />
                <input type="text" id="publication" onChange={(e) => {setPublication(e.target.value)}}/><br />
                <label for="certificate">
                <HiDocumentArrowUp />
                Certificate
                </label>
                <br />
                <input
                type="file"
                name="pdffile"
                accept="application/pdf"
                id="pdffile"
                onChange={(e) => {
                    setCertFile(e.target.files);
                }}
                />
                <div className={styles.resguid_form_button}>
                    <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddIcon />}
                    onClick={submitForm}
                    >
                    SUBMIT
                    </Button>
                </div>
                </div>       
                )}
            
        </div>
    )
}

export default ResearchGuide;