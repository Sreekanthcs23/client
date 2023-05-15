import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Consultancy.module.css";
import Consrow from "./Consrow";
import { HiAcademicCap } from "react-icons/hi2";
import { HiBuildingLibrary } from "react-icons/hi2";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { IoCalendarSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
//import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function Consultancy() {
  const [agency, setAgency] = useState("");
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/consultancy/select").then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitForm = () => {
    toggleVisibilty();
    Axios.post("http://localhost:3001/consultancy/insert", {
      agency: agency,
      amount: amount,
      year: year,
    }).then(() => {
      alert("submitted");
    });
  };
  const data1 = [
    {
      id: 1,
      agency: "ABC",
      amount: 10000,
      year: 2001,
    },
    {
      id: 2,
      agency: "DEF",
      amount: 20000,
      year: 2005,
    },
    {
      id: 3,
      agency: "GHI",
      amount: 25000,
      year: 2010,
    },
  ];
  return (
    <div className={styles.cons_content}>
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
          href="/research/consultancy"
        >
          Consultancy
        </Link>
      </Breadcrumbs>

      {!isVisible && (
        <div className={styles.cons_div}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={toggleVisibilty}
          >
            UPDATE
          </Button>
          <div className={styles.cons_list}>
            {data1.map((item) => {
              return (
                <Consrow
                  id={item.id}
                  agency={item.agency}
                  amount={item.amount}
                  year={item.year}
                ></Consrow>
              );
            })}
          </div>
        </div>
      )}

      {isVisible && (
        <div className={styles.cons_form}>
          <h1 className={styles.cons_form_title}>Update Details</h1>

          <label for="agency">Agency</label>
          <br />
          <input
            type="text"
            id="agency"
            onChange={(e) => {
              setAgency(e.target.value);
            }}
          />
          <br />
          <label for="Amount">Amount</label>
          <br />
          <input
            type="text"
            id="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <br />
          <label for="year">Year</label>
          <br />
          <input
            type="text"
            id="year"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
          <br />
          <label for="certificate">
            <HiDocumentArrowUp />
            Certificate
          </label>
          <br />
          <input type="file" id="certificate" />
          <br />
          <div className={styles.cons_form_button}>
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

export default Consultancy;
