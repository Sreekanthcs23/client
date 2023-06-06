import styles from "./Profrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Profrow(props) {
  return (
    <div className={styles.main_div}>
      < br/>
      <div className={styles.col_div}>
        <div className={styles.sub_div}>
          <label>Joining Date</label>
          <input type="text" disabled="disabled" value={props.joiningDate} />         
          < br/>
          <label>Joining Designation </label>
          <input type="text" disabled="disabled" value={props.joiningDesignation} />
          <br />
          <label>Date of Problem Declaration </label>
          <input type="text" disabled="disabled" value={props.dateofProblemDeclaration} />
          <br />
        </div>
        <div className={styles.sub_div}> 
          <label>Promotion Date </label>
          <input type="text" disabled="disabled" value={props.promotionDate} />
          <br />
          <label>Promotion Designation </label>
          <input type="text" disabled="disabled" value={props.promotionDesignation} />
          <br />
        </div>
        <br />
        <div className={styles.but_cert}> 
        <div className={styles.sub_div}>
        <a href={props.problemDeclaration} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Problem Declaration
            </Button>
          </a>
          </div>
          <br />
          <a href={props.appointmentOrder} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Appointment Order
          </Button>
          </a>
          < br/>< br/>
          <a href={props.promotionOrder} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Promotion Order
          </Button>
          </a>
      </div>
      </div>
    </div>
  );
}

export default Profrow;
