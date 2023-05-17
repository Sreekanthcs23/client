import styles from "./Prevfrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Prevrow(props) {
  return (
    <div className={styles.main_div}>
      < br/>
      <div className={styles.col_div}>
        <div>
          <label>Type</label>
          <input type="text" disabled="disabled" value={props.type} />
            
          < br/>
          <label>From </label>
          <input type="text" disabled="disabled" value={props.fromdate} />
          <br />
        </div>
        <div>
          <label>To </label>
          <input type="text" disabled="disabled" value={props.todate} />
          <br />
          <label>Institute</label>
          <input type="text" disabled="disabled" value={props.institute} />
          <br />
        </div>
        <div>
        
          <br />
          <a href={props.experience_cert_link} target="_blank" rel="noopener noreferrer">
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
