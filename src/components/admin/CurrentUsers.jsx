import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Adduser.module.css";
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import "react-datepicker/dist/react-datepicker.css";
/*import "./CustomDatePicker.css";*/

function CurrentUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      Axios.get("http://localhost:3001/adduser/select", {
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

  const deluser = (usid) => {
    console.log("del user id:" + usid);
    let axiosConfig = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };
    Axios.post(
      "http://localhost:3001/adduser/delete",
      { userid: usid },
      axiosConfig
    ).then(() => {
      alert("submitted");
    });
  };

  return (
    <div className={styles.curs_content}>
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
          Add faculty
        </Link>
      </Breadcrumbs>

      <div className={styles.curs_div}>
        <div className={styles.curs_list}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.userid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.userid}
                    </TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">
                      <button
                        id={row.userid}
                        onClick={() => {
                          deluser(row.userid);
                        }}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default CurrentUsers;
