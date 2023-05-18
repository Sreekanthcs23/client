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
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Internal
          </Button>
        </div>
        <div className={styles.sub_div}>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Attedance
          </Button>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Feedback
          </Button>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Result
          </Button>
        </div>
        <div className={styles.sub_div}>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Timetable
          </Button>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Tutorial
          </Button>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
            sx={{ m: 2 }}
          >
            Achievement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tearow;
