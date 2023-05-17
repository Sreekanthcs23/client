import styles from "./Profrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";

function Profrow(props) {
  return (
    <div className={styles.main_div}>
      < br/>
      <div className={styles.col_div}>
        <div>
          <label>Joining Date</label>
          <input type="text" disabled="disabled" value={props.joiningdate} />
                   
          < br/>
          <label>Joining Designation </label>
          <input type="text" disabled="disabled" value={props.joiningdesignation} />
          <br />
        </div>
        <div>
          <label>Date of Problem Declaration </label>
          <input type="text" disabled="disabled" value={props.dateofproblemdeclaration} />
          <br />
          <label>Promotion Date </label>
          <input type="text" disabled="disabled" value={props.promotiondate} />
          <br />
        </div>
        <div>
          <label>Promotion Designation </label>
          <input type="text" disabled="disabled" value={props.promotiondesignation} />
          <br />
          <a href={props.problemdeclarationcertlink} target="_blank" rel="noopener noreferrer">
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
        <div className={styles.but_cert}> 
          
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Appoinment Order
          </Button>
          < br/>< br/>
          <Button
            variant="contained"
            startIcon={<CardMembershipIcon />}
            size="small"
          >
            Promotion Order
          </Button>
      </div>
      </div>
    </div>
  );
}

export default Profrow;
