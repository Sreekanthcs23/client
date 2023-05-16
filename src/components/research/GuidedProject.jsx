import React, { useState, useEffect } from "react";
import Axios from "axios";
import Guidrow from "./Guidrow";
import Sidebar from "../../components/Sidebar";
import styles from "./GuidedProject.module.css";
import { IoCalendarSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function GuidedProject() {
  const [sname, setSname] = useState("");
  const [pname, setPname] = useState("");
  const [batch, setBatch] = useState("");
  const [publication, setPublication] = useState([]);
  const [data, setData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/guidedproject/select").then(
        (response) => {
          setData(response.data);
          console.log(response.data);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitForm = () => {
    toggleVisibilty();
    Axios.post("http://localhost:3001/guidedproject/insert", {
      sname: sname,
      pname: pname,
      batch: batch,
      publication: publication,
    }).then(() => {
      alert("submitted");
    });
  };

  const data1 = [
    {
      id: 1,
      sname: "Rayan",
      pname: "Cancer Detection",
      batch: "R6B",
      publication: "ML Algorithm",
    },
    {
      id: 2,
      sname: "Sreya",
      pname: "Crop Disease Detection",
      batch: "R6A",
      publication: "Deep Learning",
    },
    {
      id: 3,
      sname: "Anoop",
      pname: "Advanced Climate Predicting",
      batch: "R6A",
      publication: "Climatic Variations and Predictions",
    },
  ];

  return (
    <div className={styles.guid_content}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/guidedproject"
        >
          Guided Project
        </Link>
      </Breadcrumbs>

      {!isVisible && (
        <div className={styles.guid_div}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={toggleVisibilty}
            style={{ width: '150px' }}
          >
            UPDATE
          </Button>
          <div className={styles.guid_list}>
            {data1.map((item) => {
              return (
                <Guidrow
                  id={item.id}
                  sname={item.sname}
                  pname={item.pname}
                  batch={item.batch}
                  publication={item.publication}
                ></Guidrow>
              );
            })}
          </div>
        </div>
      )}

      {isVisible && (
        <div className={styles.guid_form}>
          <h1 className={styles.guid_form_title}>Update Details</h1>
          <label for="sname">Student Name</label>
          <br />
          <input
            type="text"
            id="sname"
            onChange={(e) => {
              setSname(e.target.value);
            }}
          />
          <br />
          <label for="pname">Project Name</label>
          <br />
          <input
            type="text"
            id="pname"
            onChange={(e) => {
              setPname(e.target.value);
            }}
          />
          <br />
          <label for="batch">Batch</label>
          <br />
          <input
            type="text"
            id="batch"
            onChange={(e) => {
              setBatch(e.target.value);
            }}
          />
          <br />
          <label for="publication">Publication</label>
          <br />
          <input
            type="text"
            id="publication"
            onChange={(e) => {
              setPublication(e.target.value);
            }}
          />
          <br />
          <br />
          <div className={styles.guid_form_button}>
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
  );
}

export default GuidedProject;
