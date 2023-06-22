import styles from "./Prevrow.module.css";
import Axios from "axios";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";


function Prevrow(props) {
  function refresh() {
    window.location.reload(); 
  }
  const deletefun = () => {
    let axiosConfig = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      
    };

    const prof_id = props.pre;
    console.log(prof_id);

    Axios.post(
      "http://localhost:3001/professional/delete",
      { profid: prof_id },
      axiosConfig
    ).then(() => {
      alert("submitted");
    });
    refresh();
  };
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
        
          <br /><br /><br />
          <Button variant="contained" color="error" onClick={deletefun}         
            startIcon={<DeleteIcon />}
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
