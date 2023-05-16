import styles from "./Profrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Edurow(props) {
  return (
    <div className={styles.main_div}>
      <h1>{props.degree}</h1>
      <div className={styles.col_div}>
        <div>
          <label>Branch</label>
          <input type="text" disabled="disabled" value={props.branch} />
          <br />
          <label>Specialization</label>
          <input type="text" disabled="disabled" value={props.specialization} />
          <br />
        </div>
        <div>
          <label>University</label>
          <input type="text" disabled="disabled" value={props.university} />
          <br />
          <label>College</label>
          <input type="text" disabled="disabled" value={props.college} />
          <br />
        </div>
        <div>
          <label>Date of acquiry</label>
          <input type="text" disabled="disabled" value={props.date} />
          <br />
          <label>Marks</label>
          <input type="text" disabled="disabled" value={props.marks} />
          <br />
        </div>
        <div>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Cerificate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Edurow;
