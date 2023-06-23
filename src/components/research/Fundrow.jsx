import styles from "./Fundrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";
function Fundrow(props) {
    const deletefun = () => {
        let axiosConfig = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        const fund_id = props.funid;
        console.log(fund_id);
    
        Axios.post(
          "http://localhost:3001/fundedproject/delete",
          { fundid: fund_id },
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label>Project Name</label>
                    <input type="text" disabled="disabled" value={props.name} /><br />
                    <label>Funded Agency</label>
                    <input type="text" disabled="disabled" value={props.agency} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Period</label>
                    <input type="text" disabled="disabled" value={props.period} /><br />
                    <label>Funded Amount</label>
                    <input type="text" disabled="disabled" value={props.amount} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Date of Sanction</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                    <label>Status</label>
                    <input type="text" disabled="disabled" value={props.status} /><br />
                </div>
                <div className={styles.sub_div}>
                    <a href={props.certlink} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="contained"
                        startIcon={<CardMembershipIcon />}
                        size="small"
                    >
                     Sanction Letter
                    </Button>
                    </a>
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

export default Fundrow;