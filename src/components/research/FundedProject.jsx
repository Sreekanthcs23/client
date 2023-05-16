import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Fundrow from "./Fundrow";
import Sidebar from "../../components/Sidebar";
import styles from "./FundedProject.module.css";
import { HiDocumentArrowUp } from "react-icons/hi2";
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
/*import "./CustomDatePicker.css";*/

function FundedProject() {
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilty() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/fundedproject/select").then(
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
    Axios.post("http://localhost:3001/fundedproject/insert", {
      name: name,
      agency: agency,
      amount: amount,
      period: period,
      date: date,
      status: status,
    }).then(() => {
      alert("submitted");
    });
  };

  const data1 = [
    {
      id: 1,
      name: "A",
      agency: "A1",
      amount: 10000,
      period: "1 Year",
      date: "16-08-2020",
      status: "CLOSED",
    },
    {
      id: 2,
      name: "B",
      agency: "B2",
      amount: 20000,
      period: "3 Year",
      date: "16-08-2021",
      status: "OPEN",
    },
    {
      id: 3,
      name: "C",
      agency: "C3",
      amount: 25000,
      period: "1 Year",
      date: "16-08-2023",
      status: "OPEN",
    },
  ];

  return (
    <div className={styles.fund_content}>
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
          href="/fundedproject"
        >
          Funded Project
        </Link>
      </Breadcrumbs>

      {!isVisible && (
        <div className={styles.fund_div}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={toggleVisibilty}
            style={{ width: '150px' }}
          >
            UPDATE
          </Button>
          <div className={styles.fund_div}>
            {data1.map((item) => {
              return (
                <Fundrow
                  id={item.id}
                  name={item.name}
                  agency={item.agency}
                  amount={item.amount}
                  period={item.period}
                  date={item.date.toString().slice(0, 10)}
                  status={item.status}
                ></Fundrow>
              );
            })}
          </div>
        </div>
      )}

      {isVisible && (
        <div className={styles.fund_form}>
          <h1 className={styles.fund_form_title}>Update Details</h1>
          <label for="name">Project Name</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
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
          <label for="amount">Amount</label>
          <br />
          <input
            type="text"
            id="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <br />
          <label for="period">Period</label>
          <br />
          <input
            type="text"
            id="period"
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
          />
          <br />
          <label for="date">
            <IoCalendarSharp />
            Date Of Sanction
          </label>
          <br />
          <DatePicker
            className="custom-datepicker"
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableMonthYearDropdown
          />
          <label for="status">Status</label>
          <input
            type="radio"
            id="active"
            name="status"
            value="Active"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <label for="type">Active</label>
          <input
            type="radio"
            id="closed"
            name="types"
            value="Closed"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <label for="type">Closed</label>
          <br />
          <label for="letter">
            <HiDocumentArrowUp />
            Sanction Letter
          </label>
          <br />
          <input type="file" id="letter" />
          <br />
          <div className={styles.fund_form_button}>
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

export default FundedProject;
