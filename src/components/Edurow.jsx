import styles from "./Edurow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Edurow(props) {
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
        </div>
      </div>
    </div>
  );
}

export default Edurow;
