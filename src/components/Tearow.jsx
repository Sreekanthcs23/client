import styles from "./Tearow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Tearow(props) {
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
          <a href={props.certInternal} target="_blank" rel="noopener noreferrer">
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
        <a href={props.certAttendance} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Attendance
          </Button>
          </a>
          <br />
          <a href={props.certFeedback} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Feedback
          </Button>
          </a>
          <br />
          <a href={props.certResult} target="_blank" rel="noopener noreferrer">
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
        <a href={props.certTimetable} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Timetable
          </Button>
          </a>
          <br />

          <a href={props.certTutorial} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Tutorial
          </Button>
          </a>
          <br />

          <a href={props.certAchievement} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Achievement
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tearow;
