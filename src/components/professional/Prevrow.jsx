import styles from "./Prevrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Prevrow(props) {
  return ( 
    <div className={styles.main_div}>
      < br/>
      <div className={styles.col_div}>
        <div className={styles.sub_div}>
          <label>Type</label>
          <input type="text" disabled="disabled" value={props.type} />
            
          < br/>
          <label>From </label>
          <input type="text" disabled="disabled" value={props.fromDate.toString()} />
          <br />
        </div>
        <div className={styles.sub_div}>
        <label>To </label>
          <input type="text" disabled="disabled" value={props.toDate} />
          <br />
          <label>Designation</label>
          <input type="text" disabled="disabled" value={props.designation} />
          <br />          
        </div>

        <div className={styles.sub_div}>
        <label>Institute</label>
          <input type="text" disabled="disabled" value={props.institute} />
          <br />
          <br />
          <a href={props.experienceCertificate} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Experience Certificate
            </Button>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Prevrow;
