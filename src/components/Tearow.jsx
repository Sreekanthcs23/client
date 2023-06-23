import styles from "./Tearow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";
function Tearow(props) {
  const deletefun = () => {
    let axiosConfig = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };

    const tea_id = props.teid;
    console.log(tea_id);

    Axios.post(
      "http://localhost:3001/teaching/delete",
      { teaid: tea_id },
      axiosConfig
    ).then(() => {
      alert("submitted");
    });
  };
  return (
    <div className={styles.main_div}>
      <div className={styles.col_div}>
        <div className={styles.sub_div}>
          <label>Year</label>
          <input type="text" disabled="disabled" value={props.year} />
          <br />
          <label>Batch</label>
          <input type="text" disabled="disabled" value={props.batch} />
          <br />
          <label>Branch</label>
          <input type="text" disabled="disabled" value={props.branch} />
          <br />
        </div>
        <div className={styles.sub_div}>
          <label>Subject Code</label>
          <input type="text" disabled="disabled" value={props.subcode} />
          <br />
          <label>Subject Name</label>
          <input type="text" disabled="disabled" value={props.subname} />
          <br />
          <a href={props.internal} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Internal
          </Button>
          </a>
        </div>
        <div className={styles.sub_div}>
        <a href={props.attendance} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Attendance
          </Button>
          </a>
          <br />
          <a href={props.feedback} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Feedback
          </Button>
          </a>
          <br />
          <a href={props.result} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Result
          </Button>
          </a>
        </div>
        <div className={styles.sub_div}>
        <a href={props.timetable} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Timetable
          </Button>
          </a>
          <br />

          <a href={props.tutorial} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Tutorial
          </Button>
          </a>
          <br />

          <a href={props.achievement} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Achievement
          </Button>
          </a>
        </div>
        <div className={styles.sub_div}>
                <Button variant="contained" color="error" onClick={deletefun}>
                    Delete
                </Button>
        </div>
      </div>
      
      </div>
  );
}

export default Tearow;
