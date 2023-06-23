import styles from "./Consrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";
function Consrow(props) {
    const deletefun = () => {
        let axiosConfig = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        const cons_id = props.conid;
        console.log(cons_id);
    
        Axios.post(
          "http://localhost:3001/consultancy/delete",
          { consid: cons_id },
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label className={styles.element}>Agency</label>
                    <input type="text" disabled="disabled" value={props.agency} className={styles.element}/><br />
                    <label className={styles.element}>Year</label>
                    <input type="text" disabled="disabled" value={props.year} className={styles.element}/><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Amount</label>
                    <input type="text" disabled="disabled" value={props.amount} /><br />
                    <a href={props.certlink} target="_blank" rel="noopener noreferrer">
                    <Button
                    variant="contained"
                    startIcon={<CardMembershipIcon />}
                    size="small"
                    >
                        Certificate
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

export default Consrow;