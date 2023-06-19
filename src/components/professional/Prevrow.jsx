import styles from "./Prevrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
        <div className={styles.edit}>
          <br />
        <Button  class="edit-button"
            variant="contained"
            startIcon={<EditIcon />}
            size="small"
          >   
            Edit
            </Button>
          <br /><br /><br />
          <Button 
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
          >
            Delete
          </Button>        
        </div>
        <br />
      </div>
    </div>
  );
}

export default Prevrow;
