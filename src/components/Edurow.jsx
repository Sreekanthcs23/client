import styles from "./Edurow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";

function Edurow(props) {
  const deletefun = () => {
    let axiosConfig = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };

    const edu_id = props.edid;
    console.log(edu_id);

    Axios.post(
      "http://localhost:3001/education/delete",
      { eduid: edu_id },
      axiosConfig
    ).then(() => {
      alert("submitted");
    });
  };

  return (
    <div className={styles.main_div}>
      <h1>{props.degree}</h1>
      <div className={styles.col_div}>
        <div className={styles.sub_div}>
          <label>Branch</label>
          <input type="text" disabled="disabled" value={props.branch} />
          <br />
          <label>Specialization</label>
          <input type="text" disabled="disabled" value={props.specialization} />
          <br />
        </div>
        <div className={styles.sub_div}>
          <label>University</label>
          <input type="text" disabled="disabled" value={props.university} />
          <br />
          <label>Collage</label>
          <input type="text" disabled="disabled" value={props.college} />
          <br />
        </div>
        <div className={styles.sub_div}>
          <label>Date of acquiry</label>
          <input type="text" disabled="disabled" value={props.date} />
          <br />
          <label>Marks</label>
          <input type="text" disabled="disabled" value={props.marks} />
          <br />
        </div>
        <div className={styles.sub_div}>
          <a href={props.certlink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              startIcon={<CardMembershipIcon />}
              size="small"
            >
              Certificate
            </Button>
          </a>
          <Button variant="contained" color="error" onClick={deletefun}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Edurow;
