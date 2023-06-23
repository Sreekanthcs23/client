import styles from "./Guidrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";
function Guidrow(props) {
    const deletefun = () => {
        let axiosConfig = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        const guid_id = props.guiid;
        console.log(guid_id);
    
        Axios.post(
          "http://localhost:3001/guidedproject/delete",
          { guidid: guid_id },
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label>Student Name</label>
                    <input type="text" disabled="disabled" value={props.sname} /><br />
                    <label>Project Name</label>
                    <input type="text" disabled="disabled" value={props.pname} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Batch</label>
                    <input type="text" disabled="disabled" value={props.batch} /><br />
                    <label>Publication</label>
                    <input type="text" disabled="disabled" value={props.publication} /><br />
                </div>
                <div className={styles.sub_div}>
                <Button variant="contained" color="error" onClick={deletefun}>
                    Delete
                </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Guidrow;